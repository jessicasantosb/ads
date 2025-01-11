export function Heading({ title }: { title: string }) {
  return (
    <div className="text-center pb-8">
      <h2 className="text-xl uppercase text-gray-700">{title}</h2>
    </div>
  );
}
