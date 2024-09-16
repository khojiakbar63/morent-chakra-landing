import React from "react";
import {
  Box,
  Flex,
  Input,
  Text,
  Card,
  InputGroup,
  InputRightElement,
  Button,
  Img
} from "@chakra-ui/react";
import { Section } from "../../section";
import Down from '../../../../assets/icons/arrow-down.svg'
import Up from '../../../../assets/icons/arrow-up.svg'
import BlueCircle from '../../../../assets/icons/pick-up-circle.svg'

export const RentalInfo = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Section >
      <Card className="p-6" maxW={"852px"}>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          marginBottom={"32px"}
        >
          <Box>
            <h2 className="text-[20px] font-bold mb-1 text-[#1A202C]">
              Rental Info
            </h2>
            <p className="text-[14px] font-[500] mb-1 text-[#90A3BF]">
              Please select your rental date
            </p>
          </Box>
          <Text className="text-[14px] font-[500] text-[#90A3BF]">
            Step 2 of 4
          </Text>
        </Flex>

        <Flex alignItems={'center'} marginBottom={'24px'}>
          <h3 className="text-[16px] font-[600] text-[#1A202C] ">Pick - Up</h3>
          <img className="ml-2 animate-pulse" src={BlueCircle} alt="circle" />
        </Flex>

        <Flex flexWrap={"wrap"} gap={"32px"}>
          <Box>
            <Text className="text-[#1A202C] text-4 font-[600] mb-4">Locations</Text>
            <InputGroup size="md"  w={'386px'}>
              <Input

               bgColor={"#F6F7F9"}
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Select your city"
              />
              <InputRightElement width="4.5rem">
                <Button variant={'unstyled'} h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? <img className="w-[14px]" src={Up} alt="down" /> : <img src={Down} alt="down" />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
          <Box>
            <Text className="text-[#1A202C] text-4 font-[600] mb-4">Date</Text>
            <InputGroup size="md"  w={'386px'}>
              <Input
             
               bgColor={"#F6F7F9"}
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Select your date"
              />
              <InputRightElement width="4.5rem">
                <Button variant={'unstyled'} h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? <img className="w-[14px]" src={Up} alt="down" /> : <img src={Down} alt="down" />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
        </Flex>
        <Box className="mt-6">
            <Text className="text-[#1A202C] text-4 font-[600] mb-4">Time</Text>
            <InputGroup size="md" w={'386px'}>
              <Input
              
               bgColor={"#F6F7F9"}
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Select your time"
              />
              <InputRightElement width="4.5rem">
                <Button variant={'unstyled'} h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? <img className="w-[14px]" src={Up} alt="down" /> : <img src={Down} alt="down" />}
                </Button>
              </InputRightElement>
            </InputGroup>
        </Box>

        <Flex alignItems={'center'} marginBottom={'24px'} marginTop={'32px'}>
          <h3 className="text-[16px] font-[600] text-[#1A202C] ">Drop - Off</h3>
          <img className="ml-2 animate-pulse" src={BlueCircle} alt="circle" />
        </Flex>

        <Flex flexWrap={"wrap"} gap={"32px"}>
          <Box>
            <Text className="text-[#1A202C] text-4 font-[600] mb-4">Locations</Text>
            <InputGroup size="md"  w={'386px'}>
              <Input

               bgColor={"#F6F7F9"}
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Select your city"
              />
              <InputRightElement width="4.5rem">
                <Button variant={'unstyled'} h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? <img className="w-[14px]" src={Up} alt="down" /> : <img src={Down} alt="down" />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
          <Box>
            <Text className="text-[#1A202C] text-4 font-[600] mb-4">Date</Text>
            <InputGroup size="md"  w={'386px'}>
              <Input
             
               bgColor={"#F6F7F9"}
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Select your date"
              />
              <InputRightElement width="4.5rem">
                <Button variant={'unstyled'} h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? <img className="w-[14px]" src={Up} alt="down" /> : <img src={Down} alt="down" />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
        </Flex>
        <Box className="mt-6">
            <Text className="text-[#1A202C] text-4 font-[600] mb-4">Time</Text>
            <InputGroup size="md" w={'386px'}>
              <Input
              
               bgColor={"#F6F7F9"}
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Select your time"
              />
              <InputRightElement width="4.5rem">
                <Button variant={'unstyled'} h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? <img className="w-[14px]" src={Up} alt="down" /> : <img src={Down} alt="down" />}
                </Button>
              </InputRightElement>
            </InputGroup>
        </Box>
      </Card>
    </Section>
  );
};
