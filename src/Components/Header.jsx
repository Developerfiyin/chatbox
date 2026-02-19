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
        className={`bg-purple-300 flex flex-col  border-indigo-400 border-l text-center ${expanded ? "w-96" : "w-13"} `}
      >
        <div
          onClick={() => setExpanded(!expanded)}
          className="h-20 flex items-center text-center "
        >
          <button className="icon-container px-4">
            <IoChatbubbleEllipsesOutline className="icon-default text-2xl " />
            <FiSidebar className="icon-hover text-2xl" />
          </button>
          <button
            className={`ml-auto transition-opacity ${expanded ? "opacity-90" : "opacity-0 hidden"}`}
          >
            <FiSidebar className="text-2xl" />
          </button>
        </div>

        <nav className="flex-1 px-3 space-y-2 mt-4">
          <NavItem
            icon={<LuNotebookPen />}
            label="New Chat"
            active
            expanded={expanded}
          />
        </nav>
      </aside>
    </main>
  );
};

function NavItem({ icon, label, active, expanded }) {
  return (
    <button
      className={`w-full flex items-center rounded-2xl transition-all ${active ? "text-purple-100 " : "text-purple-200 bg-indigo-50"}`}
    >
      <span className={`text-2xl ${!expanded && "mx-auto"}`}>{icon}</span>

      <span
        className={`ml-4 overflow-hidden text-nowrap transition-all ${expanded ? "w-auto opacity-90" : "w-0 opacity-0"}`}
      >
        {label}
      </span>
    </button>
  );
}

export default Header;
