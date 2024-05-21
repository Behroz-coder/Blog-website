import React from "react";

/**
 * Button component for clickable actions.
 *
 * @param {Object} props - Button props.
 * @param {string} props.children - Button text content.
 * @param {string} [props.type="button"] - Button type.
 * @param {string} [props.bgColor="bg-blue-600"] - Background color class.
 * @param {string} [props.textColor="text-white"] - Text color class.
 * @param {string} [props.className=""] - Additional CSS classes.
 * @param {Object} props - Additional button props.
 * @returns {JSX.Element} - Button element.
 */
export default function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
