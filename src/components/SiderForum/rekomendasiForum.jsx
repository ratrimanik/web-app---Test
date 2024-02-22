import Header from "../SiderBeranda/header";
import ProfileForum from "./profileForum";

const RecomForum = () => {
    return(
        <div className="bg-white border-white shadow-md rounded-lg mb-4 w-64 mt-4">
        <Header
          image="src/assets/img/forumsider.png"
          title="Rekomendasi Forum"
        />

        <hr className="mt-1" />

        <div className="pb-2">
          <ProfileForum />
        </div>
      </div>
    )
}

export default RecomForum;