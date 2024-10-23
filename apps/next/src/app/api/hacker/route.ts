import { faker } from "@faker-js/faker";
export async function GET() {
  const phrases = faker.helpers.multiple(() => faker.hacker.phrase(), {
    count: 10,
  });
  return Response.json({ data: phrases });
}
