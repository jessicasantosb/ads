import { List, NotepadText } from "lucide-react";

import { Heading } from "@/components/heading";

export function Topicos() {
  return (
    <div className="border-2 p-4 mt-12 mb-8 bg-white shadow-md">
      <Heading>
        <List />
        <h2>Tópicos</h2>
      </Heading>

      <div>
        <h4 className="text-gray-500">Unidade 1: </h4>
        <p className="flex gap-1">
          <NotepadText size={20} />
          Conceitos gerais
        </p>
        <ul>
          <li>placeholder</li>
        </ul>
      </div>

      <div className="py-4">
        <h4 className="text-gray-500">Unidade 2: </h4>
        <p className="flex gap-1">
          <NotepadText size={20} /> História da computação
        </p>
        <ul>
          <li>placeholder</li>
        </ul>
      </div>

      <div>
        <h4 className="text-gray-500">Unidade 3: </h4>
        <p className="flex gap-1">
          <NotepadText size={20} />
          Sistemas de computação
        </p>
        <ul>
          <li>placeholder</li>
        </ul>
      </div>
    </div>
  );
}
