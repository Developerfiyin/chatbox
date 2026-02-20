import React from "react";
import { FaRocketchat } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { LuNotebookPen } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { PiImagesSquareBold } from "react-icons/pi";
import { GrAppsRounded } from "react-icons/gr";
import { BsFolderPlus } from "react-icons/bs";
import { TbCircleChevronRight } from "react-icons/tb";
import { IoCheckmark } from "react-icons/io5";
import { LuGift } from "react-icons/lu";
import { FiUserPlus } from "react-icons/fi";
import { RiUserAddLine } from "react-icons/ri";
import { TbCircleDotted } from "react-icons/tb";

import { FiSidebar } from "react-icons/fi";
import "./index.css";
import { useState } from "react";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="flex h-screen overflow-hidden bg-indigo-200 ">
      <aside
        className={`bg-indigo-100 flex flex-col  border-indigo-400 border-l text-center ${expanded ? "w-65" : "w-13"} `}
      >
        <div
          onClick={() => setExpanded(!expanded)}
          className="h-20 flex items-center text-center "
        >
          <button className="icon-container px-3">
            <IoChatbubbleEllipsesOutline className="icon-default text-2xl " />
            <FiSidebar className="icon-hover text-2xl" />
          </button>
          <button
            className={`ml-40 transition-opacity ${expanded ? "opacity-90" : "opacity-0 hidden"}`}
          >
            <FiSidebar className="text-2xl" />
          </button>
        </div>

        <nav className="flex-1 px-3 space-y-2 mt-4">
          <NavItem
            icon={<LuNotebookPen />}
            label="New chat"
            active
            expanded={expanded}
          />

          <NavItem
            icon={<IoSearchOutline />}
            label="Search chat"
            active
            expanded={expanded}
          />

          <NavItem
            icon={<PiImagesSquareBold />}
            label="Images"
            active
            expanded={expanded}
          />

          <NavItem
            icon={<GrAppsRounded />}
            label="Apps"
            active
            expanded={expanded}
          />
          <NavItem
            icon={<TbCircleChevronRight />}
            label="Codex"
            active
            expanded={expanded}
          />

          <NavItem
            icon={<BsFolderPlus />}
            label="Projects"
            active
            expanded={expanded}
          />
        </nav>
      </aside>

      <main className="flex flex-col flex-1 ">
        <header className="h-20  flex justify-between p-4 bg-white ">
          <div class="relative">
            <select class="block w-full bg-white border border-purple-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 appearance-none">
              <option value="gpt">CHATGPT</option>
              <option value="mini">
                <button>
                  Chatgpt Go
                  <IoCheckmark />
                </button>
              </option>
            </select>

            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z" />
              </svg>
            </div>
          </div>

          <button className="bg-indigo-50 text-indigo-400 font-semibold items-center flex mx-auto p-2 rounded-lg text-center ">
            <LuGift />
            Claim offer
          </button>

          <div className="flex space-x-4 mr-6 ">
            <RiUserAddLine size={23} />
            <TbCircleDotted size={23} />
          </div>

        </header>




        
      </main>
    </section>
  );
};

function NavItem({ icon, label, active, expanded }) {
  return (
    <button
      className={`w-full flex items-center rounded-2xl transition-all ${active ? "text-neutral-900 " : "text-purple-200 bg-indigo-50"}`}
    >
      <span className={`text-xl ${!expanded && "mx-auto"}`}>{icon}</span>

      <span
        className={`ml-2 overflow-hidden text-nowrap transition-all ${expanded ? "w-auto opacity-90" : "w-0 opacity-0"}`}
      >
        {label}
      </span> 
    </button>
  );
}


function Input() {

}
export default Header;
