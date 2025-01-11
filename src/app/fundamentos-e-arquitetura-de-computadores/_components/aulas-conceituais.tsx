import { Heading } from "@/components/heading";
import { Computer } from "lucide-react";
import { aulasConceituais } from "../_data/aulas-conceituais";

export function AulasConceituais() {
  return (
    <div className="border-2 p-4 mt-12 mb-8 bg-white shadow-md">
      <Heading>
        <Computer />
        <h2>Aulas Conceituais</h2>
      </Heading>

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
