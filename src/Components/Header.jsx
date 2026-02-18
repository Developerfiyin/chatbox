import React from "react";
import { FaRocketchat } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

import { useState } from "react";
const Header = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <main className="flex h-screen overflow-hidden bg-indigo-100 ">
      <aside className="bg-purple-500 flex h-screen ">
        <div>
          <button>
            <IoChatbubbleEllipsesOutline />
          </button>
        </div>
        <FaRocketchat />
      </aside>
    </main>
  );
};

export default Header;
