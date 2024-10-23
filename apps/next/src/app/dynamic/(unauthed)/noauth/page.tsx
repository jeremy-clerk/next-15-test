"use client";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Index() {
  //not recommended anymore
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) return null;

  return (
    <div
      className={
        "w-full h-full flex items-center justify-center flex-col gap-4 text-primary"
      }
    >
      <p>This page is not authed.</p>
      {isSignedIn && (
        <>
          <p>You are signed in.</p>
          <Link href={"/"}>
            <Button>Home</Button>
          </Link>
        </>
      )}
      {!isSignedIn && (
        <>
          <p>You are signed out.</p>
          <Link href={"/dynamic/standard/sign-in"}>
            <Button>Go to sign in</Button>
          </Link>
          <Link href={"/dynamic"}>
            <Button>Try to go to an authed page</Button>
          </Link>
        </>
      )}
    </div>
  );
}
