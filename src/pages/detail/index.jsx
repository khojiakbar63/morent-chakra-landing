import React from "react";
import { PopCarsDetail } from "../../components/layout/specific-parts/all-cars/pop-cars-detail";
import { RecCarsDetail } from "../../components/layout/specific-parts/all-cars/rec-cars-detail";
import { Reviews } from "../../components/layout/specific-parts/reviews";
import {
  Container,
  Flex,
  Box,
  Grid,
  GridItem,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  Image,
  CardFooter,
 
} from "@chakra-ui/react";
import { Aside, Section } from "../../components";
import WhiteCar from "../../assets/icons/all-new-rush.svg";
import View_1 from "../../assets/icons/View-1.svg";
import View_2 from "../../assets/icons/View-2.svg";
import View_3 from "../../assets/icons/View-3.svg";
import Stars from "../../assets/icons/Review-Star.svg";
import Liked from "../../assets/icons/liked.svg";

import "./style.scss";


export const Detail = () => {
  return (
    <>
      <Flex>
        <Aside />

        <Section className="px-6">
          <Container maxW="1180px">
            <Flex
              className="flex-col lg:flex-row justify-center gap-[300px] lg:gap-8"

              marginTop={'24px'}
              marginBottom={"22px"}
            >
              <Box className="w-[90%] lg:w-[49%]">
                <Grid
                  templateAreas={`"header header header"
                  "footer1 footer2 footer3"`}
                  gridTemplateRows={"360px 1fr 10px"}
                  gridTemplateColumns={"200px 1fr 148px"}
                  h="200px"
                  gap="1"
                  color="blackAlpha.700"
                  fontWeight="bold"
                >
                  <GridItem
                    borderRadius={"10px"}
                    bgColor={"#3563E9"}
                    pl="2"
                    area={"header"}
                  >
                    <Card backgroundColor={"transparent"} shadow={"none"}>
                      <CardHeader>
                        <Heading
                          size="md"
                          className="text-white"
                          fontSize={32}
                          fontWeight={600}
                          width={372}
                        >
                          {" "}
                          Sports car with the best design and acceleration
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
                          Safety and comfort while driving a futuristic and
                          elegant sports car
                        </Text>
                      </CardBody>
                      <CardFooter maxHeight={100}>
                        <Box boxSize="sm" className="mx-auto" mt={"-40px"}>
                          <Image h="146px" src={WhiteCar} alt="HeroWhiteCar" />
                        </Box>
                      </CardFooter>
                    </Card>
                  </GridItem>
                  <GridItem area={"footer1"}>
                    <img width={148} height={124} src={View_1} alt="view1" />
                  </GridItem>
                  <GridItem area={"footer2"}>
                    <img width={144} height={124} src={View_2} alt="view2" />
                  </GridItem>
                  <GridItem area={"footer3"}>
                    <img width={144} height={134} src={View_3} alt="view3" />
                  </GridItem>
                </Grid>
              </Box>

              <Box minHeight={'480px'}
                className="w-[90%] lg:w-[49%]"
                bgColor={"#fff"}
                borderRadius="10px"
                padding={"24px"}
              >
                <Flex justifyContent={"space-between"}>
                  <Box className="">
                    <h2 className="text-[#1A202C] font-[700] text-[32px]">
                      Nissan GT - R
                    </h2>
                    <Flex gap={2}>
                      <img src={Stars} alt="stars" />
                      <p className="text-[#596780] font-[500] text-[14px]">
                        440+ Reviewer
                      </p>
                    </Flex>
                  </Box>
                  <img src={Liked} alt="" />
                </Flex>
                <Text className="mt-[32px] text-[#596780] font-[400] text-[20px]">
                  NISMO has become the embodiment of Nissan's outstanding
                  performance, inspired by the most unforgiving proving ground,
                  the "race track".
                </Text>

                <Flex flexWrap={'wrap'} marginTop={'32px'} marginBottom={"68px"}>
                  <Box className="w-[200px]">
                    <span className="font-[400] text-[20px] text-[#90A3BF] mr-4">Type Car</span><span className="font-[600] text-[20px] text-[#596780]">Sport</span>
                  </Box>
                  <Box className="w-[200px]">
                  <span className="font-[400] text-[20px] text-[#90A3BF] mr-4">Capacity</span><span className="font-[600] text-[20px] text-[#596780]">2 Person</span>
                  </Box>
                  <Box className="w-[200px]">
                  <span className="font-[400] text-[20px] text-[#90A3BF] mr-4">Steering </span><span className="font-[600] text-[20px] text-[#596780]">Manual</span>
                  </Box>
                  <Box className="w-[200px]">
                  <span className="font-[400] text-[20px] text-[#90A3BF] mr-4">Gasoline </span><span className="font-[600] text-[20px] text-[#596780]">70L</span>
                  </Box>
                </Flex>

                <div className="flex items-center justify-between">
                  <Flex className="flex-col">
                    <p className="text-[20px] font-[700] text-[#1A202C]">$80.00/<span className="text-[14px] font-[700] text-[#90A3BF] dark:text-white">day</span></p>
                    <p className="text-[14px] font-[700] text-[#90A3BF] line-through">$100</p>
                  </Flex>

                  <a
                    href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Rent Now
                  </a>
                </div>
              </Box>
            </Flex>

          <Reviews/>

            <Flex className="flex-row justify-between items-center px-[20px] py-[10px] mb-5">
              <h2>Recent car</h2>
              <h2 className="font-[600] text-[16px] text-[#3563E9]">
                View All
              </h2>
            </Flex>
            <PopCarsDetail />
            <Flex className="flex-row justify-between items-center px-[20px] py-[10px] mb-5">
              <h2>Recomendation Car</h2>
              <h2 className="font-[600] text-[16px] text-[#3563E9]">
                View All
              </h2>
            </Flex>
            <RecCarsDetail />
          </Container>
        </Section>
      </Flex>
    </>
  );
};
