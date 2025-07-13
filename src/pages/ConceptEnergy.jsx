/** @format */

import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { useTranslation } from "react-i18next";
import ProjectEnergy from "../sections/ProjectEnergy";
import WhyEnergy from "../sections/WhyEnergy";
import ServicesEnergie from "../sections/ServicesEnergie";
import AboutEnergy from "../sections/AboutEnergy";

function ConceptEnergy() {
    const { t } = useTranslation();

    return (
        <div>
            <AboutEnergy />
            <ServicesEnergie />
            <WhyEnergy />
            <ProjectEnergy />
        </div>
    );
}

export default ConceptEnergy;
