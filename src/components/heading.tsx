import { ReactNode } from "react";

export function Heading({ children }: { children: ReactNode }) {
  return (
    <div className="text-center pb-8 text-xl uppercase text-blue-700 flex items-center gap-2">
      {children}
    </div>
  );
}
