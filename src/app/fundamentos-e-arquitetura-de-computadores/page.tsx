import { Title } from "@/components/title";
import { Atividades } from "./_components/atividades";
import { AulasAoVivo } from "./_components/aulas-ao-vivo";
import { AulasConceituais } from "./_components/aulas-conceituais";
import { Livro } from "./_components/livro";
import { Notas } from "./_components/notas";
import { Provas } from "./_components/provas";
import { Semanas } from "./_components/semanas";

export default function FundamentosEArquiteturaPage() {
  return (
    <main className="p-4">
      <Title title="Fundamentos e Arquitetura de Computadores" />

      <Semanas />
      <AulasAoVivo />
      <AulasConceituais />
      <Livro />
      <Atividades />
      <Provas />
      <Notas />
    </main>
  );
}
