# Task 1

In this task we will setup our first jotai atom and we will see how simple it can be and what problems it can solve.
We have a set of nested react components. At the top level there is a button to toggle dark mode.
In the bottom of the component tree there is a button that has different styling for dark mode and light mode.
We will look at different ways to pass that state to the button in the bottom of the tree.

## Task 1A

Pass the state through all the components using props. Code in the file `TaskOneA.tsx`.

**Hint:**

Typing the props can be done like this

```
interface Props {
  mode: Mode;
}
```

## Task 1B

The previous method can be quite tedious and in a large app it can grow to a level where changing adding or removing props is almost impossible.
That pattern is called prop drilling and is something we would like to avoid.
Now we will look at how jotai solves this.

Create an atom. Code in the file `TaskOneB.tsx`.

```
const modeAtom = atom<Mode>("light");
```

Replace useState hook with useAtom hook.

In the bottom component get the state with useAtom hook so that you can get the state without prop drilling.

**Hint:**

```
const [state, setState] = useAtom(myAtom);
```

## Task 1C

The great thing about jotai is that the useAtom hook looks very similar to the useState hook we use all the time. The familiar pattern makes it easy to use.
Furthermore, there is very little setup. We only have to define a atom and thats it.
Now, lets look at another way to solve this problem. Context have some differences to using a atom, but we will come back to that in later tasks.
For now we will see that we can avoid prop drilling using react context, but it requires a bit more setup.

In task 1C , replace useState with react context. Code in `TaskOneC.tsx`.

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
    throw new Error('useContext hook must be use used within a MyProvider');
  }

  return ctx;
}
```
