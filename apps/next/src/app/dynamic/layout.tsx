import { ClerkProvider } from "@clerk/nextjs";
import { Suspense } from "react";
import Fallback from "@/app/dynamic/components/fallback";
import NavBar from "@/app/dynamic/components/nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<Fallback />}>
      <ClerkProvider dynamic>
        <NavBar />
        {children}
      </ClerkProvider>
    </Suspense>
  );
}
