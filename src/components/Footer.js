import '../styles/Footer.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import TranslationContext from '../context/TranslationContext';
import { useTranslation } from "react-i18next";
// images
import divider from "../assets/divider.png";
import janssen from "../assets/janssen.png";
import imc from "../assets/imc.png";
import imc_fr from "../assets/imc_fr.png";
import paab from "../assets/paab.png";
import paab_fr from "../assets/paab_fr.png";

export default function Footer({modal}) {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage; // current language
  const { enFr, d_trinza, d_sustenna, sustenna, trinza } = useContext(TranslationContext); // brand names with non-breaking spaces
  const bar = <span>&nbsp;|&nbsp;</span>;

  return (
    <footer className={modal ? "blur page-footer" : "page-footer"}>
      <img className="footer-divider" src={divider} alt="" />
      <div className='legal-logos-container'>
        <p className="legal">
          <strong>{t('footer.refs')}</strong>
          1.&nbsp;{enFr(
            <>{sustenna} {t('footer.pm')}</>, // en
            <> {t('footer.pm_a')} {d_sustenna}. {t('footer.pm_b')}</> // fr
          )}
          2.&nbsp;{enFr(
            <>{trinza} {t('footer.pm')}</>, // en
            <> {t('footer.pm_a')} {d_trinza}. {t('footer.pm_b')}</> // fr
          )}
          <br/><br/>
          © 2022 Janssen Inc. {bar} {t('footer.tm')}<br/><br/>
          <a href={t('footer.pp_url')} target="_blank" rel="noreferrer">{t('footer.pp')}</a> {bar} <Link to="/terms-of-use">{t('footer.terms')}</Link><br/><br/>
          Janssen Inc.<br/>
          19 Green Belt Drive {bar} <span className='nowrap'>{t('footer.city')}</span>  M3C&nbsp;1L9<br/>
          <a href={t('footer.company_url')} rel="noreferrer" target="_blank">www.janssen.com/canada{lang === 'fr' && '/fr'}</a>
          <span className='legal mobile project-code'>
            <br/><br/>
            CP-312685{enFr("E", "F")}
          </span>
        </p>
        <div className="logos">
          <img alt={t('footer.imc')}
            className="imc-logo"
            src={enFr(imc, imc_fr)}
          />
          <img alt={t('footer.paab')}
            className="paab-logo"
            src={enFr(paab, paab_fr)}
          />
          <img alt="Janssen Pharmaceutical Companies of Johnson &#x26; Johnson"
            className="janssen-logo"
            src={janssen}
          />
        </div>
      </div>
      <div className='legal desktop project-code'>
        CP-312685{enFr("E", "F")}
      </div>
    </footer>
  )
}