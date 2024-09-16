import React from "react";
import {
  Container,
  HStack,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Button,
  Box,
  Image,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { Section } from "../../../index";
import HeroWhiteCar from "../../../../assets/icons/hero-white-car.svg";
import HeroGreyCar from "../../../../assets/icons/hero-grey-car.svg";

export const HomeHero = () => {
  return (
    <>
      <HStack>
        <Flex className="flex flex-col md:flex-row gap-[14px] space-between items-center mt-8 w-full">
          <Card className='w-[90%] md:w-[49%]' background="#54A6FF">
            <CardHeader>
              <Heading
                size="md"
                className="text-white"
                fontSize={32}
                fontWeight={600}
                width={272}
              >
                {" "}
                The Best Platform for Car Rental
              </Heading>
            </CardHeader>
            <CardBody>
              <Text
                className="text-white"
                fontSize={16}
                fontWeight={500}
                width={284}
                letterSpacing="-0.2"
                marginBottom="20px"
              >
                Ease of doing a car rental safely and reliably. Of course at a
                low price.
              </Text>
              <Button
                backgroundColor={"#3563E9"}
                _hover={{ backgroundColor: "#2152e6" }}
                _active={{ backgroundColor: "#fff", color: "#3563E9" }}
                color={"white"}
              >
                Rental Car
              </Button>
            </CardBody>
            <CardFooter maxHeight={100}>
              <Box boxSize="sm" className="mx-auto" mt={"-40px"}>
                <Image maxH="116px" src={HeroWhiteCar} alt="HeroWhiteCar" />
              </Box>
            </CardFooter>
          </Card>

          <Spacer />
          <Card className='w-[90%] md:w-[49%]' background="#3563E9">
            <CardHeader>
              <Heading
                size="md"
                className="text-white"
                fontSize={32}
                fontWeight={600}
                width={272}
              >
                {" "}
                Easy way to rent a car at a low price
              </Heading>
            </CardHeader>
            <CardBody>
              <Text
                className="text-white"
                fontSize={16}
                fontWeight={500}
                width={284}
                letterSpacing="-0.2"
                marginBottom="20px"
              >
                Providing cheap car rental services and safe and comfortable
                facilities.
              </Text>
              <Button
                backgroundColor={"#54A6FF"}
                _hover={{ backgroundColor: "#41A4f1" }}
                _active={{ backgroundColor: "#fff", color: "#3563E9" }}
                color={"white"}
              >
                Rental Car
              </Button>
            </CardBody>
            <CardFooter maxHeight={100}>
              <Box boxSize="sm" className="mx-auto" mt={"-40px"}>
                <Image maxH="116px" src={HeroGreyCar} alt="HeroWhiteCar" />
              </Box>
            </CardFooter>
          </Card>
        </Flex>
      </HStack>
    </>
  );
};
