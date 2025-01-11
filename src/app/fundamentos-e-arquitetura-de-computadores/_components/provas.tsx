import { Heading } from "@/components/heading";

export function Provas() {
  return (
    <div className="border-2 p-4 mt-12 mb-8 bg-blue-300/10">
      <Heading title="Prova" />

      <p>
        <span className="text-gray-500">Agendamento: </span>
        00/00
      </p>
      <strong>
        <span className="text-gray-500">Data da prova: </span>
        00/00
      </strong>
      <p>
        <span className="text-gray-500">Lançamento da nota: </span>
        00/00
      </p>
    </div>
  );
}
