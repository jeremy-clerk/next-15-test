import { UserProfile } from "@clerk/nextjs";

export default function UserSSR() {
  return <UserProfile path={"/dynamic/user/profile"} />;
}
