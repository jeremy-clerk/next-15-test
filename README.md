# Demo Next 15 & Clerk V6

Routes under `/dynamic` are using a `<ClerkProvider dynamic/>` to opt in to [dynamic rendering](https://clerk.com/changelog/2024-10-22-clerk-nextjs-v6#static-rendering-by-default-opt-in-dynamic-and-partial-prerendering-support).

Routes under `/ssr` are using the new default `<ClerkProvider />` that static renders by default.

## Setup
Copy the `.env.example` file in the `/apps/next` directory to `.env.local` in the `/apps/next` directory.

Past your secret key and publishable key into the `.env.local` file you just created.

### Install dependencies
From the root directory: 
```bash
pnpm i
```

## Run the application
After the dependencies install run the dev command from the root directory:
```bash
pnpm dev
```

Visit [`localhost:3000`](http://localhost:3000) in your browser and sign in. 


#### Features

API Routes:
- `/hacker` returns 10 random 'hacker' phrases
- `/user/update` POST to update first and last name.  

UI Routes: 
- `/` displays welcome message
- `/dynamic` lists routes under the dynamic Clerk Provider with links.
  - `/fetch` fetches data from the hacker endpoint
  - `/org/create` Create Organization component
  - `/org/profile` Organization Profile component
  - `/user/profile` User Profile component
  - `/user/mixed` Page with a component to update first & last name + view how the components update
  - `/standard/sign-in` Page that mounts the standard sign in component
  - `/standard/sign-up` Page that mounts the standard sign up component
  - `/noauth` Page that does not require auth to visit, shows various links
- `/ssr` lists routes under the dynamic Clerk Provider with links.
    - `/fetch` fetches data from the hacker endpoint - one request is designed to fail.
    - `/org/create` Create Organization component
    - `/org/profile` Organization Profile component
    - `/user/profile` User Profile component
    - `/user/mixed` Page with mixed SSR / CSR components
    - `/standard/sign-in` Page that mounts the standard sign in component
    - `/standard/sign-up` Page that mounts the standard sign up component
    - `/noauth` Page that does not require auth to visit, shows various links