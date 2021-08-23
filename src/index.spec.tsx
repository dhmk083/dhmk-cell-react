import React from "react";
import { render, act } from "@testing-library/react";
import { cell } from "@dhmk/cell";

import { useCells } from "./index";

test("useCells", () => {
  const c = cell(1);
  const Comp = () => {
    useCells(c);
    return <p>{c()}</p>;
  };
  const { container } = render(<Comp />);

  expect(container.textContent).toBe("1");

  act(() => {
    c.set(2);
  });

  expect(container.textContent).toBe("2");
});
