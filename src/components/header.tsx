"use client";

import { disciplinas } from "@/data/disciplinas";

import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function Header() {
  const { push } = useRouter();

  const handleClick = (nome: string) => {
    const href = nome.toLowerCase().replace(/\s/g, "-");
    push(`/${href}`);
  };

  return (
    <header className="p-4">
      <Select onValueChange={handleClick}>
        <SelectTrigger>
          <SelectValue placeholder="Selecione uma disciplina" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="/">Página inicial</SelectItem>

          {disciplinas.map(({ nome, professor, inicio }, index) => (
            <SelectItem
              key={index}
              value={nome}
              onChange={() => handleClick(nome)}
            >
              <p className="flex flex-col text-left">
                {nome}
                <span className="text-gray-400 text-xs">{professor}</span>
                <span className="text-gray-400 text-xs">início: {inicio}</span>
              </p>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </header>
  );
}
