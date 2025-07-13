/** @format */

import React from "react";
import { useTranslation } from "react-i18next";
import { IMAGES, LOGOS } from "../constants";
import icons from "../constants/icons";

const Why = () => {
    const { t } = useTranslation();

    return (
        <section id="why" className="py-20 bg-secondary/30">
            <div className="container">
                <div className="text-center mb-4 md:mb-16">
                    <h2 className="text-xl md:text-4xl tracking-tight">
                        {t("why.title")}
                    </h2>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-3 md:px-32 gap-6">
                    <div className="">
                        <div className="flex items-center space-x-3 mb-4">
                            <img src={icons.FLASH} />

                            <p className="">{t("why.point-1")}</p>
                        </div>
                        <img
                            src={IMAGES.WHT_1}
                            className="w-[300px] object-cover"
                        />
                    </div>
                    <div className="">
                        <div className="flex items-center space-x-3 mb-4">
                            <img src={icons.PROFILE} />

                            <p className="">{t("why.point-2")}</p>
                        </div>
                        <img
                            src={IMAGES.WHT_2}
                            className="w-[300px] object-cover"
                        />
                    </div>
                    <div className="">
                        <div className="flex items-center space-x-3 mb-4">
                            <img src={icons.BUBBLE} />

                            <p className="">{t("why.point-3")}</p>
                        </div>
                        <img
                            src={IMAGES.WHT_3}
                            className="w-[300px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Why;
