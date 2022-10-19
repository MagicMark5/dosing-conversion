// Localization for French
import i18next from 'i18next';
// For React
import { initReactI18next } from "react-i18next";
// For backend
import HttpApi from "i18next-http-backend";

const dev = process.env.NODE_ENV === "development";
const path = process.env.PUBLIC_URL; // should be /dosing-conversion for the dev environment

i18next
  .use(initReactI18next)
  .use(HttpApi) // Registering the back-end plugin
  .init({
    //lng: 'en', // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    debug: dev, // console.log the config info and events
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${dev ? `http://localhost:3000` : `https://magicmark5.github.io`}${path}/locales/{{lng}}/{{ns}}.json`
   }
  });

  export default i18next;