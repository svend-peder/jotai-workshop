import { createContext, useContext, useState } from "react";
import type { Dispatch, PropsWithChildren, SetStateAction } from "react";
import Button from "~/components/Button/Button";
import ToggleMode from "~/components/ToggleMode/ToggleMode";
import type { Mode } from "~/domain";

interface ModeContextValue {
  mode: Mode;
  setMode: Dispatch<SetStateAction<Mode>>;
}

const ModeContext = createContext<ModeContextValue | null>(null);

const ModeProvider = ({ children }: PropsWithChildren) => {
  const [mode, setMode] = useState<Mode>("light");

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};

const useMode = () => {
  const context = useContext(ModeContext);

  if (context === null) {
    throw new Error("useMode must be used within a ModeProvider");
  }

  return context;
};

const TaskOneC = () => {
  return (
    <ModeProvider>
      <TaskContent />
    </ModeProvider>
  );
};

const TaskContent = () => {
  const { mode, setMode } = useMode();
  const toggleMode = () => {
    setMode((previousMode) => (previousMode === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Task 1C</h1>
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
  const { mode } = useMode();
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

export default TaskOneC;
