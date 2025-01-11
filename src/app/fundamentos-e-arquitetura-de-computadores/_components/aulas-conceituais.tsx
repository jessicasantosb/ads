import { Heading } from "@/components/heading";
import { aulasConceituais } from "../_data/aulas-conceituais";

export function AulasConceituais() {
  return (
    <div className="border-2 p-4 mt-12 mb-8">
      <Heading title="Aulas Conceituais" />

      <div className="mb-4 flex items-center justify-between flex-wrap gap-6">
        {aulasConceituais.map(({ dia, tema }, index) => (
          <div key={index}>
            <p>
              <span className="text-gray-500">Dia: </span>
              {dia}
            </p>
            <p>
              <span className="text-gray-500">Tema: </span>
              {tema}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
