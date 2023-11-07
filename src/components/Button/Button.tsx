import { ReactNode, useCallback } from "react";
import "../../index.css";

interface Props {
  children?: ReactNode;
  props?: any;
}

export const Button = ({ children, ...props }: Props) => {
  const onClick = useCallback(() => {
    console.log("Vite + React + TypeScript + Tailwind = ❤️");
  }, []);

  return (
    <button
      onClick={onClick}
      className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded`}
    >
      {children ? children : "Vite Btn npm"}
    </button>
  );
};
