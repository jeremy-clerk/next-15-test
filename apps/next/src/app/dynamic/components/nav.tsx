import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  return (
    <nav className={"px-6 py-2 flex justify-between bg-secondary"}>
      <div className={"flex items-center gap-4"}>
        <Link href={"/"}>
          <Button>Home</Button>
        </Link>
        <Link href={"/dynamic"}>
          <Button>Dynamic Pages</Button>
        </Link>
      </div>
      <UserButton userProfileUrl={"/dynamic/user/profile"} />
    </nav>
  );
}
