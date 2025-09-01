"use client";
import React from "react";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import PortfolioDetailsShowcaseTwoWrapper from "@/components/portfolio/details/portfolio-details-showcase-2-wrapper";

export default function PortfolioDetailsLayout({ children }: { children: React.ReactNode; }) {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <HeaderEleven transparent={true} />
            <PortfolioDetailsShowcaseTwoWrapper>
                <main style={{ flex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ flex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                        {children}
                    </div>
                </main>
            </PortfolioDetailsShowcaseTwoWrapper>
            <FooterTwo />
        </div>
    );
}
