import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import { appPaths } from "./paths";
import TaskOneA from "./tasks/task_1/TaskOneA";
import TaskOneB from "./tasks/task_1/TaskOneB";
import TaskOneC from "./tasks/task_1/TaskOneC";
import TaskOneASolution from "./tasks/task_1/solutions/TaskOneA";
import TaskOneBSolution from "./tasks/task_1/solutions/TaskOneB";
import TaskOneCSolution from "./tasks/task_1/solutions/TaskOneC";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={appPaths.root} element={<Home />} />
        <Route path={appPaths.TASK_ONE_A} element={<TaskOneA />} />
        <Route path={appPaths.TASK_ONE_B} element={<TaskOneB />} />
        <Route path={appPaths.TASK_ONE_C} element={<TaskOneC />} />
        <Route
          path={appPaths.TASK_ONE_A_SOLUTION}
          element={<TaskOneASolution />}
        />
        <Route
          path={appPaths.TASK_ONE_B_SOLUTION}
          element={<TaskOneBSolution />}
        />
        <Route
          path={appPaths.TASK_ONE_C_SOLUTION}
          element={<TaskOneCSolution />}
        />
      </Route>
    </Routes>
  );
};
