import { NavLink } from "react-router-dom";

const ButtonHandlerNotif = () => {
  return (
    <div className="bg-white flex items-center px-4 gap-8 h-8 mb-4 md:max-w-[650px] rounded-lg shadow-md text-sm">
      <NavLink
        to="/notif"
        className={({ isActive }) =>
          isActive
            ? "text-black font-semibold"
            : "text-[#9A9A9A] font-semibold"
        }
      >
        Semua
      </NavLink>
      <NavLink
        to="/unread"
        className={({ isActive }) =>
          isActive
            ? "text-black font-semibold"
            : "text-[#9A9A9A] font-semibold"
        }
      >
        Belum Dibaca
      </NavLink>
    </div>
  );
};

export default ButtonHandlerNotif;
