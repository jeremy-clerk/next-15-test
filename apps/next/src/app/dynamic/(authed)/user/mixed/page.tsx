"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UserForm from "@/app/ssr/components/userForm";
import Codeblock from "@/components/codeblock";
import CsrUserCard from "@/app/ssr/components/csrUserCard";
import { useUser } from "@clerk/nextjs";

export default function MixedComponents() {
  const { user } = useUser();

  if (!user) return null;

  return (
    <div className={"flex gap-4 w-full"}>
      <Card className={"w-full max-w-lg"}>
        <CardHeader>
          <CardTitle>useUser()</CardTitle>
          <CardDescription>
            This is using the data form useUser()
          </CardDescription>
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
        <CardFooter></CardFooter>
      </Card>
      <Card className={"w-full max-w-lg"}>
        <CardHeader>
          <CardTitle></CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <UserForm
            firstName={user.firstName || ""}
            lastName={user.lastName || ""}
            email={user.primaryEmailAddress?.emailAddress || ""}
            onSubmit={() => {
              user.reload();
            }}
          />
        </CardContent>
        <CardFooter className={"flex flex-col"}>
          <span className={"text-red-300"}>
            When you update the user data, all the components should update.
          </span>
        </CardFooter>
      </Card>
      <CsrUserCard />
    </div>
  );
}
