/* eslint-disable react/prop-types */
/* eslint-disable react/no-children-prop */
import { IoIosMore } from "react-icons/io";
import { MdClose } from "react-icons/md";
import Button from "../Button/button";
const CardQuest = ({data}) => {
  const { 
    quest, 
    respon, 
    date, 
    status = null, 
    rate, 
    poin 
} = data;

  return (
    <div className="bg-white h-full mb-4 px-4 md:max-w-[650px] rounded-lg shadow-md">
      <div className="py-4 ">
        <div className="flex justify-between">
          <div className="font-bold text-[13px] pr-4">{quest}</div>
          <div className="flex gap-4">
            <IoIosMore />
            <MdClose />
          </div>
        </div>
        <div className="flex text-[11px]">
          <div className="flex text-gray-400">
            <p>{respon}</p>
            <span className="mx-1">·</span>
            <p>{date}</p>
            <span className="mx-1">·</span>
          </div>
          <p className="text-primary font-bold">{status}</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex mt-2 gap-2 items-center">
            <Button
              color="bg-white border border-gray-400 px-8 py-1 text-xs text-primary"
              children="Jawab"
            />
            <div className="flex">
              <img
                src="src/assets/img/rate-plus.png"
                alt=""
                className="w-5 h-5"
              />
              <p className="text-xs ml-1">{rate}</p>
            </div>
            <img src="src/assets/img/rate-min.png" alt="" className="w-5 h-5" />
          </div>
          <div className="flex">
            <Button
              color="bg-[#F39237] shadow-lg px-4 py-1 text-xs text-white"
              children={poin}
            />
            <img src="src/assets/img/save.png" alt="" className="w-4 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardQuest;
