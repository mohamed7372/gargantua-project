/** @format */

import React from "react";
import { useTranslation } from "react-i18next";
import { IMAGES, LOGOS } from "../constants";
import icons from "../constants/icons";
import { Button } from "../components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const Field = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <section id="field" className="pt-20 md:py-20 bg-secondary/30">
            <div className="container">
                <div className="text-center mb-4 md:mb-16">
                    <h2 className="text-2xl md:text-4xl tracking-tight">
                        {t("field.title")}
                    </h2>
                </div>

                <div className="relative h-[550px]">
                    <img
                        src={IMAGES.FIELD_1}
                        className="h-full w-full object-fill"
                    />
                    <div className="absolute inset-0">
                        <div className="space-y-4 flex flex-col justify-center h-full items-center md:w-1/3 px-4 mx-auto text-white">
                            <img
                                src={LOGOS.CONCEPT_FIBRE_COMPLET}
                                className="w-[300px] object-cover"
                            />

                            <ul className="space-y-4 pt-10 pb-6 text-white">
                                <li className="flex items-center space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-[#76768080] p-2 flex items-center justify-center">
                                        <img src={icons.SHARE_WHITE} />
                                    </div>
                                    <p className="text-sm">
                                        {t("field.point-1")}
                                    </p>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-[#76768080] p-2 flex items-center justify-center">
                                        <img
                                            src={icons.BUILDING_WHITE}
                                            className="text-white"
                                        />
                                    </div>
                                    <p className="text-sm">
                                        {t("field.point-2")}
                                    </p>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-[#76768080] p-2 flex items-center justify-center">
                                        <img src={icons.PEOPLE_WHITE} />
                                    </div>
                                    <p className="text-sm">
                                        {t("field.point-3")}
                                    </p>
                                </li>
                            </ul>

                            <Button
                                size="lg"
                                variant="outline"
                                className="px-8 text-black"
                                onClick={() => {
                                    navigate("/concept-fibre");
                                }}
                            >
                                {t("field.show")}
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="relative h-[550px] mt-4 md:mt-10">
                    <img
                        src={IMAGES.FIELD_2}
                        className="h-full w-full object-fill"
                    />
                    <div className="absolute inset-0">
                        <div className="space-y-4 flex flex-col justify-center h-full items-center md:w-1/3 px-4 mx-auto text-white">
                            <img
                                src={LOGOS.CONCEPT_ENERGIE_COMPLET}
                                className="w-[300px] object-cover"
                            />

                            <ul className="space-y-4 pt-10 pb-6 text-white">
                                <li className="flex items-center space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-[#76768080] p-2 flex items-center justify-center">
                                        <img src={icons.TASK_WHITE} />
                                    </div>
                                    <p className="text-sm">
                                        {t("field.point-4")}
                                    </p>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-[#76768080] p-2 flex items-center justify-center">
                                        <img
                                            src={icons.BATTERY_WHITE}
                                            className="text-white"
                                        />
                                    </div>
                                    <p className="text-sm">
                                        {t("field.point-5")}
                                    </p>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-[#76768080] p-2 flex items-center justify-center">
                                        <img src={icons.TICK_WHITE} />
                                    </div>
                                    <p className="text-sm">
                                        {t("field.point-6")}
                                    </p>
                                </li>
                            </ul>
                            <Button
                                size="lg"
                                variant="outline"
                                className="px-8 text-black"
                                onClick={() => {
                                    navigate("/concept-energy");
                                }}
                            >
                                {t("field.show")}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Field;
