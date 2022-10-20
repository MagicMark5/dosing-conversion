import TranslationContext from "./TranslationContext";
import { useTranslation } from "react-i18next";

export default function TranslationProvider({ children }) {
  const { i18n } = useTranslation();
  const lang = i18n.resolvedLanguage; // current language
  const sustenna = <span className="nowrap uppercase">invega sustenna®</span>;
  const trinza = <span className="nowrap uppercase">invega trinza®</span>;
  const d_sustenna = <span className="nowrap">d’{sustenna}</span>;
  const d_trinza = <span className="nowrap">d’{trinza}</span>;
  const qu_sustenna = <span className="nowrap">qu’{sustenna}</span>;

  const enFr = (en, fr) => lang === "fr" ? fr : en;

  const value = {
    enFr,
    sustenna,
    trinza,
    d_sustenna,
    d_trinza,
    qu_sustenna
  };

  return (
    <>
      <TranslationContext.Provider value={value}>
        {children}
      </TranslationContext.Provider>
    </>
  );
}
