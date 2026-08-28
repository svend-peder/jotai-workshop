import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import { appPaths } from "./paths";
import ExerciseOne from "./exercises/exercise_1/ExercisOne";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={appPaths.root} element={<Home />} />
        <Route path={appPaths.EXERCISE_ONE} element={<ExerciseOne />} />
      </Route>
    </Routes>
  );
};
