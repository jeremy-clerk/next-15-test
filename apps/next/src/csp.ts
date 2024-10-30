export function _getCSPandNonce(): { nonce: string; csp: string } {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  // clerk requires 'unsafe-inline' for styles
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'strict-dynamic' 'nonce-${nonce}' https: http: ${
      process.env.NODE_ENV === "production" ? "" : `'unsafe-eval'`
    };
    connect-src 'self' https://in-wahoo-95.accounts.dev *.sentry.io ${process.env.NODE_ENV === "production" ? "" : `webpack://*`};
    img-src 'self'  'nonce-${nonce}' https://img.clerk.com;
    worker-src 'self' blob:;
    style-src 'self' 'unsafe-inline' https://rsms.me/inter/* ;
    frame-src 'self' 'nonce-${nonce}' https://challenges.cloudflare.com;
    form-action 'self' 'nonce-${nonce}';
    font-src 'self' https://rsms.me/inter/*;
    object-src 'none';
    base-uri 'self';
    media-src 'none';
    upgrade-insecure-requests;
  `;
  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, " ")
    .trim();

  return { nonce, csp: contentSecurityPolicyHeaderValue };
}
