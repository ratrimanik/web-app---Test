import LastSearch from "../../components/PencarianTerakhir/lastSearch";
import SidebarLayout from "../../fragments/sidebarlayout";
import { IoSearchOutline } from "react-icons/io5";
import JelajahiItem from "../../components/Jelajahi/jelajahiItem";
import { dummyCard } from "../../components/CardPostDashboard/datacard";
import CardPost from "../../components/CardPostDashboard/cardpost";

const JelajahiPage = () => {
  const selectedData = dummyCard[4]

  return (
    <SidebarLayout>
      <div className="w-[660px]">
        <div className="bg-[#F2F9FF] px-2">
          <div>
            <h1 className="text-xl font-bold text-primary mb-3">Jelajahi</h1>
            <div>
              <div className="flex">
                <div className="relative mb-4 w-full mr-4">
                  <input
                    type="text"
                    className="w-full pl-12 h-8 border-white shadow-md text-sm rounded-full focus:outline-none text-black"
                    placeholder="Cari Forum"
                  />
                  <IoSearchOutline className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
                <div>
                  <button>
                    <img
                      src="src/assets/img/filter.png"
                      alt=""
                      className="w-9 h-8"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white h-full mb-4 px-4 rounded-lg shadow-md">
              <p className="text-[12px] font-semibold pt-2">
                Pencarian Terakhir
              </p>
              <div className="mt-2">
                <LastSearch title="Design Grafis" />
                <LastSearch title="UI UX" />
              </div>
            </div>
            <div className="bg-white h-full mb-4 px-4 rounded-lg shadow-md">
              <p className="text-primary font-bold text-sm py-2">
                Tren Topik untuk Anda
              </p>
              <JelajahiItem
                title="Artificial Intelligence"
                vote="120jt vote" 
              />
              <JelajahiItem
                title="Politik Indonesia"
                vote="100jt vote" 
              />
              <JelajahiItem
                title="Pilpres 2024"
                vote="80jt vote" 
              />
              <JelajahiItem
                title="Mahkamah Konstitusi"
                vote="10jt vote" 
              />
            </div>
          </div>
          <div>
            <CardPost data={selectedData} />
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default JelajahiPage;
