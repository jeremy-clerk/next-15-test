import { OrganizationProfile, OrganizationSwitcher } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function OrgPage() {
  const { orgId } = await auth.protect();

  return (
    <div>
      <OrganizationSwitcher
        createOrganizationUrl={"/org/ssr/create"}
        organizationProfileUrl={"/org/ssr/profile"}
      />
      {orgId && <OrganizationProfile routing={"hash"} path={undefined} />}
    </div>
  );
}
