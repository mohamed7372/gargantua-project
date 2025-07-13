/** @format */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "../../public/locales/en/translation.json";
import fr from "../../public/locales/fr/translation.json";

i18n
    // detect user language
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next
    .use(initReactI18next)
    // init i18next
    .init({
        fallbackLng: "en",
        debug: true,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },

        // Resources can be directly loaded here for smaller projects
        resources: {
            en: {
                translation: en
            },
            fr: {
                translation: fr
            },
        },
    });

export default i18n;
