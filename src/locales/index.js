// Localization for French
import i18next from 'i18next';
// For React
import { initReactI18next } from "react-i18next";
// For backend
import HttpApi from "i18next-http-backend";

const dev = process.env.NODE_ENV === "development";
const path = process.env.PUBLIC_URL;

i18next
  .use(initReactI18next)
  .use(HttpApi) // Registering the back-end plugin
  .init({
    fallbackLng: "en",
    debug: false, // console.log the config info and events
    backend: {
      loadPath: `${dev ? `http://localhost:3000` : `https://magicmark5.github.io`}${path}/locales/{{lng}}/{{ns}}.json`
      // loadPath: `${path}/locales/{{lng}}/{{ns}}.json`
   }
  });

  export default i18next;