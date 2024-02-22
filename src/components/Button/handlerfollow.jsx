import { Link, useLocation } from "react-router-dom";
import Button from "./button";
import { useState, useEffect } from "react";

const ButtonHandlerFollow = () => {
 const [isFollowActive, setIsFollowActive] = useState(false);
 const location = useLocation();

 useEffect(() => {
    setIsFollowActive(location.pathname === '/follow');
 }, [location]);

 return (
    <div className="flex">
      <Button
        color={
          !isFollowActive
            ? "bg-gradient-to-r from-[#2196F3] to-[#0D2EA1] text-white"
            : "border border-gray-400 text-gray-400 hover:text-primary"
        }
        onClick={() => setIsFollowActive(!isFollowActive)}
      >
        <Link to='/'>
          <p className="text-xs px-2">Untuk Anda</p>
        </Link>
      </Button>
      <Button
        color={
          isFollowActive
            ? "bg-gradient-to-r from-[#2196F3] to-[#0D2EA1] text-white"
            : "border border-gray-400 text-gray-400 hover:text-primary"
        }
        onClick={() => setIsFollowActive(!isFollowActive)}
      >
        <Link to='/follow'>
          <p className="text-xs px-2">Mengikuti</p>
        </Link>
      </Button>
    </div>
 );
};

export default ButtonHandlerFollow;