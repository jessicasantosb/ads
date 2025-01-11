import { Heading } from "@/components/heading";
import { NotebookPen } from "lucide-react";
import { atividades } from "../_data/atividades";

export function Atividades() {
  return (
    <div className="content-wrapper">
      <Heading>
        <NotebookPen />
        <h2>Atividades</h2>
      </Heading>

      <div className="mb-4 flex items-center justify-between flex-wrap gap-6">
        {atividades.map(({ nome, prazo }, index) => (
          <div key={index}>
            <p>{nome}</p>
            <p>
              <span className="text-muted-foreground">Prazo:</span>
              {prazo}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
