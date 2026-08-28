import { useState } from "react";
import Button from "~/components/Button/Button";
import ToggleMode from "~/components/ToggleMode/ToggleMode";
import type { Mode } from "~/domain";

const TaskOneA = () => {
  const [mode, setMode] = useState<Mode>("light");
  const toggleMode = () => {
    setMode((previousMode) => (previousMode === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Task 1A</h1>
      <ToggleMode mode={mode} onToggle={toggleMode} />
      <NestedComponents mode={mode} />
    </div>
  );
};

interface Props {
  mode: Mode;
}

const NestedComponents = ({ mode }: Props) => {
  return <AnotherComponent mode={mode} />;
};

const AnotherComponent = ({ mode }: Props) => {
  return <Inception mode={mode} />;
};

const Inception = ({ mode }: Props) => {
  return <Counter mode={mode} />;
};

const Counter = ({ mode }: Props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button
        mode={mode}
        onClick={() => setCount((previousCount) => previousCount + 1)}
      >
        Increment
      </Button>
      <p>Count: {count}</p>
    </div>
  );
};

export default TaskOneA;
