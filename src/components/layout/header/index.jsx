import React from "react";
import "flowbite";
import { HStack, Button, Container } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import UserImg from "../../../assets/images/my-img.png";
import Heart from "../../../assets/icons/header-heart.svg";
import Bell from "../../../assets/icons/header-bell.svg";
import Settings from "../../../assets/icons/header-setting.svg";
import Notif from "../../../assets/icons/header-notif.svg";

import { ImEqualizer } from "react-icons/im";
import "./style.scss";

export const Header = () => {
  return (
    <header className="h-[124px] shadow-sm">

      <nav className="h-[124px] bg-white border-gray-200 dark:bg-gray-900">
      <Container maxW={'1410px'}>
        <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-10">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl text-[#3563E9] font-semibold whitespace-nowrap dark:text-white">
              MORENT
            </span>
          </NavLink>
          <div className="flex gap-5 items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="hidden  lg:flex gap-[20px]">
              <div className=" p-[8px] rounded-full border-[1px] border-[#C3D4E966]">
                <img
                  className="duration-150 hover:scale-110 active:scale-100"
                  src={Heart}
                  alt="likes"
                />
              </div>
              <div className="relative p-[8px] rounded-full border-[1px] border-[#C3D4E966]">
                <img
                  className="duration-150 hover:scale-110 active:scale-100 w-[24px] h-[24px]"
                  src={Bell}
                  alt="likes"
                />
                <img
                  className="absolute top-0 right-0"
                  src={Notif}
                  alt="likes"
                />
              </div>
              <div className="p-[8px] rounded-full border-[1px] border-[#C3D4E966]">
                <img
                  className="duration-150 hover:scale-110 active:scale-100"
                  src={Settings}
                  alt="likes"
                />
              </div>
            </div>

            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-[44px] h-[44px] rounded-full"
                src={UserImg}
                alt="user photo"
              />
            </button>

            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Khojiakbar Abdulakhatov
                </span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  hojiakbar7796@mail.ru
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <NavLink
                    to="/dashboard"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>

            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <div className="relative hidden lg:block w-[492px]">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
                <div className="absolute inset-y-0 start-0 flex items-center ps-[450px] ">
                  <NavLink to="/category">
                    <Button colorScheme="transparent" variant='ghost'>
                      <ImEqualizer className="cursor-pointer" />
                    </Button>
                  </NavLink>
                </div>
              </div>

              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            <div className="2xl:mr-96 none"></div>
          </div>
        </div>
      </Container>
      </nav>
    </header>
  );
};
