import React from "react";
import { NavLink } from "react-router-dom";
import { Card, Flex, Text, Box, Button, Checkbox } from "@chakra-ui/react";
import { Section } from "../../../../components";
import Safety from "../../../../assets/icons/safety.svg";

export const Confirmation = () => {
  return (
    <Section className={"mb-8"}>
      <Card className="p-6" maxW={"852px"}>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          marginBottom={"32px"}
        >
          <Box>
            <h2 className="text-[20px] font-bold mb-1 text-[#1A202C]">
              Confirmation
            </h2>
            <p className="text-[14px] font-[500] mb-1 text-[#90A3BF]">
              We are getting to the end. Just few clicks and your rental is
              ready!
            </p>
          </Box>
          <Text className="text-[14px] font-[500] text-[#90A3BF]">
            Step 3 of 4
          </Text>
        </Flex>

        <Card
          bgColor={"#F6F7F9"}
          paddingX={"32px"}
          paddingY={"16px"}
          marginBottom={"24px"}
        >
          <Flex gap={"20px"}>
            <Checkbox defaultChecked></Checkbox>
            <p className="text-[16px] font-[600] text-[#1F2544]">
              I agree with sending an Marketing and newsletter emails. No spam,
              promissed!
            </p>
          </Flex>
        </Card>
        <Card
          bgColor={"#F6F7F9"}
          paddingX={"32px"}
          paddingY={"16px"}
          marginBottom={"32px"}
        >
          <Flex gap={"20px"}>
            <Checkbox defaultChecked></Checkbox>
            <p className="text-[16px] font-[600] text-[#1F2544]">
              I agree with our terms and conditions and privacy policy.
            </p>
          </Flex>
        </Card>

        <Button onClick={()=>alert('Please, fill the form.')} colorScheme="blue" width={"100px"} marginBottom={"32px"}>
          <NavLink to={"/payment"}>Rent Now</NavLink>
        </Button>

        <Box>
          <img width={"32px"} src={Safety} alt="safety" />
        </Box>

        <Text className="mt-4 text-[16px] font-[600] text-[#1A202C] mb-2">
          All your data are safe
        </Text>

        <Text className="text-[14px] font-[500] text-[#90A3BF]">
          We are using the most advanced security to provide you the best
          experience ever.
        </Text>
      </Card>
    </Section>
  );
};
