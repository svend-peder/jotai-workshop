import { atom, useAtom } from "jotai";
import Button from "~/components/Button/Button";

const countAtom = atom(0);

const TaskThreeA = () => {
  const [count, setCount] = useAtom(countAtom);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Task 3A</h1>
      <Button onClick={() => setCount((previousCount) => previousCount + 1)}>
        Increment
      </Button>
      <p>Count: {count}</p>
      <p>Double count: Add your derived atom</p>
    </div>
  );
};

export default TaskThreeA;
