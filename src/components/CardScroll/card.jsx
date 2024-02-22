/* eslint-disable react/prop-types */
import { MdClose } from "react-icons/md";

const Card = ({ title, description, image }) => {
  return (
    <div className="inline-block">
      <div className="w-36 h-52 max-w-xs overflow-hidden rounded-lg shadow-md bg-white">
        <button
          type="button"
          className="text-md text-[#9A9A9A] rounded-full pt-2 ml-28 font-bold"
        >
          {<MdClose />}
        </button>
        <div className="flex flex-col items-center ">
          <img src={image} alt="" className="mb-2"/>
          <div className="flex flex-col justify-center items-center">
            <p className="text-sm font-bold">{title}</p>
            <p className="text-xs text-[#9A9A9A] mx-4 text-center">
              {description}
            </p>
          </div>
          <button
            type="button"
            className="flex text-[10px] bg-primary mt-2 text-white rounded-full px-4 font-bold"
          >
            <p>Ikuti</p>
            <span className="mx-1">·</span>
            <p>12rb</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
