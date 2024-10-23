"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Codeblock from "@/components/codeblock";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function CsrUserCard() {
  const { user, isLoaded } = useUser();

  if (!user || !isLoaded) return null;

  return (
    <Card className={"w-full max-w-lg"}>
      <CardHeader>
        <CardTitle></CardTitle>
        <CardDescription>Purely CSR Component</CardDescription>
      </CardHeader>
      <CardContent>
        <Codeblock
          text={JSON.stringify(
            { firstName: user.firstName, lastName: user.lastName },
            undefined,
            2,
          )}
        />
      </CardContent>
      <CardFooter className={"flex flex-col gap-2"}>
        <div className={"text-blue-400"}>
          When you update the user initially, this won&apos;t update. If you
          unfocus and refocus it will. You can also reload the user with the
          button below.
        </div>
        <div>
          <Button
            onClick={() => {
              user.reload();
            }}
          >
            Reload User
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
