export function Title({ title }: { title: string }) {
  return (
    <div className="text-center">
      <h3 className="text-3xl text-blue-900">{title}</h3>
    </div>
  );
}
