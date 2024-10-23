import Codeblock from "@/components/codeblock";
import { currentUser } from "@clerk/nextjs/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function UserIndex() {
  const user = await currentUser();

  if (!user) return null;

  return (
    <div className={"flex w-full gap-4"}>
      <Card className={"w-full max-w-sm"}>
        <CardHeader>
          <CardTitle>Current User</CardTitle>
        </CardHeader>
        <CardContent>
          <div className={"flex flex-col"}>
            <p>
              {user.firstName} {user.lastName}
            </p>
            <p>{user?.primaryEmailAddress?.emailAddress}</p>
          </div>
        </CardContent>
      </Card>
      <div className={"flex flex-col gap-2 w-full max-w-sm"}>
        <p>User Public Metadata</p>
        <Codeblock text={JSON.stringify(user.publicMetadata, undefined, 2)} />
      </div>
    </div>
  );
}
