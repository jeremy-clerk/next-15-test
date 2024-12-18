import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const pages = [
    { href: "/ssr/fetch", text: "fetch example" },
    { href: "/ssr/org/profile", text: "org profile" },
    { href: "/ssr/org/create", text: "create org" },
    { href: "/ssr/user/profile", text: "user profile" },
    { href: "/ssr/user/mixed", text: "user ssr/csr mixed" },
  ];

  const ListItem = ({ text, href }: { text: string; href: string }) => (
    <Link href={href}>
      <li
        className={
          "p-2 bg-slate-800 rounded-md hover:bg-slate-900 shadow border cursor-pointer capitalize"
        }
      >
        {text}
      </li>
    </Link>
  );

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full">
        <Card className={"w-full max-w-sm"}>
          <CardHeader>
            <CardTitle>Pages to visit</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className={"flex flex-col gap-2"}>
              {pages.map((page, index) => (
                <ListItem key={index} text={page.text} href={page.href} />
              ))}
            </ul>
          </CardContent>
          <CardFooter className={"flex justify-center"}>
            <Link href={"/dynamic"}>
              <Button>To Dynamic Clerk Provider Pages</Button>
            </Link>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
