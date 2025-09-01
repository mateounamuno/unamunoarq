import React from "react";
import { Metadata } from "next";
import PortfolioDetailsShowcaseTwoMain from "@/pages/portfolio/details/portfolio-showcase-details-2-main";

export const metadata: Metadata = {
  title: "Liko - Portfolio Showcase 2 Projects",
  description: "Explore our showcase 2 portfolio projects featuring modern architecture and innovative design solutions.",
};

const PortfolioDetailsShowcaseTwoPage = () => {
  return (
    <PortfolioDetailsShowcaseTwoMain />
  );
};

export default PortfolioDetailsShowcaseTwoPage;
