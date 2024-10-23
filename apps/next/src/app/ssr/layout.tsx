import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "@/app/ssr/components/nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <NavBar />
      {children}
    </ClerkProvider>
  );
}
