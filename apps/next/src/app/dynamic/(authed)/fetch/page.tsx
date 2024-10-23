"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function FetchExample() {
  const [phraseSet1, setPhraseSet1] = useState([]);
  const [phraseSet2, setPhraseSet2] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/hacker`)
        .then(async (res) => {
          if (res.status !== 200) {
            throw new Error("Error fetching data.");
          } else {
            return await res.json();
          }
        })
        .catch((e) => console.log(e));
      setPhraseSet1(res.data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/hacker`)
        .then(async (res) => {
          if (res.status !== 200) {
            throw new Error("Error fetching data.");
          } else {
            return await res.json();
          }
        })
        .catch((e) => console.log(e));
      setPhraseSet2(res.data);
    })();
  }, []);

  return (
    <div className={"w-full flex gap-4 items-center justify-center"}>
      <Card>
        <CardHeader>
          <CardTitle>Some Cool Hacker Slang</CardTitle>
          <CardDescription>Fetched from: &#34;/api/hacker&#34;</CardDescription>
          <CardContent>
            <ul className={"divide-y divide-zinc-700"}>
              {phraseSet1 ? (
                phraseSet1?.map((phrase: string, index: number) => (
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
            <ul className={"divide-y divide-zinc-700"}>
              {phraseSet2 ? (
                phraseSet2?.map((phrase: string, index: number) => (
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
    </div>
  );
}
