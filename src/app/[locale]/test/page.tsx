"use client";
import Dashboard from "@/components/app/Dashboard";
import NavHeader from "@/components/app/NavHeader";
import SideBar from "@/components/app/SideBar";
import Navbar from "@/components/nav/Navbar";
import PaneIcons from "@/components/pane/PaneIcons";
import { paneIcons } from "@/data/client/component/pane/PaneIcons";
import React from "react";

const TestPage = () => {

  return (
    <div className="bg-ieBackground flex  flex-col h-full">
      {/* this for the navbar */}
      <div className="bg-transparent h-12"><Navbar/></div>
      <div className="flex flex-col-reverse sm:flex-row h-[100%]">
        {/* pane */}
        <div className="w-full fixed bg-ieBackground z-10 -bottom-[93%] sm:static transition-all sm:min-w-[68px] sm:w-[68px] h-full">
          <PaneIcons paneIcons={paneIcons} />
        </div>
        {/* app */}
        <div className="bg-ieWhite grow flex flex-col">
            <NavHeader/>
          <div className="flex flex-row h-full">
            <div className="hidden md:block w-[11.43rem] transition-all min-w-[11.43rem] border-r-[1px]"><SideBar/></div>
            <div className="grow p-4 sm:p-0"><Dashboard/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
