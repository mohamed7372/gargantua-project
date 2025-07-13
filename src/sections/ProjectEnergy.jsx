/** @format */

import React from "react";
import { useTranslation } from "react-i18next";
import { IMAGES, LOGOS } from "../constants";
import icons from "../constants/icons";
import images from "../constants/images";

const ProjectEnergy = () => {
    const { t } = useTranslation();

    return (
        <section id="energy" className="py-20 bg-secondary/30">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl tracking-tight">
                        {t("energy.title")}
                    </h2>
                    <p className="font-light mt-4 w-2/3 mx-auto">
                        {t("energy.description")}
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="grid grid-cols-3 h-[350px] overflow-hidden">
                        <div className="col-span-2 bg-[#2C2C2C] text-white px-14 py-8 flex flex-col justify-between">
                            <div>
                                <p className="font-light">01</p>
                                <h2 className="text-2xl tracking-tight">
                                    {t("energy.title")}
                                </h2>
                                <p className="mt-4">
                                    {t("energy.description")}
                                </p>
                            </div>
                            <div className="flex items-center w-fit space-x-3">
                                <p className="text-[#FFCC00]">
                                    {t("energy.plus")}
                                </p>
                                <img src={icons.ARROW_RIGHT} />
                            </div>
                        </div>
                        <div className="">
                            <img
                                src={images.PROJECT_6}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 h-[350px] overflow-hidden">
                        <div className="col-span-2 bg-[#2C2C2C] text-white px-14 py-8 h-[350px] flex flex-col justify-between">
                            <div>
                                <p className="font-light">01</p>
                                <h2 className="text-2xl tracking-tight">
                                    {t("energy.title")}
                                </h2>
                                <p className="mt-4">
                                    {t("energy.description")}
                                </p>
                            </div>
                            <div className="flex items-center w-fit space-x-3">
                                <p className="text-[#FFCC00]">
                                    {t("energy.plus")}
                                </p>
                                <img src={icons.ARROW_RIGHT} />
                            </div>
                        </div>
                        <div>
                            <img
                                src={images.PROJECT_7}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 h-[350px] overflow-hidden">
                        <div className="col-span-2 bg-[#2C2C2C] text-white px-14 py-8 h-[350px] flex flex-col justify-between">
                            <div>
                                <p className="font-light">01</p>
                                <h2 className="text-2xl tracking-tight">
                                    {t("energy.title")}
                                </h2>
                                <p className="mt-4">
                                    {t("energy.description")}
                                </p>
                            </div>
                            <div className="flex items-center w-fit space-x-3">
                                <p className="text-[#FFCC00]">
                                    {t("energy.plus")}
                                </p>
                                <img src={icons.ARROW_RIGHT} />
                            </div>
                        </div>
                        <div>
                            <img
                                src={images.PROJECT_8}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 h-[350px] overflow-hidden">
                        <div className="col-span-2 bg-[#2C2C2C] text-white px-14 py-8 h-[350px] flex flex-col justify-between">
                            <div>
                                <p className="font-light">01</p>
                                <h2 className="text-2xl tracking-tight">
                                    {t("energy.title")}
                                </h2>
                                <p className="mt-4">
                                    {t("energy.description")}
                                </p>
                            </div>
                            <div className="flex items-center w-fit space-x-3">
                                <p className="text-[#FFCC00]">
                                    {t("energy.plus")}
                                </p>
                                <img src={icons.ARROW_RIGHT} />
                            </div>
                        </div>
                        <div>
                            <img
                                src={images.PROJECT_9}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 h-[350px] overflow-hidden">
                        <div className="col-span-2 bg-[#2C2C2C] text-white px-14 py-8 h-[350px] flex flex-col justify-between">
                            <div>
                                <p className="font-light">01</p>
                                <h2 className="text-2xl tracking-tight">
                                    {t("energy.title")}
                                </h2>
                                <p className="mt-4">
                                    {t("energy.description")}
                                </p>
                            </div>
                            <div className="flex items-center w-fit space-x-3">
                                <p className="text-[#FFCC00]">
                                    {t("energy.plus")}
                                </p>
                                <img src={icons.ARROW_RIGHT} />
                            </div>
                        </div>
                        <div className="">
                            <img
                                src={images.PROJECT_10}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectEnergy;
