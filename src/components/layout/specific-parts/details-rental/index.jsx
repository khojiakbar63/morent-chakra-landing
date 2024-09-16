import React from "react";
import {
  Flex,
  Box,
  Card,
  Heading,
  Text,
  AspectRatio,
  Image,
  CardHeader,
  CardBody,
  HStack,
  StackDivider,
  Select,
  Divider,
} from "@chakra-ui/react";
import BlueCar from "../../../../assets/icons/View-1.svg";
import PickUpCircle from "../../../../assets/icons/pick-up-circle.svg";

export const DetailsRental = () => {
  return (
    <Card padding={"24px"} maxW={"524px"} marginRight={"32px"} marginBottom={'32px'}>
      <Text className="text-[#1A202C] text-[20px] font-bold mb-6">
        Details Rental
      </Text>
      <AspectRatio ratio={16 / 9} marginBottom={"26px"}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng" />
      </AspectRatio>

      <Flex justifyContent={"space-between"} marginBottom={"32px"}>
        <Flex gap={"16px"}>
          <Image src={BlueCar} />
          <Box>
            <Text
              marginBottom={"8px"}
              fontWeight={"700"}
              fontSize={"24px"}
              textColor={"#1A202C"}
            >
              Nissan GT - R
            </Text>
            <Text fontWeight={"500"} fontSize={"14px"} textColor={"#3D5278"}>
              Sport Car
            </Text>
          </Box>
        </Flex>
        <Text textColor={"#3D5278"} fontSize={"14px"} fontWeight={"500"}>
          #9761
        </Text>
      </Flex>

      <Box w={"100%"}>
        <CardHeader className="card-header">
          <Flex className="gap-2">
            <img
              src={PickUpCircle}
              alt="blue circle"
              className="animate-pulse"
            />
            <Heading fontSize="16px" fontWeight={600} padding={0}>
              Pick - Up
            </Heading>
          </Flex>
        </CardHeader>

        <CardBody className="card-body">
          <HStack
            className="flex items-center justify-between"
            divider={<StackDivider />}
            spacing="4"
          >
            <Box>
              <Heading size="xs" textTransform="uppercase" marginBottom="8px">
                Locations
              </Heading>
              <Select variant="unstyled" placeholder="Select your city">
                <option value="option1">Tashkent</option>
                <option value="option2">Samarkand</option>
                <option value="option3">Bukara</option>
              </Select>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase" marginBottom="8px">
                Date
              </Heading>
              <Select variant="unstyled" placeholder="Select your date">
                <option value="option1">Aprel</option>
                <option value="option2">May</option>
                <option value="option3">June</option>
              </Select>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase" marginBottom="8px">
                Time
              </Heading>
              <Select variant="unstyled" placeholder="Select your date">
                <option value="option1">10:00</option>
                <option value="option2">11:00</option>
                <option value="option3">12:00</option>
              </Select>
            </Box>
          </HStack>
        </CardBody>
      </Box>

      <Box w={"100%"}>
        <CardHeader className="card-header">
          <Flex className="gap-2">
            <img
              src={PickUpCircle}
              alt="blue circle"
              className="animate-pulse"
            />
            <Heading fontSize="16px" fontWeight={600} padding={0}>
              Drop - Off
            </Heading>
          </Flex>
        </CardHeader>

        <CardBody className="card-body">
          <HStack
            className="flex items-center justify-between"
            divider={<StackDivider />}
            spacing="4"
          >
            <Box>
              <Heading size="xs" textTransform="uppercase" marginBottom="8px">
                Locations
              </Heading>
              <Select variant="unstyled" placeholder="Select your city">
                <option value="option1">Tashkent</option>
                <option value="option2">Samarkand</option>
                <option value="option3">Bukara</option>
              </Select>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase" marginBottom="8px">
                Date
              </Heading>
              <Select variant="unstyled" placeholder="Select your date">
                <option value="option1">Aprel</option>
                <option value="option2">May</option>
                <option value="option3">June</option>
              </Select>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase" marginBottom="8px">
                Time
              </Heading>
              <Select variant="unstyled" placeholder="Select your date">
                <option value="option1">10:00</option>
                <option value="option2">11:00</option>
                <option value="option3">12:00</option>
              </Select>
            </Box>
          </HStack>
        </CardBody>
      </Box>

      <Divider color={"#C3D4E999"} marginBottom={'36px'} />

      <Flex justifyContent={'space-between'}>
        <Box>
          <Text fontWeight={"700"} fontSize={"20px"} textColor={"#1A202C"}>
            Total Rental Price
          </Text>
          <Text fontWeight={"500"} fontSize={"14px"} textColor={"#90A3BF"}>
            Overall price and includes rental discount
          </Text>
        </Box>
        <Text fontWeight={"700"} fontSize={"32px"} textColor={"#1A202C"}>
          $80.00
        </Text>
      </Flex>
    </Card>
  );
};
