import { Heading } from "@/components/heading";
import { atividades } from "../_data/atividades";

export function Atividades() {
  return (
    <div className="border-2 p-4 mt-12 mb-8">
      <Heading title="Atividades" />

      <div className="mb-4 flex items-center justify-between flex-wrap gap-6">
        {atividades.map(({ nome, prazo }, index) => (
          <div key={index}>
            <p>{nome}</p>
            <p>
              <span className="text-gray-500">Prazo:</span>
              {prazo}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
