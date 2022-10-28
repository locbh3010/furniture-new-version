import React from "react";
import { useController } from "react-hook-form";

const Input = ({ type = "text", control, name, ...props }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <input
      type={type}
      name={name}
      id={name}
      className="inline-block w-full px-1 py-2 text-sm leading-loose duration-300 border-b-2 outline-none border-dark border-opacity-30 focus:border-opacity-60"
      autoComplete="off"
      {...props}
      {...field}
    />
  );
};

export default React.memo(Input);
