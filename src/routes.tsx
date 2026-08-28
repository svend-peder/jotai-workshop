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
import TaskTwoA from "./tasks/task_2/TaskTwoA";
import TaskTwoB from "./tasks/task_2/TaskTwoB";
import TaskTwoC from "./tasks/task_2/TaskTwoC";
import TaskTwoASolution from "./tasks/task_2/solutions/TaskTwoA";
import TaskTwoBSolution from "./tasks/task_2/solutions/TaskTwoB";
import TaskTwoCSolution from "./tasks/task_2/solutions/TaskTwoC";
import TaskThreeA from "./tasks/task_3/TaskThreeA";
import TaskThreeASolution from "./tasks/task_3/solutions/TaskThreeA";

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
        <Route path={appPaths.TASK_TWO_A} element={<TaskTwoA />} />
        <Route path={appPaths.TASK_TWO_B} element={<TaskTwoB />} />
        <Route path={appPaths.TASK_TWO_C} element={<TaskTwoC />} />
        <Route
          path={appPaths.TASK_TWO_A_SOLUTION}
          element={<TaskTwoASolution />}
        />
        <Route
          path={appPaths.TASK_TWO_B_SOLUTION}
          element={<TaskTwoBSolution />}
        />
        <Route
          path={appPaths.TASK_TWO_C_SOLUTION}
          element={<TaskTwoCSolution />}
        />
        <Route path={appPaths.TASK_THREE_A} element={<TaskThreeA />} />
        <Route
          path={appPaths.TASK_THREE_A_SOLUTION}
          element={<TaskThreeASolution />}
        />
      </Route>
    </Routes>
  );
};
