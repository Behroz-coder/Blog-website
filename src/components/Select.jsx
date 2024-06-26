import React, { useId } from "react";

function Select({ options, label, className, ...props }, ref) {
  // Generate a unique ID for the select field
  const id = useId();

  return (
    <div className="w-full">
      {/* Render label if provided */}
      {label && (
        <label htmlFor={id} className="">
          {label}
        </label>
      )}
      {/* Select field */}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >
        {/* Render options */}
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
