import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";

export default async function NavBar() {
  const { sessionId } = await auth();

  if (!sessionId) return null;

  return (
    <nav className={"px-6 py-2 flex justify-between bg-secondary"}>
      <div className={"flex items-center gap-4"}>
        <Link href={"/"}>
          <Button>Home</Button>
        </Link>
        <Link href={"/ssr"}>
          <Button>Non Dynamic Pages</Button>
        </Link>
      </div>
      <UserButton userProfileUrl={"/ssr/user/profile"} />
    </nav>
  );
}
