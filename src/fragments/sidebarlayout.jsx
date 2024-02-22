/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Sidebar } from "flowbite-react";
import { BsFillPCircleFill } from "react-icons/bs";
import Sider from "../components/SiderBeranda/sider";
import SidebarMenu from "../components/Sidebar/sidebarMenu";
import Dashboard from "../pages/Beranda/DashboardPage";
import QuestionPage from "../pages/Pertanyaan/QuestionPage";
import { useLocation, useNavigate } from "react-router-dom";
import Forum from "../pages/Forum/forum";
import SiderForum from "../components/SiderForum/siderForum";

const SidebarLayout = ({ children }) => {
  const location = useLocation();
  const isForumPage = location.pathname === "/forum";
  const isJelajahiPage = location.pathname === "/jelajahi";
  const isNotifikasiPage = location.pathname === "/notif";
  const isUnreadPage = location.pathname === "/unread";

  const navigate = useNavigate();
  const content = [Dashboard, null, QuestionPage, Forum, null];
  const [currentIndex] = useState(0);

  const [activePage, setActivePage] = useState("");

  return (
    <div className="bg-[#F2F9FF]">
      <div className="flex">
        <div className="sticky top-0 left-0 z-40 w-64 h-screen">
          <Sidebar
            className="bg-white dark:bg-gray-800 shadow-lg fixed top-0 left-0 w-52 h-screen z-40"
            aria-label="Sidebar with logo branding example"
          >
            <div className="pl-2">
              <Sidebar.Logo className="w-24">
                <img src="/src/assets/img/logo-sigarda.png" alt="Logo" />
              </Sidebar.Logo>
              <Sidebar.Items className="text-sm font-medium">
                <Sidebar.ItemGroup>
                  <Sidebar.Item className="text-primary font-bold">
                    Menu
                  </Sidebar.Item>
                  <SidebarMenu
                    navigate="/"
                    image="src/assets/img/beranda.png"
                    title="Beranda"
                  />
                  <SidebarMenu
                    navigate="/jelajahi"
                    image="src/assets/img/jelajahi.png"
                    title="Jelajahi"
                  />
                  <SidebarMenu
                    navigate="/question"
                    image="src/assets/img/tanya.png"
                    title="Pertanyaan"
                    isActive={activePage === "Pertanyaan"}
                  />
                  <SidebarMenu
                    navigate="/forum"
                    image="src/assets/img/forum.png"
                    title="Forum"
                  />
                  <SidebarMenu
                    navigate="/notif"
                    image="src/assets/img/notif.png"
                    title="Notifikasi"
                  />
                </Sidebar.ItemGroup>
                <div className="pt-24">
                  <SidebarMenu
                    navigate="/profil"
                    icon={<BsFillPCircleFill className="text-primary" />}
                    title="Profil"
                  />
                  <SidebarMenu
                    navigate="/"
                    image="src/assets/img/more.png"
                    title="Lebih banyak"
                  />
                </div>
              </Sidebar.Items>
            </div>
          </Sidebar>
        </div>
        <div className="pt-6">
          {children ? children : content[currentIndex]()}
        </div>
        <div>
          {isForumPage || isJelajahiPage || isNotifikasiPage || isUnreadPage ? (
            <SiderForum />
          ) : (
            <Sider />
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
