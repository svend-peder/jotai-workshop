import { atom, useAtom } from "jotai";
import { useState } from "react";
import Button from "~/components/Button/Button";
import ToggleMode from "~/components/ToggleMode/ToggleMode";
import type { Mode } from "~/domain";

const modeAtom = atom<Mode>("light");

const TaskOneB = () => {
  const [mode, setMode] = useAtom(modeAtom);
  const toggleMode = () => {
    setMode((previousMode: Mode) =>
      previousMode === "light" ? "dark" : "light",
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Task 1B</h1>
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
  const [mode] = useAtom(modeAtom);

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

export default TaskOneB;
