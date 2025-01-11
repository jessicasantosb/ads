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
        <span className="text-muted-foreground">ATV: </span>
        (nota)
      </p>
      <p>
        <span className="text-muted-foreground">MAPA: </span>
        (nota)
      </p>
      <p>
        <span className="text-muted-foreground">SCG: </span>
        (nota)
      </p>
      <p>
        <span className="text-muted-foreground">PROVA: </span>
        (nota)
      </p>
      <strong>
        <span className="text-muted-foreground">MÈDIA FINAL:</span>
        (nota)
      </strong>
    </div>
  );
}
