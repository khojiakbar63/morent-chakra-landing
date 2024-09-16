import React from "react";
import { Outlet } from "react-router";
import { Header, Footer, Section } from "../../components/index";

export const Public = () => {
  return (
    <div>
      <Header />
      <Section>
        <Outlet />
      </Section>
      <Footer />
    </div>
  );
};
