export default function ErrorAlert({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-md bg-red-200 p-4">
      <div className="flex">
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">{title}</h3>
          <div className="mt-2 text-sm text-red-700">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
