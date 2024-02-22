/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Button from "../Button/button";

const Profile = (props) => {
  const {
    image,  
    name, 
    address, 
    followers, 
    points 
} = props;

  return (
    <div>
      <div className="flex px-2 pt-4">
        <img src={image} alt="" className="w-8 h-8" />
        <div className="pl-2">
          <p className="text-xs font-bold">{name}</p>
          <p className="text-xs text-gray-400">{address}</p>
          <div className="">
            <Button
              color="bg-[#9A9A9A] items-center"
              className="flex"
            >
              <p className="text-[#F8F3F3] text-[10px]">{followers}</p>
            </Button>
            <Button
              color="bg-primary items-center"
              className="flex"
            >
              <p className="text-white px-2 text-[10px]">Ikuti</p>
            </Button>
          </div>
        </div>
        <Button color="bg-[#F39237] h-4 w-[74px] -ml-4">
          <p className="text-white text-[10px]">{points}</p>
        </Button>
      </div>
    </div>
  );
};

export default Profile;
