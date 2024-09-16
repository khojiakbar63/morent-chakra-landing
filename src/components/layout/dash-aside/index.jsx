import React from "react";
import { HStack, Flex, Box, Text, Image, Card } from "@chakra-ui/react";
import { DASH_ASIDE } from "../../../mocks/dash-aside";
import { NavLink } from "react-router-dom";
import Sun from "../../../assets/icons/dash-sun.svg";
import Moon from "../../../assets/icons/dash-moon.svg";

import "./style.scss";

export const DashAside = () => {
  return (
    <aside className="p-8 h-[100vh] min-w-[300px] max-w-[460px] bg-white overflow-y-auto">
      <div>
        <h4 className="mb-[28px] text-[12px] font-[600] text-[#90A3BF]">
          M A I N M E N U
        </h4>
        <ul>
          {DASH_ASIDE.map((item, i) => {
            return (
              <NavLink to={item.link}>
                {i === 5 ? (
                  <Text
                    marginTop={"60px"}
                    marginBottom={"28px"}
                    fontSize={"12px"}
                    fontWeight={"500"}
                    color={"#94A7CB66"}
                  >
                    P R E F E R E N C E S
                  </Text>
                ) : (
                  <Flex
                    marginTop={i === 9 ? "147px" : ""}
                    key={i}
                    gap={"12px"}
                    padding={"16px"}
                    bgColor={i === 0 ? "#3563E9" : "#F6F7F9"}
                    marginBottom={"8px"}
                    borderRadius={"8px"}
                    alignItems={"center"}
                    _hover={{
                      bgColor: i === 0 ? "" : "#2253e710",
                      cursor: "pointer",
                    }}
                  >
                    <Box>
                      <Image src={item.icon} alt={item.title} />
                    </Box>
                    <Box>
                      <Text
                        fontWeight={"500"}
                        fontSize={"16px"}
                        color={i === 0 ? "#FFFFFF" : "#90A3BF"}
                      >
                        {item.title}
                      </Text>
                    </Box>
                   
                  </Flex>
                )}
              </NavLink>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
