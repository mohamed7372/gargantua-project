/** @format */

import React from "react";
import icons from "../constants/icons";
import { useTranslation } from "react-i18next";
import images from "../constants/images";
import { LOGOS } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-[#F2F2F7] py-12 container">
            <div className="flex flex-col justify-center items-center gap-4">
                <div className="flex items-center justify-center flex-col space-y-4">
                    <img src={LOGOS.GARGANTUA_BLAKC} />
                    <img src={LOGOS.LOGO_CONCEPT_BLACK} />
                </div>
                <nav className="hidden md:flex gap-6 mt-6 mb-4">
                    <Link
                        to="/"
                        className="text-md font-medium hover:text-primary"
                    >
                        {t("footer.home")}
                    </Link>
                    <Link
                        to="/concept-fibre"
                        className="text-md font-medium hover:text-primary"
                    >
                        {t("footer.fibre")}
                    </Link>
                    <Link
                        to="/concept-energy"
                        className="text-md font-medium hover:text-primary"
                    >
                        {t("footer.energy")}
                    </Link>

                    <a
                        href="#contact"
                        className="text-md font-medium hover:text-primary"
                    >
                        {t("footer.contact")}
                    </a>
                </nav>
                <div className="flex gap-4">
                    <a
                        href="#"
                        className="text-muted-foreground hover:text-foreground"
                    >
                        <img src={icons.LINKEDIN} />
                    </a>
                    <a
                        href="#"
                        className="text-muted-foreground hover:text-foreground"
                    >
                        <img src={icons.TWITTER} />
                    </a>
                    <a
                        href="#"
                        className="text-muted-foreground hover:text-foreground"
                    >
                        <img src={icons.FACEBOOK} />
                    </a>
                </div>
                <p className="text-sm text-muted-foreground">
                    © {t("footer.copy-right")} {new Date().getFullYear()}{" "}
                    {t("footer.project")}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
