/* eslint-disable react/prop-types */
import { IoIosMore } from "react-icons/io";

const JelajahiItem = (props) => {
    const {
        title,
        vote,
    } = props;

  return (
    <div className="flex justify-between mb-2">
      <div>
        <p className="text-[#9A9A9A] text-[12px] font-bold">
          Sedang Tren di Indonesia
        </p>
        <p className="font-semibold text-[13px] ">{title}</p>
        <p className="text-[#9A9A9A] font-semibold text-[12px]">{vote}</p>
      </div>
      <IoIosMore />
    </div>
  );
};

export default JelajahiItem;
