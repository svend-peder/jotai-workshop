import type { ComponentPropsWithoutRef } from "react";
import type { Mode } from "~/domain";

interface Props extends ComponentPropsWithoutRef<"button"> {
  mode?: Mode;
}

const Button = (props: Props) => {
  const { mode = "dark", className, children, ...rest } = props;
  const modeClasses =
    mode === "dark"
      ? "border-slate-700 bg-slate-900 text-white hover:bg-slate-800"
      : "border-slate-300 bg-white text-slate-900 hover:bg-slate-100";

  return (
    <button
      {...rest}
      type="button"
      className={`inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 disabled:cursor-not-allowed disabled:opacity-50 ${modeClasses} ${className ?? ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
