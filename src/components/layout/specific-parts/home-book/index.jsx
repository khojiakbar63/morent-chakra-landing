import React from "react";
import {
  Button,
  Flex,
  Container,
  Card,
  CardHeader,
  Heading,
  CardBody,
  HStack,
  Box,
  StackDivider,
  Text,
  Select,
} from "@chakra-ui/react";
import { LuArrowUpDown } from "react-icons/lu";
import { Section } from "../../../index";
import PickUpCircle from "../../../../assets/icons/pick-up-circle.svg";
import "./style.scss";

export const HomeBook = () => {
  return (
    <Flex marginY={'32px'} className="flex-col md:flex-row items-center justify-between gap-0 md:gap-[44px]">
      <Card className='w-[90%] md:w-[49%]'>
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
      </Card>

      <Button
        bgColor={"#3563E9"}
        _hover={{ bgColor: "#2153ea" }}
        _active={{ bgColor: "#2153ead5" }}
        color="#fff"
        py="26px"
      >
        <LuArrowUpDown fontSize={24} />
      </Button>

      <Card className='w-[90%] md:w-[49%]'>
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
      </Card>
    </Flex>
  );
};
