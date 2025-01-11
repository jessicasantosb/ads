import { Heading } from "@/components/heading";
import { NotebookPen } from "lucide-react";
import { atividades } from "../_data/atividades";

export function Atividades() {
  return (
    <div className="border-2 p-4 mt-12 mb-8 bg-white shadow-md">
      <Heading>
        <NotebookPen />
        <h2>Atividades</h2>
      </Heading>

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
