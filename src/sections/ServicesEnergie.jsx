/** @format */

import React from "react";
import icons from "../constants/icons";
import { useTranslation } from "react-i18next";
import logos from "../constants/logos";
import { Button } from "../components/ui/button";

const services = [
    {
        icon: "GLASS",
        title: "fibre.title-1",
        description: "fibre.description-1",
    },
    {
        icon: "BUILDING",
        title: "fibre.title-2",
        description: "fibre.description-2",
    },
    {
        icon: "HOME",
        title: "fibre.title-3",
        description: "fibre.description-3",
    },
    {
        icon: "DRIVER",
        title: "fibre.title-4",
        description: "fibre.description-4",
    },
    {
        icon: "CLOUD",
        title: "fibre.title-5",
        description: "fibre.description-5",
    },
];

const ServiceCard = ({ service }) => {
    const { t } = useTranslation();
    return (
        <div className="bg-[#5454561A] rounded-lg p-6 shadow-sm flex flex-col items-center h-full">
            <div className="w-10 h-10 bg-gray-300 flex items-center justify-center rounded-full">
                <img src={icons[service.icon]} />
            </div>
            <div className="flex items-center">
                <div>
                    <h4 className="font-medium text-center mt-4">
                        {" "}
                        {t(`service.${service.title}`)}
                    </h4>
                    <p className="text-sm text-muted-foreground text-center mt-4">
                        {t(`service.${service.description}`)}
                    </p>
                </div>
            </div>
        </div>
    );
};

const ServicesEnergie = () => {
    const { t } = useTranslation();
    return (
        <section id="testimonials" className="py-20 bg-secondary/30">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        {t("service.title")}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                    <div className="bg-[#5454561A] rounded-lg p-6 shadow-sm flex flex-col items-center h-full">
                        <img
                            src={logos.CONCEPT_FIBRE_BLACK}
                            className="w-[200px] object-cover"
                        />

                        <div className="flex items-center flex-col">
                            <h4 className="font-light text-center mt-4">
                                {" "}
                                {t(`service.fibre.last-card`)}
                            </h4>
                            <Button
                                className="bg-[#2C2C2C] mx-auto mt-4 text-lg font-light"
                                size="lg"
                            >
                                {t("service.fibre.devis")}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesEnergie;
