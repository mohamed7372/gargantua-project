/** @format */

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import Hero from "../sections/Hero";
import Contact from "../sections/Contact";

function HomeLayout() {
    const { t } = useTranslation();

    return (
        <div>
            <Navbar />
            <main>
                <Hero />
                <Outlet />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default HomeLayout;
