import { auth, clerkClient } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  const { userId } = await auth();

  const data = await req.json().catch((e) => console.error(e));

  if (!data || !userId)
    return Response.json(
      { error: "Error processing request." },
      { status: 500 },
    );

  const client = await clerkClient();

  const updateRes = await client.users.updateUser(userId, {
    firstName: data.firstName,
    lastName: data.lastName,
  });

  return Response.json(updateRes);
}
