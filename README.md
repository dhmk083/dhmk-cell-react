# @dhmk/cell-react

> React integration for [@dhmk/cell](https://github.com/dhmk083/dhmk-cell)

```jsx
import { cell } from "@dhmk/cell";
import { useCells } from "@dhmk/cell-react";

const counter = cell(1);

const App = () => {
  useCells(counter);

  return (
    <div>
      <h1>{counter()}</h1>
      <button onClick={() => counter.set(counter() + 1)}>click</button>
    </div>
  );
};
```
