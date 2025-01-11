import { Heading } from "@/components/heading";
import { Wifi } from "lucide-react";
import { aulasAoVivo } from "../_data/aulas-ao-vivo";

export function AulasAoVivo() {
  return (
    <div className="content-wrapper">
      <Heading>
        <Wifi />
        <h2>Aulas ao vivo</h2>
      </Heading>

      <div className="mb-4 flex items-center justify-between flex-wrap gap-6">
        {aulasAoVivo.map(({ dia, horas }, index) => (
          <div key={index}>
            <p>
              <span className="text-muted-foreground">Dia: </span>
              {dia}
            </p>
            <p>
              <span className="text-muted-foreground">Horas: </span>
              {horas}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
