import { atom, useAtom } from "jotai";
import Button from "~/components/Button/Button";

const countAtom = atom(0);

const TaskTwoB = () => {
  const [count, setCount] = useAtom(countAtom);

  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <p>Count: {count}</p>
    </div>
  );
};

export default TaskTwoB;
