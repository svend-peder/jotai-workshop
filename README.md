# Jotai Workshop

This repository contains small React examples that illustrate different ways to work with shared state using [Jotai](https://jotai.org/). The exercises are designed to be read, changed, and compared in the browser rather than used as a standalone application.

The examples assume that you already have a working knowledge of:

- React components and JSX
- Props and component composition
- React hooks, especially `useState`, `useContext`, and `useEffect`
- Local component state versus shared or global state
- Basic TypeScript

The workshop focuses on the Jotai examples themselves. It does not teach React or hooks from the beginning.

## Requirements

Install the following before starting:

- [Node.js](https://nodejs.org/) 20.19 or newer, or 22.12 or newer
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), which is included with Node.js

Check that they are available in your terminal:

```bash
node --version
npm --version
```

## Getting Started

Clone the repository, move into the project directory, and install its dependencies:

```bash
git clone <repository-url>
cd jotai-workshop
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed by Vite, usually [http://localhost:5173](http://localhost:5173).

## Working With The Workshop

The home page lists the available tasks in a table. Each task has a link to the exercise and a link to its completed solution.

1. Open a task page from the home page.
2. Read the task README in the matching directory, such as [`src/tasks/task_1/readme.md`](src/tasks/task_1/readme.md).
3. Implement the exercise in the task file, such as [`src/tasks/task_1/TaskOneA.tsx`](src/tasks/task_1/TaskOneA.tsx).
4. Return to the browser and open the task page to see how your code behaves.
5. Compare your implementation with the corresponding file in the `solutions` directory if you need help or want to review another approach.

Task files are the student starting points. Solution files contain completed examples and are available through the solution links in the app.

For example, Task 1 uses these routes:

| Exercise                   | Solution                                              |
| -------------------------- | ----------------------------------------------------- |
| `/one`, `/one/b`, `/one/c` | `/solution/one`, `/solution/one/b`, `/solution/one/c` |

Task 2 follows the same pattern with `/two` and `/solution/two`.

## Project Structure

```text
src/
  components/              Shared UI components
  tasks/
    task_1/
      readme.md             Task instructions
      TaskOneA.tsx          Student exercise
      solutions/            Completed solutions
    task_2/
      readme.md
      TaskTwoA.tsx
      solutions/
  Home.tsx                  Task and solution links
  routes.tsx                Application routes
```

The task pages and solution pages are registered in [`src/routes.tsx`](src/routes.tsx). Their URL constants are defined in [`src/paths.ts`](src/paths.ts), and the home page links to them from [`src/Home.tsx`](src/Home.tsx).

## Available Commands

```bash
npm run dev       # Start the development server
npm run build     # Type-check and create a production build
npm run lint      # Run ESLint
npm run preview   # Preview the production build locally
```

When adding or changing an exercise, run `npm run lint` and `npm run build` before considering the change complete.
