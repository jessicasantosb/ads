import { Heading } from "@/components/heading";
import { Wifi } from "lucide-react";
import { aulasAoVivo } from "../_data/aulas-ao-vivo";

export function AulasAoVivo() {
  return (
    <div className="border-2 p-4 mt-12 mb-8 bg-white shadow-md">
      <Heading>
        <Wifi />
        <h2>Aulas ao vivo</h2>
      </Heading>

      <div className="mb-4 flex items-center justify-between flex-wrap gap-6">
        {aulasAoVivo.map(({ dia, horas }, index) => (
          <div key={index}>
            <p>
              <span className="text-gray-500">Dia: </span>
              {dia}
            </p>
            <p>
              <span className="text-gray-500">Horas: </span>
              {horas}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
