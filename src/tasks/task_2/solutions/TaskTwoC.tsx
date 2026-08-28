import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import type { SyncStorage } from "jotai/vanilla/utils/atomWithStorage";
import Button from "~/components/Button/Button";

const store = (key: string, payload: unknown) => {
  const value = JSON.stringify(payload);
  localStorage.setItem(key, value);
};

const read = <V,>(key: string): V | null => {
  const stored = localStorage.getItem(key);
  return toJSON(stored) as V | null;
};

const remove = (key: string) => {
  localStorage.removeItem(key);
};

const toJSON = (value: string | null): unknown => {
  const toParse = value === "undefined" ? undefined : value;

  if (toParse == null) {
    return toParse;
  }

  try {
    return JSON.parse(toParse);
  } catch {
    return toParse;
  }
};

const jotaiSyncStorageAdapter = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getItem: (key: string, initialValue: any) => {
    const stored = read(key);

    if (stored == null) {
      return initialValue;
    }

    return stored;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setItem: (key: string, value: any) => {
    store(key, value);
  },
  removeItem: (key: string) => {
    remove(key);
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} satisfies SyncStorage<any>;

const countAtom = atomWithStorage<number>(
  "jotai-workshop-task-two-count",
  0,
  jotaiSyncStorageAdapter,
);

const TaskTwoC = () => {
  const [count, setCount] = useAtom(countAtom);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Task 2C Solution</h1>
      <Button
        onClick={() => setCount((previousCount: number) => previousCount + 1)}
      >
        Increment
      </Button>
      <p>Count: {count}</p>
    </div>
  );
};

export default TaskTwoC;
