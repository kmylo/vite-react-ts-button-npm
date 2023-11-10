// Button.tsx
import { ButtonHTMLAttributes, ReactNode, useCallback } from "react";
import "./Button.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The content to be displayed inside the button.
   */
  children?: ReactNode;
  /**
   * Set this to `true` to use the primary variant button style.
   */
  primary?: boolean;
  // backgroundColor?: string;
  /**
   * The size variation for the button. Choose from "small," "medium," or "large."
   */
  size?: "small" | "medium" | "large";
  /**
   * Set this to `true` to make the button take up the full width of its container.
   */
  fullWidth?: boolean;
  /**
   * Set this to `true` to disable the button.
   */
  disabled?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  children,
  primary = false,
  size = "medium",
  fullWidth = false,
  disabled = false,
  ...props
}: Props) => {
  // TODO: refactor to class-variance-authority
  const mode = primary ? "in2-button--primary" : "in2-button--secondary";
  const in2FullWidth = fullWidth && "in2-button--fullWidth";
  const in2disabled = disabled && "in2-button--disabled";

  const onClick = useCallback(() => {
    console.log("Vite + React + TypeScript + Tailwind = ❤️");
  }, []);

  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "in2-button",
        in2FullWidth,
        in2disabled,
        `in2-button--${size}`,
        mode,
      ].join(" ")}
      {...props}
    >
      {children ? children : "Vite Btn npm"}
    </button>
  );
};
