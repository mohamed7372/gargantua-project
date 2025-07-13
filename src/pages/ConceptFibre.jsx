/** @format */

import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { useTranslation } from "react-i18next";
import AboutFibre from "../sections/AboutFibre";
import ServicesFibre from "../sections/ServicesFibre";
import WhyFibre from "../sections/WhyFibre";
import ProjectFibre from "../sections/ProjectFibre";

function ConceptFibre() {
    const { t } = useTranslation();

    return (
        <div>
            <AboutFibre />
            <ServicesFibre />
            <WhyFibre />
            <ProjectFibre />
        </div>
    );
}

export default ConceptFibre;
