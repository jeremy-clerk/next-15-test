import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Index() {
  return (
    <div
      className={
        "w-full h-full flex items-center justify-center flex-col gap-4 text-primary"
      }
    >
      <p>This page is not authed.</p>
      <SignedIn>
        <p>You are signed in.</p>
        <Link href={"/"}>
          <Button>Home</Button>
        </Link>
      </SignedIn>
      <SignedOut>
        <p>You are signed out.</p>
        <Link href={"/ssr/standard/sign-in"}>
          <Button>Go to sign in</Button>
        </Link>
        <Link href={"/ssr"}>
          <Button>Try to go to an authed page</Button>
        </Link>
      </SignedOut>
    </div>
  );
}
