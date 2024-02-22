

import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const SidebarMenu = (props) => {
  const { 
    image, 
    icon, 
    title, 
    navigate = null, 
  } = props;

  return (
    <sidebarMenu>
      <NavLink
        to={navigate}
        className={({ isActive }) =>
          isActive ? "text-primary" : "text-[#9A9A9A]"
        }
      >
        <div className="flex items-center py-3 -mr-3 pl-4">
          {image && <img src={image} alt="" className="w-4 h-4" />}
          {icon && <div className="text-2xl -ml-1">{icon}</div>}
          <p className="text-[14px] pl-2">{title}</p>
        </div>
      </NavLink>
    </sidebarMenu>
  );
};

export default SidebarMenu;


