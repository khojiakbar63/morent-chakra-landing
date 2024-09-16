import React from "react";
import { Box, Flex, Input, Text, Card } from "@chakra-ui/react";
import { Section } from "../../section";

export const BillingInfo = () => {
  return (
    <Section className={'py-8'}>
    <Card className="p-6" maxW={'852px'}>
      <Flex justifyContent={"space-between"} alignItems={'center'} marginBottom={'32px'}>
        <Box>
          <h2 className="text-[20px] font-bold mb-1 text-[#1A202C]">Billing Info</h2>
          <p className="text-[14px] font-[500] mb-1 text-[#90A3BF]">Please enter your billing info</p>
        </Box>
        <Text className="text-[14px] font-[500] text-[#90A3BF]">Step 1 of 4</Text>
      </Flex>

      <Flex flexWrap={'wrap'} gap={'32px'}>
        <Box>
          <Text className="text-[#1A202C] text-4 font-[600]">Your name</Text>
          <Input bgColor={'#F6F7F9'} w={'386px'} placeholder="Name" className="mt-2" />
        </Box>
        <Box>
          <Text className="text-[#1A202C] text-4 font-[600]">Phone Number</Text>
          <Input bgColor={'#F6F7F9'} w={'386px'} placeholder="Phone Number" className="mt-2" />
        </Box>
        <Box>
          <Text className="text-[#1A202C] text-4 font-[600]">Address</Text>
          <Input bgColor={'#F6F7F9'} w={'386px'} placeholder="Address" className="mt-2" />
        </Box>
        <Box>
          <Text className="text-[#1A202C] text-4 font-[600]">Town / City</Text>
          <Input bgColor={'#F6F7F9'} w={'386px'} placeholder="Town or City" className="mt-2" />
        </Box>
      </Flex>
    </Card>
    </Section>
  );
};
