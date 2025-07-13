/** @format */

import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import Hero from "../sections/Hero";
import Contact from "../sections/Contact";
import About from "../sections/About";
import Field from "../sections/Field";
import Why from "../sections/Why";

function Home() {
    const { t } = useTranslation();

    return (
        <div>
            <About />
            <Field />
            <Why />
        </div>
    );
}

export default Home;
