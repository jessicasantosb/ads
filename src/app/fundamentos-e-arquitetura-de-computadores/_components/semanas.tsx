import { Heading } from "@/components/heading";
import { semanas } from "../_data/semanas";

export function Semanas() {
  return (
    <div className="border-2 p-4 mt-12 mb-8">
      <Heading title="Semana acadêmica da disciplina" />

      <div className="mb-4 flex items-center justify-between flex-wrap gap-6">
        {semanas.map(({ week, from, to }) => (
          <div key={week}>
            <p className="text-zinc-700">{week}</p>
            <p className="text-gray-500">
              de <span className="text-black">{from}</span> a{" "}
              <span className="text-black">{to}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
