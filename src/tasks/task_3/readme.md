# Task 3 - Derived Atoms

Atoms can store state, but they can also derive values from other atoms. A derived atom recalculates when the atoms it reads change.

In this task, you will create a derived atom that calculates double the current count. The page already has a base `countAtom` and a button for incrementing it.

## Task 3A

Create a read-only derived atom in `TaskThreeA.tsx` that reads the value from `countAtom` and returns twice that value.

Display the derived value below the counter:

```text
Count: 1
Double count: 2
```

**Hint:**

```ts
const doubleCountAtom = atom((get) => get(countAtom) * 2);
```

Use `useAtom` or `useAtomValue` to read the derived atom in the component.
