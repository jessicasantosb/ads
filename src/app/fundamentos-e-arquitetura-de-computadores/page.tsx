import { Title } from "@/components/title";
import { Atividades } from "./_components/atividades";
import { AulasAoVivo } from "./_components/aulas-ao-vivo";
import { AulasConceituais } from "./_components/aulas-conceituais";
import { Notas } from "./_components/notas";
import { Provas } from "./_components/provas";
import { Semanas } from "./_components/semanas";
import { Topicos } from "./_components/topicos";

export default function FundamentosEArquiteturaPage() {
  return (
    <main className="p-4">
      <Title title="Fundamentos e Arquitetura de Computadores" />

      <Semanas />
      <AulasAoVivo />
      <AulasConceituais />
      <Topicos />
      <Atividades />
      <Provas />
      <Notas />
    </main>
  );
}
