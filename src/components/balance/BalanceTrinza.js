import { useContext } from "react";
import TranslationContext from "../../context/TranslationContext";
import ProductMonograph from "./ProductMonograph";
import { useTranslation } from "react-i18next";

export default function BalanceTrinza() {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage; // current language
  const { 
    sustenna,
    trinza,
    d_sustenna,
    d_trinza,
    qu_sustenna,
  } = useContext(TranslationContext);

  return (
    <section className="balance">
      <h3 aria-level="2" className="font-red font-bold">
        {lang === "en" && <>{trinza} <span className="nowrap">{t('safety_info')}</span></>}
        {lang === "fr" && <>{t('safety_info')} {d_trinza}</>}
      </h3>
      <p>
        {trinza}{t('modal.p_3a')} {trinza} {t('modal.p_3b')} {lang === "fr" ? qu_sustenna : sustenna} {t('modal.p_3c')} {lang === "fr" ? d_sustenna : sustenna} {t('modal.p_3d')} {trinza}.
        <br/><br/>
        <ProductMonograph anchorId={"trinza_pm"} />
      </p>
    </section>
  )
}