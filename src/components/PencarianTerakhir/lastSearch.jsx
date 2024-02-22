/* eslint-disable react/prop-types */
import { MdClose } from "react-icons/md";

const LastSearch = (props) => {
  const { title } = props;

  return (
    <div className="my-2">
      <div className="flex text-[#9A9A9A] items-center text-xs font-semibold justify-between">
        <div className="flex gap-2">
          <img src="src/assets/img/iconforum2.png" alt="" />
          <p>{title}</p>
        </div>
        <MdClose />
      </div>
      <hr className="mt-2"/>
    </div>
  );
};

export default LastSearch;
