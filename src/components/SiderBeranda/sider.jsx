/* eslint-disable react/no-children-prop */
import { IoSearchOutline } from "react-icons/io5";
import { Bs1CircleFill } from "react-icons/bs";
import { Bs2CircleFill } from "react-icons/bs";
import { Bs3CircleFill } from "react-icons/bs";
import IconSider from "./iconSider";
import DropDown from "./dropdown";
import Header from "./header";
import Profile from "./profile";
import Button from "../Button/button";
import { useLocation } from "react-router-dom";
import RecomForum from "../SiderForum/rekomendasiForum";

const Sider = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isFollowPage = location.pathname === "/follow";

  return (
    <div className="pl-5">
      <div className="relative mt-16">
        {isHomePage || isFollowPage ? (
          <input
            type="text"
            className="w-60 pl-12 h-8 rounded-full focus:outline-none text-sm border-white shadow-md bg-white"
            placeholder="Cari di Sigarda"
          />
        ) : (
          <button className="w-60 h-8  rounded-full focus:outline-none text-white text-sm bg-primary">
            <p className="-ml-28">Permintaan</p>
          </button>
        )}
        {isHomePage || isFollowPage ? (
          <IoSearchOutline className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500" />
        ) : (
          <Bs2CircleFill className="absolute right-12 top-1/2 transform -translate-y-1/2 text-[#D63230]" />
        )}
      </div>

      <div className="bg-white border-white shadow-md rounded-lg mt-4 w-60">
        <Header
          image="src/assets/img/pertanyaan-teratas.png"
          title="Pertanyaan Teratas"
        />

        <hr className="mt-1" />

        <div className="pb-2">
          <div>
            <IconSider
              icon={<Bs1CircleFill className="text-[#FAA916]" />}
              text="Apa saja jalur masuk PTN dan syaratnya?"
              children="20 rb jawaban"
            />
          </div>
          <div>
            <IconSider
              icon={<Bs2CircleFill className="text-[#2196F3]" />}
              text="Pendidikan Non Formal yang berkualitas apakah bisa didapatkan?"
              children="19 rb jawaban"
            />
          </div>
          <div>
            <IconSider
              icon={<Bs3CircleFill className="text-[#D63230]" />}
              text="Bagaimana pendapatmu tentang bekerja di bidang IT, di mana kita bekerja dari pagi sampai sore, dan malamnya melanjutkan pekerjaannya lagi?"
              children="15 rb jawaban"
            />
          </div>
        </div>
      </div>

      <div className="bg-white border-white shadow-md rounded-lg mt-4 mb-2 w-60">
        <Header
          image="src/assets/img/penulis-terbaik.png"
          title="Kontributor Terbaik"
        />

        <DropDown />

        <hr className="mt-1" />

        <div className="pb-2">
          <Profile
            image="src/assets/img/Profile.png"
            name="Aditya Pratama"
            address="Bandung, Jawa Barat, Indonesia"
            followers="20 jt pengikut"
            points="33657 poin"
          />

          <hr className="mt-2" />

          <Profile
            image="src/assets/img/Profile.png"
            name="Lathifuddin Siddiq"
            address="Surabaya, Jawa Timur, Indonesia"
            followers="20 jt pengikut"
            points="33657 poin"
          />

          <hr className="mt-2" />

          <Profile
            image="src/assets/img/Profile.png"
            name="Maritza Retno"
            address="Karimun, Jawa Timur, Indonesia"
            followers="20 jt pengikut"
            points="33657 poin"
          />
        </div>

        <div className="flex items-center justify-center py-4">
          <Button
            color="text-[#2196F3] text-xs font-bold"
            children="LIHAT LEBIH"
          />
        </div>
      </div>
      <img src="src/assets/img/Ads.png" className="-ml-2 w-[280px]" />
      <RecomForum />
    </div>
  );
};

export default Sider;
