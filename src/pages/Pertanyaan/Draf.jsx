import HeaderQuest from "../../fragments/headerquest";
import SidebarLayout from "../../fragments/sidebarlayout";

const Draf = () => {
  return (
    <SidebarLayout>
      <HeaderQuest>
        <div className="h-full mb-4 w-[650px] justify-center items-center mt-8">
          <div className="text-center">
            <img src="src/assets/img/draf.png" alt="" className="mx-auto" />
            <div className="mt-4">
              <p className="text-[#9A9A9A] font-bold">
                Tidak ada draft jawaban
              </p>
              <p className="text-[#9A9A9A] text-sm">
                Mulailah menuliskan jawaban dengan mencari pertanyaan untuk
                dijawab 
                <br /> 
                pada bagian Pertanyaan untuk Anda.
              </p>
              <button
                type="button"
                className="text-xs bg-primary text-white rounded-full px-6 py-2 font-bold mt-4"
              >
                <p>Tampilkan Pertanyaan untuk anda</p>

              </button>
            </div>
          </div>
        </div>
      </HeaderQuest>
    </SidebarLayout>
  );
};

export default Draf;
