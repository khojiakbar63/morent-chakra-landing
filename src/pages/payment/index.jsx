import React from "react";
import { Section } from "../../components";
import { Container, Flex, Box } from "@chakra-ui/react";
import { BillingInfo } from "../../components";
import { RentalInfo } from "../../components";
import { Method } from "../../components";
import { Confirmation } from "../../components";
import { RentalSummary } from "../../components";


export const Payment = () => {
  return (
    <Section className={"px-6"}>
      <Container maxW={"1410px"}>
        <Flex justifyContent={'space-between'} marginBottom={'32px'}>
          <Box>
            <BillingInfo />
            <RentalInfo />
            <Method />
            <Confirmation />
          </Box>
          <RentalSummary />
        </Flex>
      </Container>
    </Section>
  );
};
