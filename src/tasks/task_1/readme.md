# Task 1 - The Basics of Global State and Jotai

Jotai makes it easy to share state between different parts of an application. A common example is a dark or light color mode: a user sets the mode once and expects the rest of the application to respond to it.

In this task, you will set up your first Jotai atom and see how it can solve a common state-sharing problem.
Each exercise contains a set of nested React components. The top-level component has a button for switching between dark and light mode, while a button at the bottom of the component tree changes its styling based on the current mode.
You will implement three different ways to make the mode available to that button.

## Task 1A

Pass the mode through every component using props. Write your solution in `TaskOneA.tsx`.

**Hint:**

You can type the props like this:

```
interface Props {
  mode: Mode;
}
```

## Task 1B

The previous approach can become tedious in a large application. As the component tree grows, adding, removing, or changing props at each level becomes increasingly difficult.
This pattern is called prop drilling, and it is something we generally want to avoid.
In this exercise, you will see how Jotai can solve the same problem without passing the mode through every component.

Create an atom in `TaskOneB.tsx`:

```
const modeAtom = atom<Mode>("light");
```

Replace the `useState` hook with the `useAtom` hook.

In the bottom component, use the same atom to read the mode without prop drilling.

**Hint:**

```
const [state, setState] = useAtom(myAtom);
```

## Task 1C

The `useAtom` hook looks very similar to the `useState` hook you already use, which makes Jotai easy to learn. It also requires very little setup: define an atom, then read or update it wherever it is needed.

Next, you will solve the same problem with React Context. Context has some important differences from Jotai, which we will explore in later tasks. For now, focus on how Context can eliminate prop drilling, while requiring a little more setup.

In `TaskOneC.tsx`, replace `useState` with React Context.

**Hint:**

```
const myContext = createContext<type>(null);

const MyProvider = (props: PropsWithChildren) => {
  const [state, setState] = useState();

  return <context.Provider value={{state, setState}}>{children}</context.Provider>;
}

const useMyContext = () => {
  const ctx = useContext(context);

  if (ctx == null) {
    throw new Error('useContext hook must be used within a MyProvider');
  }

  return ctx;
}
```
