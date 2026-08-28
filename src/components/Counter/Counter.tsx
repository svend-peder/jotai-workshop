import { useState } from "react";
import Button from "~/components/Button/Button";
import type { Mode } from "~/domain";

const Counter = ({ mode = "dark" }: { mode?: Mode }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button mode={mode} onClick={() => setCount(count + 1)}>
        Increment
      </Button>
      <p>Count: {count}</p>
    </div>
  );
};

export default Counter;
