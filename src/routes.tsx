import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import { appPaths } from "./paths";
import TaskOne from "./tasks/task_1/TaskOne";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={appPaths.root} element={<Home />} />
        <Route path={appPaths.TASK_ONE} element={<TaskOne />} />
      </Route>
    </Routes>
  );
};
