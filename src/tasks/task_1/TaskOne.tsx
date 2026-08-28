import { useState } from "react";
import Button from "~/components/Button/Button";

const TaskOne = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Task 1</h1>
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
export default TaskOne;
