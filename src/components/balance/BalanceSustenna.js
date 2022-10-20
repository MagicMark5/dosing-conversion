import { useContext } from "react";
import TranslationContext from "../../context/TranslationContext";
import ProductMonograph from "./ProductMonograph";
import { useTranslation } from "react-i18next";

export default function BalanceSustenna() {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage; // current language
  const { 
    sustenna,
    d_sustenna,
    qu_sustenna,
  } = useContext(TranslationContext);
  
  return (
    <section className="balance">
      <p>
        <strong className="font-bold">
          <span className="bold font-red">
            {lang === "en" && <>{sustenna} <span className="nowrap">{t('safety_info')}</span></>}
            {lang === "fr" && <>{t('safety_info')} {d_sustenna}</>}
          </span>
        </strong>
        <br/>
        {sustenna} {t('modal.p_1a')} {lang === "fr" ? qu_sustenna : sustenna} {t('modal.p_1b')}
        <br/><br/>
        {sustenna} {t('modal.p_2a')}
        <br/><br/>
        <ProductMonograph />
      </p>
    </section>    
  )
}