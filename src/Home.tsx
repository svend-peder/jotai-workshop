import { Link } from "react-router-dom";
import { appPaths } from "./paths";

const Home = () => {
  return (
    <section>
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan-400">
        Welcome
      </p>
      <h1 className="text-4xl font-bold tracking-tight">Jotai Workshop</h1>
      <h2 className="text-xl mt-8">Exercises:</h2>
      <ul className="flex list-inside list-disc flex-col gap-2 mt-4">
        <li>
          <Link to={appPaths.EXERCISE_ONE} className="underline">
            Exercise 1
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Home;
