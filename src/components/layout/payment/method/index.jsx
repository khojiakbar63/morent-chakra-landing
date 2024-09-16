import React from "react";
import { Box, Flex, Input, Text, Card, Radio } from "@chakra-ui/react";
import { Section } from "../../section";
import BlueCircle from "../../../../assets/icons/pick-up-circle.svg";
import Visa from "../../../../assets/icons/Visa.svg";
import Paypal from "../../../../assets/icons/PayPal.svg";
import Bitcoin from "../../../../assets/icons/Bitcoin.svg";

export const Method = () => {

  return (
    <Section className={"py-8"}>
      <Card className="p-6" maxW={"852px"}>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          marginBottom={"32px"}
        >
          <Box>
            <h2 className="text-[20px] font-bold mb-1 text-[#1A202C]">
              Payment Method
            </h2>
            <p className="text-[14px] font-[500] mb-1 text-[#90A3BF]">
              Please enter your payment method
            </p>
          </Box>
          <Text className="text-[14px] font-[500] text-[#90A3BF]">
            Step 3 of 4
          </Text>
        </Flex>
        <Card padding={"24px"} bgColor={"#F6F7F9"} marginBottom="24px">
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            marginBottom={"32px"}
          >
            <Box className="flex items-center gap-2">
              <img
                className="ml-2 animate-pulse"
                src={BlueCircle}
                alt="circle"
              />
              <h3 className="text-[16px] font-[600] text-[#1A202C] ">
                Credit Card
              </h3>
            </Box>
            <img src={Visa} alt="visa" />
          </Flex>

          <Flex flexWrap={"wrap"} gap={"32px"}>
            <Box>
              <Text className="text-[#1A202C] text-4 font-[600]">
                Card Number
              </Text>
              <Input
                bgColor={"#fff"}
                w={"362px"}
                placeholder="Card number"
                className="mt-2"
              />
            </Box>
            <Box>
              <Text className="text-[#1A202C] text-4 font-[600]">
                Expration Date
              </Text>
              <Input
                bgColor={"#fff"}
                w={"362px"}
                placeholder="DD / MM / YY"
                className="mt-2"
              />
            </Box>
            <Box>
              <Text className="text-[#1A202C] text-4 font-[600]">
                Card Holder
              </Text>
              <Input
                bgColor={"#fff"}
                w={"362px"}
                placeholder="Card holder"
                className="mt-2"
              />
            </Box>
            <Box>
              <Text className="text-[#1A202C] text-4 font-[600]">CVC</Text>
              <Input
                bgColor={"#fff"}
                w={"362px"}
                placeholder="CVC"
                className="mt-2"
              />
            </Box>
          </Flex>
        </Card>

        <Card
          bgColor={"#F6F7F9"}
          paddingX={"32px"}
          paddingY={"16px"}
          marginBottom={"24px"}
        >
          <Flex justifyContent={"space-between"}>
            <Radio value="1">PayPal</Radio>
            <img width={"100px"} src={Paypal} alt="Paypal" />
          </Flex>
        </Card>
        <Card
          bgColor={"#F6F7F9"}
          paddingX={"32px"}
          paddingY={"16px"}
          marginBottom={"24px"}
        >
          <Flex justifyContent={"space-between"}>
            <Radio value="1">Bitcoin</Radio>
            <img width={"100px"} src={Bitcoin} alt="Bitcoin" />
          </Flex>
        </Card>


      </Card>
    </Section>
  );
};
