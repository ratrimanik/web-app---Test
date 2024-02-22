"use client";

import { Dropdown } from "flowbite-react";
import { MdExpandMore } from "react-icons/md";

const DropDown = () => {
  return (
    <div className="ml-4 text-xs">
      <Dropdown label="Periode" icon={<MdExpandMore />} inline>
      <Dropdown.Item>Item 1</Dropdown.Item>
      <Dropdown.Item>Item 2</Dropdown.Item>
      <Dropdown.Item>Item 3</Dropdown.Item>
    </Dropdown>
    </div>
  );
};

export default DropDown;
