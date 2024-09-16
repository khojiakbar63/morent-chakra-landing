import { Card, Text, Image, Flex, Box, Divider } from "@chakra-ui/react";
import React from "react";
import Nissan from "../../../../assets/icons/nissan-2.svg";
import Koegnigsegg from "../../../../assets/icons/koengigsegg.svg";
import RollsRoyce from "../../../../assets/icons/rolls-royce.svg";
import CRV from "../../../../assets/icons/cr-v.svg";
import { ALL_TRANSACTION_CARS } from "../../../../mocks/all-cars";

export const Transaction = () => {
  return (
    <Card marginTop={"32px"} padding={"24px"} maxW={'524px'}>
      <Flex justifyContent={"space-between"} marginBottom={"32px"}>
        <Text fontWeight={"700"} fontSize={"20px"} textColor={"#1A202C"}>
          Recent Transaction{" "}
        </Text>
        <Text fontWeight={"500"} fontSize={"12px"} textColor={"#3563E9"}>
          View All
        </Text>
      </Flex>
      <Box>
        {ALL_TRANSACTION_CARS.map((item, index) => {
          // console.log(item);
          return (
            <Box>
              <Flex justifyContent={"space-between"} marginBottom={"27px"}>
                <Flex gap={"16px"}>
                  <Image maxW={"114px"} src={item.img} />
                  <Box>
                    <Text
                      marginBottom={"8px"}
                      fontSize={"16px"}
                      fontWeight={"700"}
                      textColor={"#1A202C"}
                    >
                      {item.name}
                    </Text>
                    <Text
                      fontSize={"12px"}
                      fontWeight={"500"}
                      textColor={"#90A3BF"}
                    >
                      {item.category}
                    </Text>
                  </Box>
                </Flex>
                <Box>
                  <Text
                    marginBottom={"8px"}
                    fontSize={"12px"}
                    fontWeight={"500"}
                    textColor={"#90A3BF"}
                  >
                    20 July
                  </Text>
                  <Text
                    fontSize={"16px"}
                    fontWeight={"700"}
                    textColor={"#1A202C"}
                  >
                    ${item.price}
                  </Text>
                </Box>
              </Flex>
              <Divider marginBottom={"20px"} />
            </Box>
          );
        })}
      </Box>
    </Card>
  );
};
