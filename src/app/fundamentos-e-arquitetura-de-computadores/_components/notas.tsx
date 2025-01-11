import { Heading } from "@/components/heading";

export function Notas() {
  return (
    <div className="border-2 p-4 mt-12 mb-8 bg-blue-300/10">
      <Heading title="Notas" />

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
