import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import Button from "~/components/Button/Button";

const countAtom = atom(0);

const TaskTwoA = () => {
  const [count, setCount] = useAtom(countAtom);

  useEffect(() => {
    return () => {
      setCount(0);
    };
  }, [setCount]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Task 2A Solution</h1>
      <Button onClick={() => setCount((previousCount) => previousCount + 1)}>
        Increment
      </Button>
      <p>Count: {count}</p>
    </div>
  );
};

export default TaskTwoA;
