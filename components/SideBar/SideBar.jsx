import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";

const SideBar = () => {
  return (
    <div className="bg-[#181818] w-[60px] h-[100%] absolute top-0 z-30 min-h-[500px]">
      <Link href="/" className="block px-[8px] mt-5 ">
        <div className="font-semibold text-primary text-3xl ">AP</div>
      </Link>
      <nav className=" text-center  h-[50%] flex flex-col justify-around w-[100%] mt-10">
        <Link
          href="/"
          className="flex items-center flex-col justify-center h-14 group"
        >
          <FontAwesomeIcon
            icon={faHome}
            color="#4d4d4e"
            className="text-[24px] w-[40px] text-center text-[#4d4d4e] block  relative leading-[51px] group-hover:text-primary"
          />
          <span className="text-md text-transparent group-hover:text-primary shadow-md shadow-black">
            Home
          </span>
        </Link>
        <Link
          href="/About"
          className="flex items-center flex-col justify-center h-14 group"
        >
          <FontAwesomeIcon
            icon={faUser}
            color="#4d4d4e"
            className="text-[24px] w-[40px] text-center text-[#4d4d4e] block  relative leading-[51px] group-hover:text-primary"
          />
          <span className="text-md text-transparent group-hover:text-primary shadow-md shadow-black">
            Contact
          </span>
        </Link>
        <Link
          href="/Contact"
          className="flex items-center flex-col justify-center h-14 group"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            color="#4d4d4e"
            className="text-[24px] w-[40px] text-center text-[#4d4d4e] block  relative leading-[51px] group-hover:text-primary"
          />
          <span className="text-md text-transparent group-hover:text-primary shadow-md shadow-black">
            Home
          </span>
        </Link>
      </nav>
      <ul className="flex flex-col h-[20%] items-center justify-evenly bottom-2">
        <li>
          <Link href={"https://www.linkedin.com/in/arun-prakash7/"}>
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="w-[20px] items-center hover:text-primary"
            />
          </Link>
        </li>
        <li>
          <Link href={"https://github.com/ArunprakashLfs"}>
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="w-[20px] items-center hover:text-primary"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
