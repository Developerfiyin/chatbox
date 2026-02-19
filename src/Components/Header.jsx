import React from "react";
import { FaRocketchat } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { LuNotebookPen } from "react-icons/lu";

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
          <NavItem icon={<LuNotebookPen />} />
        </nav>
      </aside>
    </main>
  );
};

function NavItem({ icon, label, active, expanded }) {
  return (
    <button
      className={`w-full flex items-center p-3.5 rounded-2xl transition-all ${active ? "bg-indigo-100 text-purple-100 " : "text-purple-200: bg-indigo-50"} `}
    >
      <span className={`text-2xl ${!expanded && "mx-auto"}`}>{icon}</span>
    </button>
  );
}

export default Header;
