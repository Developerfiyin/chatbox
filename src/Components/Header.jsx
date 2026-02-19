import React from "react";
import { FaRocketchat } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FiSidebar } from "react-icons/fi";
import "./index.css";
import { useState } from "react";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="flex h-screen overflow-hidden bg-indigo-100 ">
      <aside
        className={`bg-purple-300 flex flex-col  border-indigo-400 border-l px-6  ${expanded ? "w-96" : "w-20"} `}
      >
        <div
          onClick={() => setExpanded(!expanded)}
          className="flex items-center h-20 "
        >
          <button className="icon-container ">
            <IoChatbubbleEllipsesOutline size={30} className="icon-default" />
            <FiSidebar size={30} className="icon-hover" />
          </button>
          <button
            className={`ml-auto transition-opacity ${expanded ? "opacity-80" : "opacity-0 hidden"}`}
          >
            <FiSidebar size={30} />
          </button>
        </div>

        <nav className="flex-1 ">
          <NavItem 
          icon = { }
          
          />
        </nav>
      </aside>
    </main>
  );
};

export default Header;
