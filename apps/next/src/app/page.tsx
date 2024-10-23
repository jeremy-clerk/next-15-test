import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className={"flex-col flex justify-center items-center w-full h-full"}>
      <Card>
        <CardHeader>
          <CardTitle>Welcome!</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This application is running NextJS 15 and @clerk/nextjs V6</p>
          <p>
            Under the /ssr routes you&apos;ll find pages rendered with the
            static
            <code className={"bg-zinc-700 text-orange-400 mx-1"}>
              {"<ClerkProvider />"}
            </code>
          </p>
          <p>
            Under the /dynamic routes, you&apos;ll find pages rendered under
            <code className={"bg-zinc-700 text-orange-400 mx-1"}>
              {"<ClerkProvider dynamic/>"}
            </code>
          </p>
        </CardContent>
        <CardFooter className={"flex gap-2 justify-end"}>
          <Link href={"/ssr"}>
            <Button>Non Dynamic Clerk Provider</Button>
          </Link>
          <Link href={"/dynamic"}>
            <Button>Dynamic Clerk Proivder</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
