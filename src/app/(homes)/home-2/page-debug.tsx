'use client';
import React from "react";

// Versión simplificada para debug
const HomePageTwoDebug = () => {
    return (
        <div style={{ padding: '20px', background: '#fff', minHeight: '100vh' }}>
            <h1 style={{ color: '#000' }}>Debug: Página cargando</h1>
            <p style={{ color: '#000' }}>Si ves esto, el problema está en los componentes o animaciones.</p>

            <div style={{ marginTop: '20px', padding: '20px', background: '#f0f0f0', border: '1px solid #ccc' }}>
                <h2>Componentes a probar:</h2>
                <ul>
                    <li>HeaderOne</li>
                    <li>PortfolioGridFourColArea</li>
                    <li>FooterOne</li>
                    <li>GSAP Animations</li>
                    <li>ScrollSmoother</li>
                </ul>
            </div>
        </div>
    );
};

export default HomePageTwoDebug;


