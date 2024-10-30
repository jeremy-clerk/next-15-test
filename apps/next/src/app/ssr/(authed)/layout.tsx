export default function AuthedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={"flex flex-col w-full h-full text-white"}>
      <div className={"flex w-full p-8 flex-col justify-center items-center"}>
        {children}
      </div>
    </div>
  );
}
