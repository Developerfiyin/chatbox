import React from "react";
import { FaRocketchat } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FiSidebar } from "react-icons/fi";
import './index.css'
import { useState } from "react";


const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="flex h-screen overflow-hidden bg-indigo-100 ">
      <aside className="bg-purple-500 flex h-screen ">
        <div onClick={() => setExpanded(!expanded)}>
          <button className="icon-container ">
             <IoChatbubbleEllipsesOutline size={30} className="icon-default"/> 
              <FiSidebar size={30} className="icon-hover"/>
          </button>
          <span> Chat Gpt</span>
        </div>

      </aside>
    </main>
  );
};

export default Header;
