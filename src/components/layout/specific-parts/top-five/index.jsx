import { Card, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Chart } from "react-google-charts";
import More from "../../../../assets/icons/more.svg";

export const TopFive = () => {

const data = [
  ["Task", "Hours per Day"],
  ["Sport Car", 17434],
  ["Sport Car", 9478],
  ["Coupe", 18197],
  ["Hatchback", 12510],
  ["MPV", 14406],
];

const options = {
  title: "My Daily Activities",
  pieSliceText: "label",
  is3D: true,
};
  return (
    <Card maxW={"524px"} padding={"24px"}>
      <Flex justifyContent={'space-between'}>
        <Text fontWeight={"700"} fontSize={"20px"} textColor={"#1A202C"}>
          Top 5 Car Rental{" "}
        </Text>
        <Image src={More} alt="more" />
      </Flex>
      <Flex>

        <Chart
         chartType="PieChart"
         data={data}
         options={options}
         width={"100%"}
         height={"400px"} />
      </Flex>
    </Card>
  );
};
