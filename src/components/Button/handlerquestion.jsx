import { NavLink } from "react-router-dom";

const ButtonHandlerQuestion = () => {
  return (
    <div className="flex pt-4 gap-2 text-xs text-gray-400">
      <NavLink
        to="/question"
        className={({ isActive }) =>
          isActive ? "text-primary font-semibold" : "text-[#9A9A9A] font-semibold"
        }
      >
        Pertanyaan Anda
      </NavLink>
      <NavLink
        to="/foryou"
        className={({ isActive }) =>
          isActive ? "text-primary font-semibold" : "text-[#9A9A9A] font-semibold"
        }
      >
        Untuk Anda
      </NavLink>
      <NavLink
        to="/draf"
        className={({ isActive }) =>
          isActive ? "text-primary font-semibold" : "text-[#9A9A9A] font-semibold"
        }
      >
        Draft
      </NavLink>
    </div>
  );
};

export default ButtonHandlerQuestion;
