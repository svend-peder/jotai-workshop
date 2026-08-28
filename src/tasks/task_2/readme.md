# Task 2 - Differences Between React Context and Jotai

In this task, you will explore some differences between React Context and Jotai.

## Task 2A

In `TaskTwoA.tsx`, an atom for a counter has been set up for you. Increment the counter, navigate to the home page, and then return to Task 2A. You will see that the count is still there. This is often useful: once an atom has been created, its state remains available for the lifetime of the application.

Your task is to reset the atom when the `TaskTwoA` page is unmounted, so that the count starts over when you return to the page.

**Hint:**

```
useEffect(
  () => {
    return () => {
      // write your code here
      // When the callback passed to useEffect returns a function,
      // that function runs when the component unmounts.
    }
  }
)
```

## Task 2B

First, rewrite `TaskTwoB.tsx` to use Context instead of an atom.

When you navigate away and return, you will see that the state resets automatically. This happens because the Context provider is local to `TaskTwoB`, so it unmounts whenever you leave the page.
This behavior can be useful when you want to share state within one part of an application without prop drilling. A local Context is a good fit for that use case. If you used an atom instead, you would need to reset it manually, as you did in Task 2A.

If you render the Context provider at the top of the application, it becomes truly global and behaves similarly to a Jotai atom.

For top-level global state, the author prefers Jotai atoms. For localized shared state, the author prefers React Context because it resets automatically when the provider unmounts.

## Task 2C

In Task 2A, you saw that Jotai state is not persisted through a page refresh. Sometimes, however, persistence is exactly what we want. For example, a user might expect the application to remember their dark or light mode preference after refreshing the page.

In `TaskTwoC.tsx`, connect the atom to the provided localStorage adapter. After you refresh the page, the count should still be there.

**Hint:**

```
const myAtom = atomWithStorage<type>(myKey, initialValue, storageAdapter);
```
