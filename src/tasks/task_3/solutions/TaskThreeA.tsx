import { atom, useAtom, useAtomValue } from "jotai";
import Button from "~/components/Button/Button";

const countAtom = atom(0);
const doubleCountAtom = atom((get) => get(countAtom) * 2);

const TaskThreeA = () => {
  const [count, setCount] = useAtom(countAtom);
  const doubleCount = useAtomValue(doubleCountAtom);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Task 3A Solution</h1>
      <Button onClick={() => setCount((previousCount) => previousCount + 1)}>
        Increment
      </Button>
      <p>Count: {count}</p>
      <p>Double count: {doubleCount}</p>
    </div>
  );
};

export default TaskThreeA;
