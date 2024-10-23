import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export interface CodeblockProps extends HTMLAttributes<HTMLDivElement> {
  text?: string;
}

export default function Codeblock(props: CodeblockProps) {
  return (
    <pre
      className={cn(
        props.className,
        "p-4 bg-zinc-700 rounded-md text-orange-400 overflow-auto",
      )}
    >
      {props.text}
    </pre>
  );
}
