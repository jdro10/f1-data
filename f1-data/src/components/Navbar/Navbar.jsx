import React from "react";
import { VscGithub } from "react-icons/vsc";
import { MdOutlineLightMode } from "react-icons/md";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { GoPerson } from "react-icons/go";

const Navbar = () => {
  return (
    <div class="navbar bg-neutral text-neutral-content">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <HiOutlineMenuAlt2 size="25" />
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a href="/">
                <FaRegCalendarAlt /> Calendar
              </a>
            </li>
            <li>
              <a href="/">
                <RiTeamLine /> Drivers' standings
              </a>
            </li>
            <li>
              <a href="/">
                <GoPerson /> Constructor standings
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <a href="/" class="btn btn-ghost text-xl">
          F1 Data
        </a>
      </div>
      <div class="navbar-end">
        <button class="btn btn-ghost btn-circle">
          <MdOutlineLightMode size="25" />
        </button>
        <a class="btn btn-ghost btn-circle" href="https://github.com/jdro10">
          <VscGithub size="25" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
