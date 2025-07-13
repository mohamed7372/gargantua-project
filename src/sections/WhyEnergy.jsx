/** @format */

import React from "react";
import { useTranslation } from "react-i18next";
import { IMAGES, LOGOS } from "../constants";
import icons from "../constants/icons";
import images from "../constants/images";
import { Button } from "../components/ui/button";

const WhyEnergy = () => {
    const { t } = useTranslation();

    return (
        <section id="why" className="relative">
            <img
                src={images.BG_WHT_1}
                className="w-full h-[578px] brightness-[0.3] object-cover"
            />
            <div className="absolute inset-0 z-10 text-white py-20">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-light">
                            {t("why.fibre.title")}
                        </h2>
                    </div>
                    <div className="grid grid-cols-5 gap-x-32">
                        <div className="col-span-2 flex justify-center flex-col">
                            <h4 className="text-2xl font-light">
                                {t("why.fibre.sub-title")}
                            </h4>
                            <p className="font-light mt-4">
                                {t("why.fibre.description")}
                            </p>
                            <Button
                                className="bg-white text-black mt-10 w-fit text-md px-4 font-light"
                                size="sm"
                            >
                                {t("why.fibre.contact")}
                            </Button>
                        </div>
                        <div className="col-span-3 grid grid-cols-2 gap-4">
                            <div className="border border-white rounded-xl p-6 backdrop-blur-lg">
                                <h4 className="mb-4 text-center text-lg">
                                    {t("why.fibre.list.title-1")}
                                </h4>
                                <p className="font-light text-sm text-center">
                                    {t("why.fibre.list.description-1")}
                                </p>
                            </div>
                            <div className="border border-white rounded-xl p-6 backdrop-blur-lg">
                                <h4 className="mb-4 text-center text-lg">
                                    {t("why.fibre.list.title-2")}
                                </h4>
                                <p className="font-light text-sm text-center">
                                    {t("why.fibre.list.description-2")}
                                </p>
                            </div>
                            <div className="border border-white rounded-xl p-6 backdrop-blur-lg">
                                <h4 className="mb-4 text-center text-lg">
                                    {t("why.fibre.list.title-3")}
                                </h4>
                                <p className="font-light text-sm text-center">
                                    {t("why.fibre.list.description-3")}
                                </p>
                            </div>
                            <div className="border border-white rounded-xl p-6 backdrop-blur-lg">
                                <h4 className="mb-4 text-center text-lg">
                                    {t("why.fibre.list.title-4")}
                                </h4>
                                <p className="font-light text-sm text-center">
                                    {t("why.fibre.list.description-4")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyEnergy;
