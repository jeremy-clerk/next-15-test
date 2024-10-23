import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UserForm from "@/app/ssr/components/userForm";
import { currentUser } from "@clerk/nextjs/server";
import Codeblock from "@/components/codeblock";
import CsrUserCard from "@/app/ssr/components/csrUserCard";

export default async function MixedComponents() {
  const user = await currentUser();

  if (!user) return null;

  return (
    <div className={"flex gap-4 w-full"}>
      <Card className={"w-full max-w-lg"}>
        <CardHeader>
          <CardTitle>SSR Only Component</CardTitle>
          <CardDescription>
            This component uses data from auth/currentUser().
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
          <CardTitle>Mixed Component</CardTitle>
          <CardDescription>
            This component mixes client side & server side rendering. The auth
            props are passed to the client component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UserForm
            firstName={user.firstName || ""}
            lastName={user.lastName || ""}
            email={user.primaryEmailAddress?.emailAddress || ""}
          />
        </CardContent>
        <CardFooter className={"flex flex-col"}>
          <span className={"text-red-300"}>
            When you update the user from the client component, the server
            component is not going to update.
          </span>
        </CardFooter>
      </Card>
      <CsrUserCard />
    </div>
  );
}
