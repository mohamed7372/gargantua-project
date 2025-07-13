/** @format */

import React from "react";
import { useTranslation } from "react-i18next";
import { IMAGES, LOGOS } from "../constants";
import icons from "../constants/icons";
import images from "../constants/images";

const ProjectFibre = () => {
    const { t } = useTranslation();

    return (
        <section id="project" className="py-20 bg-secondary/30">
            <div className="">
                <div className="text-center mb-4 md:mb-16 container">
                    <h2 className="text-2xl md:text-4xl tracking-tight">
                        {t("project.title")}
                    </h2>
                    <p className="font-light mt-4 md:w-2/3 mx-auto">
                        {t("project.description")}
                    </p>
                </div>

                <div className="space-y-6 md:container">
                    <div className="grid grid-cols-1 md:grid-cols-3 md:h-[350px] md:overflow-hidden">
                        <div className="col-span-2 bg-[#2C2C2C] text-white px-4 md:px-14 py-8 md:h-[350px] flex flex-col justify-between">
                            <div className="mb-4 md:mb-0">
                                <p className="font-light">01</p>
                                <h2 className="text-2xl tracking-tight">
                                    {t("project.title")}
                                </h2>
                                <p className="mt-4">
                                    {t("project.description")}
                                </p>
                            </div>
                            <div className="flex items-center w-fit space-x-3">
                                <p className="text-[#FFCC00]">
                                    {t("project.plus")}
                                </p>
                                <img src={icons.ARROW_RIGHT} />
                            </div>
                        </div>
                        <div>
                            <img
                                src={images.PROJECT_1}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 md:h-[350px] md:overflow-hidden">
                        <div className="col-span-2 bg-[#2C2C2C] text-white px-4 md:px-14 py-8 md:h-[350px] flex flex-col justify-between">
                            <div className="mb-4 md:mb-0">
                                <p className="font-light">01</p>
                                <h2 className="text-2xl tracking-tight">
                                    {t("project.title")}
                                </h2>
                                <p className="mt-4">
                                    {t("project.description")}
                                </p>
                            </div>
                            <div className="flex items-center w-fit space-x-3">
                                <p className="text-[#FFCC00]">
                                    {t("project.plus")}
                                </p>
                                <img src={icons.ARROW_RIGHT} />
                            </div>
                        </div>
                        <div>
                            <img
                                src={images.PROJECT_2}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 md:h-[350px] md:overflow-hidden">
                        <div className="col-span-2 bg-[#2C2C2C] text-white px-4 md:px-14 py-8 md:h-[350px] flex flex-col justify-between">
                            <div className="mb-4 md:mb-0">
                                <p className="font-light">01</p>
                                <h2 className="text-2xl tracking-tight">
                                    {t("project.title")}
                                </h2>
                                <p className="mt-4">
                                    {t("project.description")}
                                </p>
                            </div>
                            <div className="flex items-center w-fit space-x-3">
                                <p className="text-[#FFCC00]">
                                    {t("project.plus")}
                                </p>
                                <img src={icons.ARROW_RIGHT} />
                            </div>
                        </div>
                        <div>
                            <img
                                src={images.PROJECT_3}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 md:h-[350px] md:overflow-hidden">
                        <div className="col-span-2 bg-[#2C2C2C] text-white px-4 md:px-14 py-8 md:h-[350px] flex flex-col justify-between">
                            <div className="mb-4 md:mb-0">
                                <p className="font-light">01</p>
                                <h2 className="text-2xl tracking-tight">
                                    {t("project.title")}
                                </h2>
                                <p className="mt-4">
                                    {t("project.description")}
                                </p>
                            </div>
                            <div className="flex items-center w-fit space-x-3">
                                <p className="text-[#FFCC00]">
                                    {t("project.plus")}
                                </p>
                                <img src={icons.ARROW_RIGHT} />
                            </div>
                        </div>
                        <div>
                            <img
                                src={images.PROJECT_4}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 md:h-[350px] md:overflow-hidden">
                        <div className="col-span-2 bg-[#2C2C2C] text-white px-4 md:px-14 py-8 md:h-[350px] flex flex-col justify-between">
                            <div className="mb-4 md:mb-0">
                                <p className="font-light">01</p>
                                <h2 className="text-2xl tracking-tight">
                                    {t("project.title")}
                                </h2>
                                <p className="mt-4">
                                    {t("project.description")}
                                </p>
                            </div>
                            <div className="flex items-center w-fit space-x-3">
                                <p className="text-[#FFCC00]">
                                    {t("project.plus")}
                                </p>
                                <img src={icons.ARROW_RIGHT} />
                            </div>
                        </div>
                        <div>
                            <img
                                src={images.PROJECT_5}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectFibre;
