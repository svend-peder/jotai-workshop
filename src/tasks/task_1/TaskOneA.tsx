import { useState } from "react";
import Button from "~/components/Button/Button";
import ToggleMode from "~/components/ToggleMode/ToggleMode";
import type { Mode } from "~/domain";

// Normally we would have one file for each component, but for simplicity, they are all in one file here.
// In this file you will code your solution for Task 1A.

const TaskOneA = () => {
  const [mode, setMode] = useState<Mode>("light");
  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Task 1</h1>
      <ToggleMode mode={mode} onToggle={toggleMode} />
      <NestedComponents />
    </div>
  );
};

const NestedComponents = () => {
  return <AnotherComponent />;
};

const AnotherComponent = () => {
  return <Inception />;
};

const Inception = () => {
  return <Counter />;
};

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button mode="dark" onClick={() => setCount(count + 1)}>
        Increment
      </Button>
      <p>Count: {count}</p>
    </div>
  );
};
export default TaskOneA;
