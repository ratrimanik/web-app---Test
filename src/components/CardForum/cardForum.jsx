/* eslint-disable react/prop-types */
import { IoIosMore } from "react-icons/io";

const CardForum = (props) => {
    const {
        title,
        description,
        date,
        image,
    } = props;

  return (
    <div className="bg-white h-24 rounded-lg shadow-md pr-4">
      <div className="flex">
        <img src={image} className="w-24 h-24" alt="" />
        <div className="ml-2">
          <p className="font-bold text-[12px]">{title}</p>
          <p className="text-[12px] text-[#9A9A9A]">
            {description}
          </p>
          <div className="flex items-center justify-between pb-1 pt-1">
            <div className="flex items-center">
              <img
                src="src/assets/img/iconforum2.png"
                className="w-4"
                alt=""
              />
              <p className="text-[12px] ml-1">{date}</p>
            </div>
            <IoIosMore />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardForum;
