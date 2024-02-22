import ButtonHandlerNotif from "../../components/Button/handlernotif";
import CardNotifikasi from "../../components/CardNotifikasi/cardnotifikasi";
import SidebarLayout from "../../fragments/sidebarlayout";

const Unread = () => {
    return(
        <SidebarLayout>
            <div className="w-[660px]">
        <div className="bg-[#F2F9FF] px-2">
          <div>
            <h1 className="text-xl font-bold text-primary mb-3">Notifikasi</h1>
          </div>
          <ButtonHandlerNotif />
          <CardNotifikasi
            image="src/assets/img/profilenotif.png"
            name="Qurrotu aini"
            description="mengirim pertanyaan baru"
            date= "2 menit yang lalu"
            quest="Apakah laptop dengan prosesor AMD E2-9000e RADEON R2. 1.50 GHz tidak bisa mengimbangi SSD? Sebelumnya sudah sempat pasang SSD, tapi kata teknisi laptop justru semakin lemot. Apakah hal itu berpengaruh atau ada solusi lain?"
          />
          <CardNotifikasi
            image="src/assets/img/profilenotif.png"
            name="Qurrotu aini"
            description="mengirim pertanyaan baru"
            date= "2 menit yang lalu"
            quest="Apakah laptop dengan prosesor AMD E2-9000e RADEON R2. 1.50 GHz tidak bisa mengimbangi SSD? Sebelumnya sudah sempat pasang SSD, tapi kata teknisi laptop justru semakin lemot. Apakah hal itu berpengaruh atau ada solusi lain?"
          />
          <CardNotifikasi
            image="src/assets/img/profilenotif.png"
            name="Qurrotu aini"
            description="mengirim pertanyaan baru"
            date= "2 menit yang lalu"
            quest="Apakah laptop dengan prosesor AMD E2-9000e RADEON R2. 1.50 GHz tidak bisa mengimbangi SSD? Sebelumnya sudah sempat pasang SSD, tapi kata teknisi laptop justru semakin lemot. Apakah hal itu berpengaruh atau ada solusi lain?"
          />
          <CardNotifikasi
            image="src/assets/img/profilenotif.png"
            name="Qurrotu aini"
            description="mengirim pertanyaan baru"
            date= "2 menit yang lalu"
            quest="Apakah laptop dengan prosesor AMD E2-9000e RADEON R2. 1.50 GHz tidak bisa mengimbangi SSD? Sebelumnya sudah sempat pasang SSD, tapi kata teknisi laptop justru semakin lemot. Apakah hal itu berpengaruh atau ada solusi lain?"
          />
        </div>
      </div>
        </SidebarLayout>
    )
}

export default Unread;