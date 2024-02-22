/* eslint-disable react/no-children-prop */
import { Bs2CircleFill } from "react-icons/bs";
import RecomForum from "./rekomendasiForum";

const SiderForum = () => {
  return (
    <div className="w-64 pl-12">
      <div className="relative mt-16 flex w-64">
        <button
          type="button"
          className="w-64 h-8 bg-primary shadow-md rounded-full focus:outline-none text-white"
        >
          <p className="text-xs font-bold -ml-16">Undangan Forum</p>
          <Bs2CircleFill className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#D63230]" />
        </button>
      </div>

      <RecomForum />
    </div>
  );
};

export default SiderForum;
