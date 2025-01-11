import { Check } from "lucide-react";

import { Heading } from "@/components/heading";

export function Notas() {
  return (
    <div className="content-wrapper bg-blue-200/10">
      <Heading>
        <Check />
        <h2>Notas</h2>
      </Heading>

      <p>
        <span className="text-gray-500">ATV: </span>
        (nota)
      </p>
      <p>
        <span className="text-gray-500">MAPA: </span>
        (nota)
      </p>
      <p>
        <span className="text-gray-500">SCG: </span>
        (nota)
      </p>
      <p>
        <span className="text-gray-500">PROVA: </span>
        (nota)
      </p>
      <strong>
        <span className="text-gray-500">MÈDIA FINAL:</span>
        (nota)
      </strong>
    </div>
  );
}
