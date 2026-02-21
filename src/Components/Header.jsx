import React from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

import { FaRocketchat } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { LuNotebookPen } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa6";
import { PiWaveformBold } from "react-icons/pi";
import { FaArrowUp } from "react-icons/fa";
import { PiImagesSquareBold } from "react-icons/pi";
import { GrAppsRounded } from "react-icons/gr";
import { BsFolderPlus } from "react-icons/bs";
import { TbCircleChevronRight } from "react-icons/tb";
import { LuGift } from "react-icons/lu";
import { FiUserPlus } from "react-icons/fi";
import { RiUserAddLine } from "react-icons/ri";
import { TbCircleDotted } from "react-icons/tb";
import { useRef, useEffect } from "react";
import { HiPlus, HiArrowUp } from "react-icons/hi2";
import { FiSidebar } from "react-icons/fi";
import "./index.css";
import { useState } from "react";

const people = [
  { id: 1, name: "Durant" },
  { id: 2, name: "Curry" },
  { id: 3, name: "LeBron" },
];
const Header = () => {
  const [selected, setSelected] = useState(people[0]);

  const [message, setMessage] = useState('');
  const textareaRef = useRef(null);

  const handleInput = (e) => {
    const target = e.target;
    setMessage(target.value);

    // FIX: Reset height to 'inherit' first to get accurate scrollHeight
    target.style.height = 'inherit';
    
    // Set the new height based on content
    const newHeight = target.scrollHeight;
    target.style.height = `${newHeight}px`;
  };

  const handleKeyDown = (e) => {
    // Submit on Enter, but allow Shift+Enter for new lines
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (message.trim()) {
        console.log("Sending:", message);
        setMessage('');
        // Reset height back to original after sending
        if (textareaRef.current) textareaRef.current.style.height = 'inherit';
      }
    }





  const [expanded, setExpanded] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
}
  return (
    <section className="flex h-screen overflow-hidden bg-white ">
      <aside
        className={`bg-gray-100 flex flex-col  border-indigo-400 border-l text-center ${expanded ? "w-72" : "w-13"} `}
      >
        <div
          onClick={() => setExpanded(!expanded)}
          className="h-20 flex items-center text-center "
        >
          <button className="icon-container mb-6 px-3">
            <IoChatbubbleEllipsesOutline className="icon-default text-2xl " />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              aria-hidden="true"
              data-rtl-flip=""
              className=" text-4xl bg-red-500  mx-2"
            >
              <use
                href="/cdn/assets/sprites-core-mxwopdm6.svg#38e54b"
                fill="currentColor"
              ></use>
            </svg>
            <FiSidebar className="icon-hover text-2xl" />
          </button>
          <button
            className={`ml-auto mr-9 mb-4 transition-opacity ${expanded ? "opacity-70" : "opacity-0 hidden"}`}
          >
            <FiSidebar className="text-xl text-neutral-500" />
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
        <header className="h-20  flex justify-between  p-4 bg-white ">
          <div className="mb-20">
            <select
              id="options"
              className="block w-full rounded-md py-2 pl-5 text-gray-900 hover:bg-gray-100 focus:ring-1 focus:ring-gray-600 items-center md:text-xl sm:leading-6 cursor-pointer"
            >
              <option value="1">ChatGPT</option>
              <option value="2">ChatGPT Plus</option>
            </select>
          </div>

          <button className="bg-indigo-50 text-indigo-400 mr-17 font-semibold items-center mb-4 flex px-5   rounded-full text-center ">
            <LuGift />
            Claim offer
          </button>

          <div className="flex space-x-4 mr-6 ">
            <RiUserAddLine size={23} />
            <TbCircleDotted size={23} />
          </div>
        </header>

        <div className="flex flex-col justify-center items-center  w-full max-w-3xl mx-auto p-4">
          <h2 className="font-normal text-4xl mt-20 ">
            What are you working on?
          </h2>
          <div className="relative flex mt-10 w-full bg-white dark:bg-[#2f2f2f] border-gray-200 rounded-full border dark:border-gray-800 shadow-md transition-all px-3 py-3">
            {/* Attachment Icon */}
            <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg transition-colors">
              <HiPlus className="text-xl" />
            </button>

            {/* Text Input */}
            <textarea
              ref={textareaRef}
              rows={1}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask Anything..."
              className="flex-1 max-h-60 resize-none overflow-y-auto bg-transparent border-none focus:ring-0 text-gray-800 dark:text-zinc-100 py-2 px-2 placeholder-gray-500"
            />

            {/* Send Button */}
            <div className="flex justify-center ml-2 gap-1">
              <button
                disabled={!message.trim()}
                className={`p-2 rounded-full items-center hover:bg-gray-100 transition-all ${
                  message.trim()
                    ? " text-gray-800 dark:bg-white  dark:text-black cursor-pointer" 
                    : " text-gray-800  dark:bg-zinc-800 dark:text-zinc-600 cursor-pointer "
                }`}
              >
                <FaMicrophone className="text-xl font-bold" />
            
              </button>
              {/* THE ANIMATION WAVE*/}
              <button
                onSubmit={!message.trim()}
                className={`px-2 py-1 rounded-full hover:bg-black/80 transition-all ${
                  message.trim()
                    ? " bg-black text-white dark:bg-white dark:text-black cursor-pointer"  
                    : "bg-black/90 text-white dark:bg-zinc-800 dark:text-zinc-600 cursor-pointer"
                }`}
              >
                <PiWaveformBold className="text-xl font-bold" /> 
    
              </button>
            </div>
          </div>

          <p className="text-xs text-center text-gray-500 mt-3">
            ChatGPT can make mistakes. Check important info.
          </p>
        </div>
      </main>
    </section>
  );
};

function NavItem({ icon, label, active, expanded }) {
  return (
    <button
      className={`w-full flex items-center rounded-2xl transition-all ${active ? "text-neutral-900 " : "text-purple-200 bg-indigo-50"}`}
    >
      <span
        className={`text-xl hover:bg-neutral-300 hover:p-2 rounded-lg ${!expanded && "mx-auto"}`}
      >
        {icon}
      </span>

      <span
        className={`ml-2 overflow-hidden text-nowrap transition-all ${expanded ? "w-auto opacity-90" : "w-0 opacity-0"}`}
      >
        {label}
      </span>
    </button>
  );
}

export default Header;
