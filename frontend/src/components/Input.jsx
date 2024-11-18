import React from "react";

const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input ref={ref} {...props} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900" />
  );
});

export default Input;
