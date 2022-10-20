import ProductMonograph from "./ProductMonograph";
import { useTranslation } from "react-i18next";

export default function BalanceTrinza() {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage; // current language
  const sustenna = <span className="nowrap">{t('sustenna')}</span>;
  const trinza = <span className="nowrap">{t('trinza')}</span>
  const d_sustenna = <span className="nowrap">{t('d_apos_sustenna')}</span>;
  const d_trinza = <span className="nowrap">{t('d_apos_trinza')}</span>;
  const qu_sustenna = <span className="nowrap">{t('qu_apos_sustenna')}</span>;

  return (
    <section className="balance">
      <p>
        <strong className="font-bold">
          <span className="font-red">
            {lang === "en" && <>{trinza} <span className="nowrap">{t('safety_info')}</span></>}
            {lang === "fr" && <>{t('safety_info')} {d_trinza}</>}
          </span>
        </strong>
        <br/>
        {trinza}{t('modal.p_3a')} {trinza} {t('modal.p_3b')} {lang === "fr" ? qu_sustenna : sustenna} {t('modal.p_3c')} {lang === "fr" ? d_sustenna : sustenna} {t('modal.p_3d')} {trinza}.
        <br/><br/>
        <ProductMonograph />
      </p>
    </section>
  )
}