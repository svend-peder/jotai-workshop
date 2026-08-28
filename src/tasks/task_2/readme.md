# Task 2 - difference between react context and jotai

In this task we will be looking at some differences between react context and jotai.

## Task 2A

In `TaskTwoA.tsx` an atom for a count has been setup for you. Increment the counter, navigate to home back and then navigate back. The count is persisted. This is what we want. Once a atom has been used, it will be active for the lifetime of the app. The only way to reset the atom is to refresh the page in the browser. This will reload the app and the jotai atom which will reset it.

Your task now will be to implement that atom will reset once we navigate away from the page TaskTwoA.

**Hint:**

```
useEffect(
  () => {
    return () => {
      // write your code here
      // When the callback in a useEffects return a callback function,
      // that function will run once the component dismounts.
    }
  }
)
```

## Task 2B

First rewrite the code in `Task2B.tsx` to use a context instead of an atom.

Now, if you navigate and back, you will see that state is reset automatically. That is because the context is localized to only the component Task2B, it dismounts every time you navigate away.
This can be used to our advantage, lets say there is a localized state we want to share without prop drilling, then a localized context is great. If you were to use an atom for that use case, you would have to manually reset the state like we did in task two A.

If we render the context provider at the top of our app, then it will be truly global and behave the same way as jotai atoms.

For top level global state the authors prefers to use jotai atoms. But, for localized global state, the author prefers react context because you get reset on dismount built in.

## Task 2C

In task two A, we mentioned that jotai state is not persisted trough page refreshes. This could be something we want. A user might get annoyed that we do not remember their preference for dark/light mode trough a page refresh.

In `Task2C.tsx` connect the atom to the localstore code. Now when you refresh the page, the count is remembered.

**Hint:**

```
const myAtom = atomWithStorage<type>(myKey, initialValue, storageAdapter)
```
