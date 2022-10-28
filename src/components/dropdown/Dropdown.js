/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useController } from "react-hook-form";

const Dropdown = ({ name, control, ...props }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "Hỗ trợ thắc mắc",
  });
  return (
    <select
      name={name}
      id={name}
      className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      {...field}
      {...props}
    >
      <option value="Tư vấn">Hỗ trợ tổng thể</option>
      <option value="Thiết kế - Thi công nội thất">
        Thiết kế - Thi công nội thất
      </option>
      <option value="Báo giá nội thất">Báo giá nội thất</option>
      <option value="Bảo hành - Bảo trì">Bảo hành - Bảo trì</option>
      <option value="Phòng vật tư">Phòng vật tư</option>
    </select>
  );
};

export default React.memo(Dropdown);
