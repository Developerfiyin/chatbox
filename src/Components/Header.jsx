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
import { useRef, useEffect } from "react";
import { HiPlus, HiArrowUp } from "react-icons/hi2";

import { FiSidebar } from "react-icons/fi";
import "./index.css";
import { useState } from "react";

const Header = () => {
  const [message, setMessage] = useState("");
  const textareaRef = useRef(null);

  // Auto-resize logic
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

  const [expanded, setExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
        <header className="h-20  flex justify-between p-4 bg-white ">
         <Menu as="div" className="relative inline-block text-left">
      {/* Trigger: Completely borderless with ghost hover */}
      <MenuButton className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none">
        GPT-4o
        <LuChevronDown className="h-4 w-4 text-gray-500" />
      </MenuButton>

      {/* Options Panel: Uses shadow-2xl instead of a border */}
      <MenuItems
        transition
        className="absolute left-0 z-10 mt-2 w-64 origin-top-left rounded-xl bg-white dark:bg-zinc-900 shadow-2xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        <div className="p-1.5">
          {models.map((model) => (
            <MenuItem key={model.id}>
              {({ focus }) => (
                <button
                  className={`${
                    focus ? 'bg-gray-100 dark:bg-zinc-800' : ''
                  } group flex w-full items-start gap-3 rounded-lg p-2 text-left transition-colors`}
                >
                  <model.icon className="mt-1 h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{model.name}</p>
                    <p className="text-xs text-gray-500">{model.desc}</p>
                  </div>
                </button>
              )}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z" />
              </svg>
            </div>
          </div>

          <button className="bg-indigo-50 text-indigo-400 font-semibold items-center mb-4 flex  ml-45 px-3 rounded-full text-center ">
            <LuGift />
            Claim offer
          </button>

          <div className="flex space-x-4 mr-6 ">
            <RiUserAddLine size={23} />
            <TbCircleDotted size={23} />
          </div>
        </header>

        <div className="flex flex-col flex-1 justify-center items-center  w-full max-w-3xl mx-auto p-4">
          <h2 className="font-normal text-4xl mb-8 ">
            What are you working on ?
          </h2>
          <div className="relative flex  w-full bg-white dark:bg-[#2f2f2f] rounded-2xl dark:border-zinc-700 shadow-sm focus-within:ring-1 focus-within:ring-gray-300 transition-all px-3 py-3">
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
              className="flex-1 max-h-60 resize-none bg-transparent border-none focus:ring-0 text-gray-800 dark:text-zinc-100 py-2 px-2 placeholder-gray-500"
            />

            {/* Send Button */}
            <button
              disabled={!message.trim()}
              className={`p-2 rounded-lg transition-all ${
                message.trim()
                  ? "bg-black text-white dark:bg-white dark:text-black cursor-pointer"
                  : "bg-gray-200 text-gray-400 dark:bg-zinc-800 dark:text-zinc-600 cursor-not-allowed"
              }`}
            >
              <HiArrowUp className="text-xl font-bold" />
            </button>
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
      <span className={`text-xl ${!expanded && "mx-auto"}`}>{icon}</span>

      <span
        className={`ml-2 overflow-hidden text-nowrap transition-all ${expanded ? "w-auto opacity-90" : "w-0 opacity-0"}`}
      >
        {label}
      </span>
    </button>
  );
}

function Input() {}
export default Header;
