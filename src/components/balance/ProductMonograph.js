import { useTranslation } from "react-i18next";

// This component is used in both Balance components for both brands
export default function ProductMonograph({ anchorId }) {
  const { t, i18n } = useTranslation();
  // current language
  const lang = i18n.resolvedLanguage;

  return (
    <span>{t('modal.pm_a')}<a id={anchorId} href={t('modal.pm_url')} target="_blank" rel="noreferrer">www.janssen.com/<wbr></wbr>canada/{lang === "fr" && "fr/"}products</a>{t('modal.pm_b')}</span>
  )
}