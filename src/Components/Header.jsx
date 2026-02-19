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
        className={`bg-purple-500 flex h-screen  ${expanded ? "w-96" : "w-24"} `}
      >
        <div onClick={() => setExpanded(!expanded)} className=" ">
          <button className="icon-contianer ">
            <IoChatbubbleEllipsesOutline size={30} className="icon-default" />
            <FiSidebar
              size={30}
              className="icon-hover"
              aria-label="Close sidebar" />
          </button>
          <span> 
            <button> 
                < FiSidebar/>
            </button>
          </span>
        </div>
      </aside>
    </main>
  );
};

export default Header;
