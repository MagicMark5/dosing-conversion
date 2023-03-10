import TranslationContext from "./TranslationContext";
import { useTranslation } from "react-i18next";

export default function TranslationProvider({ children }) {
  const { i18n } = useTranslation();
  // current language
  const lang = i18n.resolvedLanguage;
  // Inline variables that handle copy formatting for common brand names
  const invega = <span className="uppercase">invega®</span>;
  const sustenna = <span className="nowrap uppercase">invega sustenna®</span>;
  const trinza = <span className="nowrap uppercase">invega trinza®</span>;
  const d_sustenna = <span className="nowrap">d’{sustenna}</span>;
  const d_trinza = <span className="nowrap">d’{trinza}</span>;
  const qu_sustenna = <span className="nowrap">qu’{sustenna}</span>;
  // Helpers for commonly used inline formatting
  const term = string => <span className="nowrap">« <span className="underline">{string}</span> »</span>;
  const mg = numString => <span className="nowrap">{numString} mg</span>;
  // Helper for En / Fr copy swapping
  const enFr = (en, fr) => lang === "fr" ? fr : en;

  const value = {
    term,
    enFr,
    mg,
    invega,
    sustenna,
    trinza,
    d_sustenna,
    d_trinza,
    qu_sustenna
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}
