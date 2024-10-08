import { ALL_POP_CARS, ALL_REC_CARS } from "../../../../../mocks/all-cars";
import { Button, Flex } from "@chakra-ui/react";
import Like from "../../../../../assets/icons/Like.svg";
import Petrol from "../../../../../assets/icons/gas-station.svg";
import Users from "../../../../../assets/icons/profile-2user.svg";
import Manual from "../../../../../assets/icons/manual.svg";
import { NavLink } from "react-router-dom";

import React from "react";

const MIXED_CARS = [...ALL_POP_CARS, ...ALL_REC_CARS];

export const MixedCars = () => {
  return (
    <>
      <Flex flexWrap={"wrap"} justifyContent={'center'} gap={30} marginBottom={30}>
        {MIXED_CARS.map((car) => {
          return (
            <div
              key={Math.floor(Math.random()*1000)}
              className="p-6 w-full mb-4 max-w-[317px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <Flex className="justify-between place-items-start">
                <div>
                  <a href="#">
                    <h5 className="text-[20px] font-[700] mb-1 tracking-tight text-[#1A202C] dark:text-white">
                      {car.name}
                    </h5>
                  </a>
                  <p className="font-[700] text-[14px] text-[#90A3BF]">
                    {car.category}
                  </p>
                </div>
                <img src={Like} alt="like_icon" />
              </Flex>
              <NavLink to="/detail">
                <img
                  className="p-8 rounded-t-lg my-[64px] mx-auto"
                  src={car.img}
                  alt={car.name}
                />
              </NavLink>
              <div className="pb-5">
                <Flex className="flex items-center mt-2.5 mb-5">
                  <ul className="flex flex-wrap gap-[16px] items-center text-[#90A3BF]">
                    <li className="flex gap-[6px] items-center ">
                      <img src={Petrol} alt="gas-station" />
                      <p className="font-[500] text-[16px]">{car.tankCapacity}</p>
                    </li>
                    <li className="flex gap-[6px] items-center">
                      <img src={Manual} alt="manual" />
                      <p className="font-[500] text-[16px]">{car.type}</p>
                    </li>

                    <li className="flex gap-[6px] items-center">
                      <img src={Users} alt="manual" />
                      <p className="font-[500] text-[16px]">{car.passangerCapacity} People</p>
                    </li>
                  </ul>
                </Flex>

                <div className="flex items-center justify-between">
                  <Flex className="flex-col">
                    <p className="text-[20px] font-[700] text-[#1A202C] dark:text-white">{car.price}/<span className="text-[14px] font-[700] text-[#90A3BF] dark:text-white">day</span></p>
                    <p className="text-[14px] font-[700] text-[#90A3BF] dark:text-white line-through">{car.realPrice ? car.realPrice : ""}</p>
                  </Flex>

                  <NavLink
                    to="/payment"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Rent Now
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </Flex>

      <Flex className="flex-row justify-between items-center px-[20px] py-[64px] ">
            <div></div>
            <Button colorScheme='blue'>Show more car</Button>
            <p className="font-[500] text-[14px] text-[#90A3BF]">120 Cars</p>
          </Flex>
    </>
  );
};
