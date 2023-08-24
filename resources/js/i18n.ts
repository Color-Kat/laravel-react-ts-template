// Use this file + storage/lang/ru.json for site localization

// @ts-ignore
import i18next from "i18next";// @ts-ignore
import {initReactI18next} from "react-i18next";// @ts-ignore
import LanguageDetector from "i18next-browser-languagedetector";// @ts-ignore
import I18NextHttpBackend from "i18next-http-backend";

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(I18NextHttpBackend)
    .init({
        // lng: "ru",
        fallbackLng: 'en',
        backend: {
            loadPath: '/storage/lang/{{lng}}.json'
        },
        returnObjects: true,
        debug: true,
        react: {
            useSuspense: true
        }
    });