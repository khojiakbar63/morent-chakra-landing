import React from "react";
import { HomeBook } from "../../components/layout/specific-parts/home-book";
import { MixedCars } from "../../components/layout/specific-parts/all-cars/mixed-cars";
import { Container, Flex } from "@chakra-ui/react";
import { Aside, Section } from "../../components";

export const Category = () => {
  return (
    <>
      <Flex>
        <Aside />

        <Section className="px-6">
          <Container maxW="1110px" p="0">
            <HomeBook />
            <MixedCars />
          </Container>
        </Section>
      </Flex>
    </>
  );
};
