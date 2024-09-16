import React from "react";
import {
  Card,
  Flex,
  Text,
  Box,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { Section } from "../../../../components";
import BgBlueCar from "../../../../assets/icons/View-1.svg";
import Stars from "../../../../assets/icons/Review-Star.svg";

export const RentalSummary = () => {
  return (
    <Section className={"py-8 max-w-[492px]"}>
      <Card className="p-6" maxW={"852px"}>
        <Box>
          <h2 className="text-[20px] font-bold mb-1 text-[#1A202C]">
            Rental Summary
          </h2>
          <p className="text-[14px] font-[500] mb-1 text-[#90A3BF]">
            Prices may change depending on the length of the rental and the
            price of your rental car.
          </p>
        </Box>
        <Flex className="mt-6" gap={4} marginBottom={"32px"}>
          <img src={BgBlueCar} alt="car" />
          <Box>
            <Heading className="text-[32px] font-bold mb-1 text-[#1A202C]">
              Nissan GT - R
            </Heading>
            <Flex gap={"8px"}>
              <img src={Stars} alt="" />
              <Text>440+ Reviewer</Text>
            </Flex>
          </Box>
        </Flex>
        <Divider marginBottom={"32px"} color={"#C3D4E996"} />
        <Flex justifyContent={"space-between"} marginBottom={"24px"}>
          <p className="text-[16px] font-[500] text-[#90A3BF]">Subtotal</p>
          <p className="text-[16px] font-[600] text-[#1A202C]">$80.00</p>
        </Flex>
        <Flex justifyContent={"space-between"} marginBottom={"32px"}>
          <p className="text-[16px] font-[500] text-[#90A3BF]">Tax</p>
          <p className="text-[16px] font-[600] text-[#1A202C]">$0</p>
        </Flex>

        <Card
          bgColor={"#F6F7F9"}
          paddingX={"32px"}
          paddingY={"16px"}
          marginBottom={"32px"}
        >
          <Flex gap={"20px"} justifyContent={"space-between"}>
            <p className="text-[14px] font-[500] mb-1 text-[#90A3BF]">
              Apply promo code
            </p>
            <p className="text-[16px] font-[600] text-[#1A202C]">Apply now </p>
          </Flex>
        </Card>

        <Flex justifyContent={"space-between"}>
          <Box>
            <h2 className="text-[20px] font-bold mb-1 text-[#1A202C]">
              Total Rental Price
            </h2>
            <p className="text-[14px] font-[500] mb-1 text-[#90A3BF]">
              Overall price and includes rental discount
            </p>
          </Box>
          <Box>
            <Heading fontSize={"32px"} fontWeight={"700"} color={"#1A202C"}>
              $80.00
            </Heading>
          </Box>
        </Flex>
      </Card>
    </Section>
  );
};
