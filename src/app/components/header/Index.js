"use client";
import Image from "next/image";
import logo from "../../assets/logo.png";
import profileIcon from "../../assets/profileIcon.png";
import searchIcon from "../../assets/searchIcon.png";
import downArrow from "../../assets/downArrow.png";
import { useState } from "react";
import { useDeviceType } from "@/app/hooks/useDeviceType";
export default function Header() {
  const deviceType = useDeviceType(1024);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex items-center justify-between h-20 sticky top-0 z-30 backdrop-blur-md pr-1200 pl-[100px]">
      <div className="flex justify-center items-center gap-3">
        <Image src={logo} alt="Logo" className="w-[105px] h-[63px]" />
        <div className="flex bg-white rounded-full h-[50px] w-[290px] items-center pl-4 gap-2">
          <Image src={searchIcon} alt="searchIcon" className="h-5" />
          <input
            type="text"
            className=" focus:outline-none placeholder-black-700"
            placeholder="Search Creator/Product"
          />
        </div>
      </div>

      {deviceType === "desktop" ? (
        <div className="flex justify-center items-center gap-10 text-web-h3 font-bold text-white">
          <h1>Fav Creators</h1>
          <h1>Merchandise</h1>
          <h1>Brand</h1>
          <h1>Digital</h1>
          <Dropdown />
        </div>
      ) : (
        <div className="flex items-center overflow-hidden">
          <button
            onClick={toggleDrawer}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
          {isDrawerOpen && (
            <div
              className={`fixed top-0 right-0 h-[100vh] w-3/4 bg-black shadow-lg transition-transform delay-[1s] duration-300 ease-in-out ${
                isDrawerOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <button
                className="text-white p-4 focus:outline-none"
                onClick={toggleDrawer}
              >
                ✖
              </button>
              <ul className="mt-1 text-white">
                <li
                  className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                  onClick={() => console.log("Fav Creators")}
                >
                  Fav Creators
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                  onClick={() => console.log("Merchandise")}
                >
                  Merchandise
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                  onClick={() => console.log("Brand")}
                >
                  Brand
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                  onClick={() => console.log("Digital")}
                >
                  Digital
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                  onClick={() => console.log("Profile")}
                >
                  Profile
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                  onClick={() => console.log("Dashboard")}
                >
                  Dashboard
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                  onClick={() => console.log("Milestone")}
                >
                  Milestone
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="flex cursor-pointer bg-white items-center justify-between pl-3 pr-5 gap-3 w-[100px] h-10 rounded-2xl shadow-md text-white"
        onClick={toggleDropdown}
      >
        <Image
          src={profileIcon}
          alt="profileIcon"
          className="object-cover h-6 w-6"
        />
        <Image src={downArrow} alt="profileIcon" className=" object-cover" />
      </div>
      <div
        className={`absolute right-0 mt-2 w-[150px] bg-black rounded-lg shadow-lg transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "opacity-100 scale-100 visible"
            : "opacity-0 scale-95 invisible"
        }`}
      >
        <ul className="py-1 text-white text-web-body1">
          <li
            className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
            onClick={() => handleOptionClick("Profile")}
          >
            Profile
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
            onClick={() => handleOptionClick("Dashboard")}
          >
            Dashboard
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
            onClick={() => handleOptionClick("Milestone")}
          >
            Milestone
          </li>
        </ul>
      </div>
    </div>
  );
};
