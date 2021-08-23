import React from "react";
import { useUpdate } from "@dhmk/hooks";
import { Cell } from "@dhmk/cell";

export function useCells<T extends Cell<any>[]>(...cells: T) {
  const update = useUpdate();

  React.useEffect(() => {
    const subs = cells.map((c) => c.observe(update));
    return () => subs.forEach((s) => s());
  }, cells);
}
