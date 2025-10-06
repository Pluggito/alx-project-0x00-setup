// components/ui/Button.jsx
import React from "react";
import clsx from "clsx";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  className = "",
  styles = "",
}) => {
  const baseStyles = "font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all";

  const sizeStyles: Record<string, string> = {
    small: "px-3 py-1 text-sm",
    medium: "px-5 py-2 text-base",
    large: "px-7 py-3 text-lg",
  };

  return (
    <button
      className={clsx(baseStyles, sizeStyles[size], shape, className)}
    >
      {title}
    </button>
  );
};

export default Button;
