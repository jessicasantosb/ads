import { CalendarCheck } from "lucide-react";

import { Heading } from "@/components/heading";

import { semanas } from "../_data/semanas";

export function Semanas() {
  return (
    <div className="content-wrapper">
      <Heading>
        <CalendarCheck />
        <h2>Semana acadêmica</h2>
      </Heading>

      <div className="mb-4 flex items-center justify-between flex-wrap gap-6">
        {semanas.map(({ week, from, to }) => (
          <div key={week}>
            <p className="text-zinc-600">{week}</p>
            <p className="text-muted-foreground">
              de <span className="text-primary">{from}</span> a{" "}
              <span className="text-primary">{to}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
