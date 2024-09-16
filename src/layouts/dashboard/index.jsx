import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { Outlet } from "react-router";
import { Header, Footer, Section } from "../../components/index";
import { DashAside } from "../../components/index";
import { DetailsRental } from "../../components/index";
import { TopFive } from "../../components/index";
import { Transaction } from "../../components/index";


export const Dashboard = () => {
  return (
    <div>
      <Header />
      <Section>
        <Flex >
          <DashAside />
          <div className="flex flex-col xl:flex-row m-[32px]" >
              <DetailsRental/>
              <Box >
                <TopFive />
                <Transaction />
              </Box>
          </div>
          {/* <Outlet /> */}
        </Flex>
      </Section>
    </div>
  );
};
