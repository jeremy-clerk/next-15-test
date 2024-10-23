export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={"flex flex-col w-full h-full text-white"}>{children}</div>
  );
}
