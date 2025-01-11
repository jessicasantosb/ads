import { Code } from "lucide-react";

import { Heading } from "@/components/heading";

export function Provas() {
  return (
    <div className="content-wrapper bg-blue-200/10">
      <Heading>
        <Code />
        <h2>Prova</h2>
      </Heading>

      <p>
        <span className="text-muted-foreground">Agendamento: </span>
        00/00
      </p>
      <strong>
        <span className="text-muted-foreground">Data da prova: </span>
        00/00
      </strong>
      <p>
        <span className="text-muted-foreground">Lançamento da nota: </span>
        00/00
      </p>
    </div>
  );
}
