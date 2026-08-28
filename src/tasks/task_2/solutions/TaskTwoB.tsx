import { createContext, useContext, useState } from "react";
import type { Dispatch, PropsWithChildren, SetStateAction } from "react";
import Button from "~/components/Button/Button";

interface CountContextValue {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

const CountContext = createContext<CountContextValue | null>(null);

const CountProvider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

const useCount = () => {
  const context = useContext(CountContext);

  if (context === null) {
    throw new Error("useCount must be used within a CountProvider");
  }

  return context;
};

const TaskTwoB = () => {
  return (
    <CountProvider>
      <Counter />
    </CountProvider>
  );
};

const Counter = () => {
  const { count, setCount } = useCount();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Task 2B Solution</h1>
      <Button onClick={() => setCount((previousCount) => previousCount + 1)}>
        Increment
      </Button>
      <p>Count: {count}</p>
    </div>
  );
};

export default TaskTwoB;
