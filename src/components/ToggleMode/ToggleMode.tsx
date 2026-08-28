import type { Mode } from "~/domain";
import Button from "../Button/Button";

interface Props {
  mode: Mode;
  onToggle: () => void;
}

const ToggleMode = ({ mode, onToggle }: Props) => {
  return (
    <Button mode={mode} onClick={onToggle} className="my-4">
      Toggle to {mode === "dark" ? "light" : "dark"} mode
    </Button>
  );
};

export default ToggleMode;
