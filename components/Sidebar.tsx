import Link from "next/link";
import React from "react";
import { BotMessageSquare, PencilLine, SearchIcon } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="bg-white text-white p-5">
      <ul className="gap-5 flex lg:flex-col mt-4">
        <li className="flex-1 ">
          <Link
            href="/create-chatbot"
            className="hover:opacity-50 flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-2 rounded-md bg-[#2991EE]"
          >
            <BotMessageSquare className="h-5 lg:h-5 lg:w-5" />
            <div className="hidden md:inline">
              <p className="text-base">Create</p>
              <p className="text-sm font-extralight">New Chatbot</p>
            </div>
          </Link>
        </li>
        <li className="flex-1 ">
          <Link
            href="/view-chatbots"
            className="hover:opacity-50 flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-2 rounded-md bg-[#2991EE]"
          >
            <PencilLine className="h-5 lg:h-5 lg:w-5" />
            <div className="hidden md:inline">
              <p className="text-base">Edit</p>
              <p className="text-sm font-extralight">Chatbots</p>
            </div>
          </Link>
        </li>
        <li className="flex-1 ">
          <Link
            href="/review-sessions"
            className="hover:opacity-50 flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-2 rounded-md bg-[#2991EE]"
          >
            <SearchIcon className="h-5 lg:h-5 lg:w-5" />
            <div className="hidden md:inline">
              <p className="text-base">View</p>
              <p className="text-sm font-extralight">Sessions</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
