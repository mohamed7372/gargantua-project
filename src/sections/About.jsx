/** @format */

import React from "react";
import { useTranslation } from "react-i18next";
import { IMAGES } from "../constants";
import icons from "../constants/icons";

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="pt-20 md:py-20 bg-secondary/30">
            <div className="container">
                <div className="text-center md:mb-16">
                    <h2 className="text-2xl tracking-tight mb-4">
                        {t("about.title")}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <img src={IMAGES.WHT_1} />
                    </div>
                    <div>
                        <h3 className="text-xl tracking-tight mb-4 font-medium">
                            {t("about.sub-title")}
                        </h3>
                        <p className="tracking-tight text-lg">
                            {t("about.description-1")}
                        </p>
                        <p className="tracking-tight text-lg">
                            {t("about.description-2")}
                        </p>
                        <p className="tracking-tight text-lg">
                            {t("about.description-3")}
                        </p>
                        <p className="tracking-tight text-lg">
                            {t("about.description-4")}
                        </p>
                        <ul className="space-y-4 mt-8">
                            <li className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-full bg-[#7676801F] flex items-center justify-center">
                                    <img src={icons.RANKING} />
                                </div>
                                <p className="text-sm">{t("about.point-1")}</p>
                            </li>
                            <li className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-full bg-[#7676801F] flex items-center justify-center">
                                    <img src={icons.BUILDING} />
                                </div>
                                <p className="text-sm">{t("about.point-2")}</p>
                            </li>
                            <li className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-full bg-[#7676801F] flex items-center justify-center">
                                    <img src={icons.SHARE} />
                                </div>
                                <p className="text-sm">{t("about.point-3")}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
