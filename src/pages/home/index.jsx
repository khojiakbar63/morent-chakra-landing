import { HomeHero, HomeBook, PopCars, RecCars } from "../../components";
import { Section } from "../../components";
import { Container, Flex, Button } from "@chakra-ui/react";
import "./style.scss";

export const Home = () => {
  return (
    <main className="bg-[#F6F7F9]">
      <Container maxW={"1410px"}>
        <HomeHero />
        <HomeBook />
      </Container>
      <Section className="px-6">
        <Container maxW={"1410px"}>
          <Flex className="flex-row justify-between items-center px-[20px] py-[10px] mb-5">
            <h2>Popular Car</h2>
            <p className="font-[600] text-[16px] text-[#3563E9]">View All</p>
          </Flex>
          <PopCars />
          <h2 className="px-[20px] py-[10px] mb-5">Recomendation Car</h2>
          <RecCars />
          <Flex className="flex-row justify-between items-center px-[20px] py-[64px] ">
            <div></div>
            <Button colorScheme="blue">Show more car</Button>
            <p className="font-[500] text-[14px] text-[#90A3BF]">120 Cars</p>
          </Flex>
        </Container>
      </Section>
    </main>
  );
};
