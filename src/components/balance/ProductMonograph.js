import { useTranslation } from "react-i18next";

export default function ProductMonograph() {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage; // current language

  return (
    <span>{t('modal.pm_a')}<a href={t('modal.pm_url')} target="_blank" rel="noreferrer">www.janssen.com/<wbr></wbr>canada/{lang === "fr" && "fr/"}products</a>{t('modal.pm_b')}</span>
  )
}