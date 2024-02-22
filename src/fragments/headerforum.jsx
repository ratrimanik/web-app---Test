/* eslint-disable react/prop-types */
import { IoSearchOutline } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import ButtonHandlerQuestion from "../components/Button/handlerquestion";

const HeaderForum = (props) => {
    const{
        children,
    }=props;

    return(
        <div className="bg-[#F2F9FF]">
        <div className="flex">
          <div>
            <h1 className="text-xl font-bold text-primary">Forum</h1>
            <div className="flex justify-between">
              <ButtonHandlerQuestion/>
              <div className="flex items-center mt-4">
                <FaCirclePlus className="text-primary text-2xl" />
              </div>
            </div>

            <hr className="border border-[#C1DFF5] mb-4 mt-2" />

            <div>
              <div className="flex">
                <div className="relative mb-4 w-full mr-2">
                  <input
                    type="text"
                    className="w-full pl-12 h-8 bg-white border-white shadow-md text-sm rounded-full focus:outline-none text-black"
                    placeholder="Cari di Sigarda"
                  />
                  <IoSearchOutline className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
                <img
                  src="src/assets/img/darkmode.png"
                  alt=""
                  className="w-8 h-8"
                />
              </div>
              <div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default HeaderForum;