import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";

// changes language to fr if "/fr" is in the address bar
export default function useLanguage() {
  const { i18n } = useTranslation();

  const params = useLocation().search;
  // Note because we are using HashRouter instead of BrowserRouter, we need to prepend "/#/" to our parameters
  // Get 'lang' search parameter from address bar 
  const lang = new URLSearchParams(params).get("lang");

  // changes the 'lang' attribute of the html tag whenever the language is changed
  i18n.on('languageChanged', (lng) => { 
    document.documentElement.setAttribute('lang', lng);
  });

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return lang;
}