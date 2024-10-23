"use client";
import { OrganizationProfile, useAuth } from "@clerk/nextjs";

export default function OrgProfile() {
  const { orgId } = useAuth();

  return (
    <>
      {orgId && <OrganizationProfile path={"/dynamic/org/profile"} />}
      {!orgId && <div>No active org.</div>}
    </>
  );
}
