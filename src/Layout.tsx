import { Link, Outlet } from "react-router-dom";
import { appPaths } from "./paths";

const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link className="font-semibold tracking-tight" to={appPaths.root}>
            Home
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
