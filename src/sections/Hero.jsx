/** @format */

import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../components/ui/button";
import { IMAGES, LOGOS } from "../constants";
import logos from "../constants/logos";

const Hero = () => {
    const { t } = useTranslation();

    const scrollTo = (id) => {
        const contactSection = document.getElementById(id);
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative overflow-hidden h-[1000px] md:h-screen">
            <img
                src={IMAGES.HERO}
                className="w-full h-full object-cover brightness-50"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/20 -z-10" /> */}

            <div className=" absolute inset-0">
                <div className="container flex flex-col items-center text-center py-20 md:py-10">
                    <img src={LOGOS.CONCEPT_LOGO_2} />
                    <p className="font-light px-4 py-1 mt-6 mb-2 text-white border border-white rounded-full">
                        {t("hero.project")}
                    </p>
                    <h1 className="text-xl md:text-4xl md:w-[550px] font-bold tracking-tight mb-6 max-w-4xl text-white">
                        {t("hero.title")}
                    </h1>
                    <p className="text-sm md:text-xl text-muted-foreground mb-10 max-w-2xl text-white">
                        {t("hero.subtitle")}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-fit justify-center items-center">
                        <Button
                            size="lg"
                            className="px-8 bg-[#2C2C2C]"
                            onClick={() => scrollTo("contact")}
                        >
                            {t("hero.devis")}
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="px-8 w-fit md:w-full"
                            onClick={() => scrollTo("contact")}
                        >
                            {t("hero.contact")}
                        </Button>
                    </div>

                    <div className="mt-16 grid grid-cols-5 md:grid-cols-11 text-white gap-y-6">
                        <div className="flex flex-col items-center col-span-2 justify-center w-full">
                            <div className="text-xl font-bold mb-2">
                                +12 {t("hero.stats.years")}
                            </div>
                            <p className="text-gray-300 font-light w-[110px]">
                                {t("hero.stats.experience")}
                            </p>
                        </div>
                        <div className="h-full w-full flex items-center justify-center">
                            <div className="h-full w-px bg-white"></div>
                        </div>{" "}
                        <div className="flex flex-col items-center col-span-2 w-full justify-start">
                            <div className="text-xl font-bold mb-2">2013</div>
                            <p className="text-gray-300 font-light w-[110px]">
                                {t("hero.stats.creation")}
                            </p>
                        </div>
                        <div className="h-full w-full hidden md:flex items-center justify-center">
                            <div className="h-full w-px bg-white"></div>
                        </div>
                        <div className="flex flex-col items-center col-span-2 w-full justify-center">
                            <div className="text-xl font-bold mb-2">
                                {t("hero.stats.interventions")}
                            </div>
                            <p className="text-gray-300 font-light w-[110px]">
                                {t("hero.stats.territoire")}
                            </p>
                        </div>
                        <div className="h-full w-full flex items-center justify-center">
                            <div className="h-full w-px bg-white"></div>
                        </div>
                        <div className="flex flex-col items-center col-span-2 w-full justify-center">
                            <div className="text-xl font-bold mb-2">
                                {t("hero.stats.partners")}
                            </div>
                            <p className="text-gray-300 font-light w-[110px]">
                                {t("hero.stats.operateur")}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between md:w-2/3 flex-wrap space-x-2 mt-4">
                        <img
                            src={logos.FREE}
                            className="w-[120px] md:w-[150px] object-cover grayscale"
                        />
                        <img
                            src={logos.SADE_TELECOM}
                            className="w-[120px] md:w-[150px] object-cover grayscale"
                        />
                        <img
                            src={logos.ENGIE}
                            className="w-[120px] md:w-[150px] object-cover grayscale"
                        />
                        <img
                            src={logos.BOUYGUES}
                            className="w-[120px] md:w-[150px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
