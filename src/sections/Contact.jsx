/** @format */

import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { useTranslation } from "react-i18next";
import { ICONS } from "../constants";
import logos from "../constants/logos";
import icons from "../constants/icons";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const { t } = useTranslation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you would handle form submission here
        console.log("Form submitted:", formData);
        // Reset form
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
        // Show success message
        alert("Thanks for your message! We'll get back to you soon.");
    };

    return (
        <section
            id="contact"
            className="py-20 bg-[#2C2C2C] text-white relative md:px-20"
        >
            <div className="absolute right-0 top-20 bottom-20 z-0">
                <img src={logos.GARGANTUA_2} className="h-full object-cover" />
            </div>
            <div className="container relative z-10">
                <div className="mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-4xl mb-4">
                            {t("contact.title")}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40">
                        <div className="flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg md:text-2xl font-semibold mb-4">
                                    {t("contact.sub-title-1")}
                                </h3>
                                <h3 className="text-lg md:text-2xl font-semibold mb-4 w-[350px]">
                                    {t("contact.sub-title-2")}
                                </h3>
                                <p className="text-xs md:text-lg md:w-[400px] font-light mb-4">
                                    {t("contact.description")}
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-6">
                                    <img src={icons.LOCATION_WHITE} />
                                    <p className="text-[#EBEDF0] font-light text-xs md:text-sm">
                                        {t("contact.address")}
                                    </p>
                                </div>
                                <div className="flex items-center space-x-6">
                                    <img src={icons.CALL_WHITE} className="" />
                                    <p className="text-[#EBEDF0] font-light text-xs md:text-sm">
                                        +33 (0)1 23 45 67 89
                                    </p>
                                </div>
                                <div className="flex items-center space-x-6">
                                    <img src={icons.SMS_WHITE} />
                                    <p className="text-[#EBEDF0] font-light text-xs md:text-sm">
                                        Conceptfibres@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-4 z-20"
                            >
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium mb-1"
                                    >
                                        {t("contact.fullname")}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder={t("contact.fullname")}
                                        className="w-full p-2 border border-border rounded-lg bg-[#2C2C2C] outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium mb-1"
                                    >
                                        {t("contact.phone")}
                                    </label>
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder={t("contact.phone")}
                                        className="w-full p-2 border border-border rounded-lg bg-[#2C2C2C] outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium mb-1"
                                    >
                                        {t("contact.email")}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder={t("contact.email")}
                                        className="w-full p-2 border border-border rounded-lg bg-[#2C2C2C] outline-none"
                                        required
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium mb-1"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        placeholder={t(
                                            "contact.message-placeholder"
                                        )}
                                        className="w-full p-2 border border-border resize-none rounded-lg bg-[#2C2C2C] outline-none"
                                        required
                                    ></textarea>
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full text-black"
                                    variant="outline"
                                >
                                    {t("contact.send")}
                                </Button>
                            </form>
                        </div>
                    </div>

                    <div className="space-y-4 mt-20">
                        <div className="flex items-center space-x-4">
                            <img
                                src={logos.CONCEPT_LOGO}
                                className="w-[350px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
