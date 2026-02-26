import React from "react";
import { useState } from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { LuNotebookPen } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa6";
import { PiWaveformBold } from "react-icons/pi";
import { PiImagesSquareBold } from "react-icons/pi";
import { GrAppsRounded } from "react-icons/gr";
import { BsFolderPlus } from "react-icons/bs";
import { TbCircleChevronRight } from "react-icons/tb";
import { LuGift } from "react-icons/lu";
import { PiStarFourLight } from "react-icons/pi";
import { RiUserAddLine } from "react-icons/ri";
import { TbCircleDotted } from "react-icons/tb";
import { useRef } from "react";
import { HiPlus } from "react-icons/hi2";
import { FiSidebar } from "react-icons/fi";
import "./index.css";
const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [message, setMessage] = useState("");
  const textareaRef = useRef(null);

  const handleInput = (e) => {
    const target = e.target;
    setMessage(target.value);

    target.style.height = "inherit";

    // Set the new height based on content
    const newHeight = target.scrollHeight;
    target.style.height = `${newHeight}px`;
  };

  const handleKeyDown = (e) => {
    // Submit on Enter, but allow Shift+Enter for new lines
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (message.trim()) {
        console.log("Sending:", message);
        setMessage("");
        // Reset height back to original after sending
        if (textareaRef.current) textareaRef.current.style.height = "inherit";
      }
    }
  };
  return (
    <section className="flex h-screen overflow-hidden bg-white ">
      <aside
        className={`dark:bg-[#171717] flex flex-col  border-slate-200 transition-all duration-300 border-r text-center ${expanded ? "w-72 " : "w-13"} `}
      >
        <div
          onClick={() => setExpanded(!expanded)}
          className="h-20 flex items-center text-center "
        >
          <button className="icon-container mb-4 px-3">
            <IoChatbubbleEllipsesOutline className="icon-default text-2xl " />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              aria-hidden="true"
              data-rtl-flip=""
              size={20}
              className=" text-4xl bg-500  mx-2"
            >
              <use
                href="/cdn/assets/sprites-core-mxwopdm6.svg#38e54b"
                fill="currentColor"
              ></use>
            </svg>
            <FiSidebar className="icon-hover text-2xl" />
          </button>
          <button
            className={`ml-auto mr-9 transition-opacity ${expanded ? "opacity-70" : "opacity-0 hidden"}`}
          >
            <FiSidebar className="text-xl text-neutral-500" />
          </button>
        </div>

        <nav className="flex-1 px-1.5 mb-2 -mt-4 space-y-2  ">
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

        <NavItem
          icon={<PiStarFourLight className="font-bold" />}
          label="Upgrade"
          active
          expanded={expanded}
        />

        <div className="text-center ml-3.5 mb-5">
          <h2 className="text-white items-center font-medium rounded-full text-center bg-blue-600 h-6 w-6">
            TF
          </h2>
        </div>
      </aside>

      <main className="flex flex-col flex-1 ">
        <header className="h-20  flex justify-between p-4 bg-white ">
          <div className="mb-20">
            <select
              id="options"
              className="block w-full rounded-md py-2 pl-5 text-gray-900 hover:bg-gray-100 focus:ring-1 focus:ring-gray-600 items-center md:text-xl sm:leading-6 cursor-pointer"
            >
              <option value="1">ChatGPT</option>
              <option value="2">ChatGPT Plus</option>
            </select>
          </div>

          <button className="bg-indigo-50 text-indigo-500 hover:bg-indigo-100 mr-17 font-semibold items-center mb-4 flex px-4 rounded-full text-center ">
            <LuGift />
            Claim offer
          </button>

          <div className="flex space-x-3 mb-5 mr-9">
            <ChatItem
              icon={<RiUserAddLine />}
              label="start a group chat"
              active
              expanded={expanded}
            />

            <ChatItem
              icon={<TbCircleDotted />}
              label=" Turn on tempoary chat"
              active
              expanded={expanded}
            />
          </div>
        </header>

        <div className="flex flex-col justify-center items-center w-full max-w-3xl mx-auto p-4">
          <h2 className="font-normal text-4xl mt-20 ">
            What are you working on?
          </h2>
          <div className="relative flex mt-12 w-full bg-white dark:bg-[#2f2f2f] border-gray-200 rounded-full border dark:border-gray-800 shadow-md transition-all px-3 py-3">
            {/* Attachment Icon */}

            <ChatItem
              icon={<HiPlus />}
              label=" Add files and more  / "
              active
              expanded={expanded}
            />

            <textarea
              ref={textareaRef}
              rows={1}
              value={message}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              placeholder="Message ChatGPT"
              style={{ minHeight: "44px" }} // Ensures it starts at a nice height
              className="flex-1 max-h-50 resize-none outline-none bg-transparent border-none focus:ring-0 text-gray-800 text-[16px] leading-6 dark:outline dark:text-zinc-100 py-2.5 px-3 placeholder-gray-600 overflow-y-auto"
            />
            {/* Send Button */}
            <div className="flex justify-center ml-2 gap-1">
              <button
                className={`px-3 py-2 rounded-full items-center hover:bg-gray-100 transition-all   ${
                  message.trim()
                    ? " text-gray-800 dark:bg-white  dark:text-black cursor-pointer"
                    : " text-gray-800  dark:bg-zinc-800 dark:text-zinc-600 cursor-pointer "
                }`}
              >
                <FaMicrophone className="text-xl" />
              </button>

              {/* THE ANIMATION WAVE*/}
              <button
                disabled={!message.trim()}
                className={`px-3 py-2 rounded-full hover:bg-black/80 transition-all ${
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
    <div className="relative flex items-center group mb-1">
      <button
        className={`
          flex items-center transition-all duration-200 cursor-pointer outline-none border-none
          
          /* 1.DEFAULT STATE: Always transparent until hover */
          
          bg-transparent 
          
          /* 2.HOVER STATE: Only shows background on hover */
          ${
            expanded
              ? "w-full px-3 py-2 rounded-xl justify-start hover:bg-gray-100"
              : "w-10 h-10 rounded-xl justify-center mx-auto hover:bg-gray-200"
          }

          /* 3. ACTIVE STATE: Keep this only if you want the 'selected' item to stay gray */
          ${active ? "bg-gray-200 text-neutral-900" : "text-neutral-800"}
        `}
      >
        {/* ICON */}
        <span
          className={`text-xl shrink-0 flex items-center justify-center ${expanded ? "mr-2" : ""}`}
        >
          {icon}
        </span>

        {/* INLINE LABEL */}
        <span
          className={`overflow-hidden whitespace-nowrap transition-all duration-300 font-medium ${
            expanded ? "w-auto opacity-100" : "w-0 opacity-0"
          }`}
        >
          {label}
        </span>
      </button>

      {/* 4. TOOLTIP: Only shows when hovering while collapsed */}
      {!expanded && (
        <div
          className="
          absolute left-full ml-4 px-3 py-1.5
          bg-zinc-900 text-white text-xs rounded-lg
          whitespace-nowrap pointer-events-none
          invisible opacity-0 -translate-x-2
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          transition-all duration-200 z-100 shadow-xl
        "
        >
          <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-zinc-900 rotate-45" />
        </div>
      )}
    </div>
  );
}

function ChatItem({ icon, label, active, expanded }) {
  return (
    <div className="relative flex flex-col items-center group">

      <button
        className={`
          flex items-center transition-all duration-200 cursor-pointer outline-none border-none
          bg-transparent
          ${
            expanded
              ? "w-full px-3 py-2 rounded-xl justify-start hover:bg-gray-100"
              : "w-10 h-10 rounded-xl justify-center hover:bg-gray-200"
          }
          ${active ? "bg-gray-200 text-neutral-900" : "text-neutral-800"}
        `}
      >
        <span className="text-xl shrink-0 flex items-center justify-center">
          {icon}
        </span>
        {expanded && (
          <span className="ml-3 overflow-hidden whitespace-nowrap transition-all duration-300 font-medium text-sm">
            {label}
          </span>
        )}
      </button>

      {/* TOOLTIP: Positioned Below the icon */}
      {!expanded && (
        <div
          className="
          /* Positioning:  moves it below. 
             left-1/2 + -translate-x-1/2 centers it horizontally */

          absolute top-full mt-2 
          px-2.5 py-2 bg-black  text-white text-[11px] rounded-md
          whitespace-nowrap pointer-events-none shadow-xl
          /* Animation: Slide down from the icon */

          invisible opacity-0 -translate-y-1
          group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-200 z-100 font-bold
        " >
          {label}
          {/* Tooltip Arrow (pointing up) */}
          <div
            className="
            absolute -top-1 left-1/2 -translate-x-1/2 
            border-x-[6px] border-x-transparent 
            border-b-[6px] border-b-zinc-800
          "
          />
        </div>
      )}
    </div>
  );
}

export default Header;
