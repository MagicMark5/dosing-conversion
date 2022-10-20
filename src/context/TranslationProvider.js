import TranslationContext from "./TranslationContext";
import { useTranslation } from "react-i18next";

export default function TranslationProvider({ children }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage; // current language
  const sustenna = <span className="nowrap">{t('sustenna')}</span>;
  const trinza = <span className="nowrap">{t('trinza')}</span>;
  const d_sustenna = <span className="nowrap">{t('d_apos_sustenna')}</span>;
  const d_trinza = <span className="nowrap">{t('d_apos_trinza')}</span>;
  const qu_sustenna = <span className="nowrap">{t('qu_apos_sustenna')}</span>;

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
