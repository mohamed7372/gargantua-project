/** @format */

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { LOGOS } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useTranslation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link to="/" className="flex items-center space-x-2">
                        <img src={LOGOS.LOGO} className="w-[250px] md:w-fit" />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6">
                    <Link
                        to="/"
                        className="text-sm font-medium hover:text-primary"
                    >
                        {t("navbar.home")}
                    </Link>
                    <Link
                        to="/concept-fibre"
                        className="text-sm font-medium hover:text-primary"
                    >
                        {t("navbar.fibre")}
                    </Link>
                    <Link
                        to="/concept-energy"
                        className="text-sm font-medium hover:text-primary"
                    >
                        {t("navbar.energy")}
                    </Link>

                    <a
                        href="#contact"
                        className="text-sm font-medium hover:text-primary"
                    >
                        {t("navbar.contact")}
                    </a>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    {/* <ThemeToggle /> */}
                    <LanguageSwitcher />
                    <Button
                        className="bg-[#2C2C2C]"
                        size="sm"
                        onClick={scrollToContact}
                    >
                        {t("navbar.devis")}
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={toggleMenu}>
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="container md:hidden py-4">
                    <nav className="flex flex-col space-y-4">
                        <Link
                            to="/"
                            className="text-sm font-medium hover:text-primary"
                        >
                            {t("navbar.home")}
                        </Link>
                        <Link
                            to="/concept-fibre"
                            className="text-sm font-medium hover:text-primary"
                        >
                            {t("navbar.fibre")}
                        </Link>
                        <Link
                            to="/concept-energy"
                            className="text-sm font-medium hover:text-primary"
                        >
                            {t("navbar.energy")}
                        </Link>

                        <a
                            href="#contact"
                            className="text-sm font-medium hover:text-primary"
                        >
                            {t("navbar.contact")}
                        </a>

                        <div className="flex flex-col gap-2 pt-2">
                            <div className="flex items-center justify-start py-2 gap-2">
                                <LanguageSwitcher />
                            </div>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
