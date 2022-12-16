import { useContext } from "react";
import TranslationContext from "../../context/TranslationContext";
import ProductMonograph from "./ProductMonograph";
import { useTranslation } from "react-i18next";

// This component is used in the "Safety Information" <Modal/>
export default function BalanceSustenna() {
  const { t, i18n } = useTranslation();
  // current language
  const lang = i18n.resolvedLanguage;
  // formatted brand names
  const { sustenna, d_sustenna, qu_sustenna } = useContext(TranslationContext);
  
  return (
    <section className="balance">
      <h3 aria-level="2" className="font-red font-bold">   
        {lang === "en" && <>{sustenna} <span className="nowrap">{t('safety_info')}</span></>}
        {lang === "fr" && <>{t('safety_info')} {d_sustenna}</>}
      </h3>
      <p>
        {sustenna} {t('modal.p_1a')} {lang === "fr" ? qu_sustenna : sustenna} {t('modal.p_1b')}
        <br/><br/>
        {sustenna} {t('modal.p_2a')}
        <br/><br/>
        <ProductMonograph anchorId={"sustenna_pm"} />
      </p>
    </section>    
  )
}