import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { headers } from "next/headers";
import ErrorAlert from "@/components/error";

export default async function FetchExample() {
  const headerList = await headers();

  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  //There's really no need to fetch from here, this is server side, you could just call the function.
  // However, there's going to be a lot of people with this pattern.

  const phraseSet1 = await fetch(
    `${protocol}://${headerList.get("host")}/api/hacker`,
    {
      headers: {
        cookie: headerList.get("cookie") || "",
      },
    },
  )
    .then(async (res) => {
      if (res.status !== 200) {
        throw new Error("Error fetching data.");
      } else {
        return await res.json();
      }
    })
    .catch((e) => console.log(e));

  const phraseSet2 = await fetch(
    `${protocol}://${headerList.get("host")}/api/hacker`,
  )
    .then(async (res) => {
      if (res.status !== 200) {
        throw new Error("Error fetching data.");
      } else {
        return await res.json();
      }
    })
    .catch((e) => console.log(e));

  return (
    <div className={"w-full flex gap-4 items-center justify-center"}>
      <Card>
        <CardHeader>
          <CardTitle>Some Cool Hacker Slang</CardTitle>
          <CardDescription>Fetched from: &#34;/api/hacker&#34;</CardDescription>
          <CardContent>
            <ul className={"divide-y divide-zinc-700"}>
              {phraseSet1 ? (
                phraseSet1?.data?.map((phrase: string, index: number) => (
                  <li key={index} className={"p-1 font-mono text-green-400"}>
                    {phrase}
                  </li>
                ))
              ) : (
                <p>Error</p>
              )}
            </ul>
          </CardContent>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Some Cool Hacker Slang</CardTitle>
          <CardDescription>Fetched from: &#34;/api/hacker&#34;</CardDescription>
          <CardContent>
            {phraseSet2 ? (
              phraseSet2?.data?.map((phrase: string, index: number) => (
                <p key={index}>{phrase}</p>
              ))
            ) : (
              <ErrorAlert
                title={"Fetch Failed"}
                description={"No cookies sent, this request fails."}
              />
            )}
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
}
