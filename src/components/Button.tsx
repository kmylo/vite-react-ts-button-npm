import React, { useCallback } from "react";
import "../index.css";

export const Button = () => {
  const onClick = useCallback(() => {
    console.log("Vite + React + TypeScript + Tailwind = ❤️");
  }, []);

  return (
    <button
      onClick={onClick}
      className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded`}
    >
      Vite Btn npm
    </button>
  );
};
