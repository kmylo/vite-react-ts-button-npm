import { ReactNode, useCallback } from "react";
// import "../../index.css";
import "./Button.scss";

interface Props {
  children?: ReactNode;
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
}
// const defaultVar = `bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded`;

export const Button = ({
  children,
  primary = false,
  size = "medium",
  ...props
}: Props) => {
  const mode = primary ? "in2-button--primary" : "in2-button--secondary";

  const onClick = useCallback(() => {
    console.log("Vite + React + TypeScript + Tailwind = ❤️");
  }, []);

  return (
    <button
      type="button"
      onClick={onClick}
      className={["in2-button", `in2-button--${size}`, mode].join(" ")}
      {...props}
    >
      {children ? children : "Vite Btn npm"}
    </button>
  );
};
