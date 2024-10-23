import { OrganizationProfile } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function OrgProfile() {
  const { orgId } = await auth();

  return (
    <>
      {orgId && <OrganizationProfile path={"/ssr/org/profile"} />}
      {!orgId && <div>No active organization set.</div>}
    </>
  );
}
