import { Link } from "react-router-dom";
import { appPaths } from "./paths";

const Home = () => {
  return (
    <section>
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan-400">
        Welcome
      </p>
      <h1 className="text-4xl font-bold tracking-tight">Jotai Workshop</h1>
      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[32rem] border-collapse text-left">
          <caption className="mb-3 text-left text-xl">Tasks</caption>
          <thead>
            <tr className="border-b border-slate-700 text-sm uppercase tracking-widest text-slate-400">
              <th scope="col" className="px-4 py-3 font-medium">
                Task
              </th>
              <th scope="col" className="px-4 py-3 font-medium">
                Solution
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-800">
              <th scope="row" className="px-4 py-3 font-medium">
                Task 1A
              </th>
              <td className="px-4 py-3">
                <Link
                  to={appPaths.TASK_ONE_A}
                  className="underline decoration-cyan-400 underline-offset-4"
                >
                  Open task
                </Link>
                <span className="mx-2 text-slate-500">/</span>
                <Link
                  to={appPaths.TASK_ONE_A_SOLUTION}
                  className="underline decoration-cyan-400 underline-offset-4"
                >
                  View solution
                </Link>
              </td>
            </tr>
            <tr className="border-b border-slate-800">
              <th scope="row" className="px-4 py-3 font-medium">
                Task 1B
              </th>
              <td className="px-4 py-3">
                <Link
                  to={appPaths.TASK_ONE_B}
                  className="underline decoration-cyan-400 underline-offset-4"
                >
                  Open task
                </Link>
                <span className="mx-2 text-slate-500">/</span>
                <Link
                  to={appPaths.TASK_ONE_B_SOLUTION}
                  className="underline decoration-cyan-400 underline-offset-4"
                >
                  View solution
                </Link>
              </td>
            </tr>
            <tr className="border-b border-slate-800">
              <th scope="row" className="px-4 py-3 font-medium">
                Task 1C
              </th>
              <td className="px-4 py-3">
                <Link
                  to={appPaths.TASK_ONE_C}
                  className="underline decoration-cyan-400 underline-offset-4"
                >
                  Open task
                </Link>
                <span className="mx-2 text-slate-500">/</span>
                <Link
                  to={appPaths.TASK_ONE_C_SOLUTION}
                  className="underline decoration-cyan-400 underline-offset-4"
                >
                  View solution
                </Link>
              </td>
            </tr>
            <tr className="border-b border-slate-800">
              <th scope="row" className="px-4 py-3 font-medium">
                Task 2A
              </th>
              <td className="px-4 py-3">
                <Link
                  to={appPaths.TASK_TWO_A}
                  className="underline decoration-cyan-400 underline-offset-4"
                >
                  Open task
                </Link>
                <span className="mx-2 text-slate-500">/</span>
                <Link
                  to={appPaths.TASK_TWO_A_SOLUTION}
                  className="underline decoration-cyan-400 underline-offset-4"
                >
                  View solution
                </Link>
              </td>
            </tr>
            <tr className="border-b border-slate-800">
              <th scope="row" className="px-4 py-3 font-medium">
                Task 2B
              </th>
              <td className="px-4 py-3">
                <Link
                  to={appPaths.TASK_TWO_B}
                  className="underline decoration-cyan-400 underline-offset-4"
                >
                  Open task
                </Link>
                <span className="mx-2 text-slate-500">/</span>
                <Link
                  to={appPaths.TASK_TWO_B_SOLUTION}
                  className="underline decoration-cyan-400 underline-offset-4"
                >
                  View solution
                </Link>
              </td>
            </tr>
            <tr className="border-b border-slate-800">
              <th scope="row" className="px-4 py-3 font-medium">
                Task 2C
              </th>
              <td className="px-4 py-3">
                <Link
                  to={appPaths.TASK_TWO_C}
                  className="underline decoration-cyan-400 underline-offset-4"
                >
                  Open task
                </Link>
                <span className="mx-2 text-slate-500">/</span>
                <Link
                  to={appPaths.TASK_TWO_C_SOLUTION}
                  className="underline decoration-cyan-400 underline-offset-4"
                >
                  View solution
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Home;
