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
  // current language
  const lang = i18n.resolvedLanguage;
  // brand names with non-breaking spaces
  const { enFr, d_trinza, d_sustenna, sustenna, trinza } = useContext(TranslationContext);
  const bar = <span aria-hidden="true">&nbsp;|&nbsp;</span>;

  return (
    <footer className={modal ? "blur page-footer" : "page-footer"}>
      <img className="footer-divider" src={divider} alt="" />
      <div className='legal-logos-container'>
        <div className="legal">
          <p className='references'>
            <strong>{t('footer.refs')}</strong>
            1.&nbsp;{enFr(
              // en
              <>{sustenna} {t('footer.pm')}</>,
              // fr
              <> {t('footer.pm_a')} {d_sustenna}. {t('footer.pm_b')}</>
            )}
            2.&nbsp;{enFr(
              // en
              <>{trinza} {t('footer.pm')}</>,
              // fr
              <> {t('footer.pm_a')} {d_trinza}. {t('footer.pm_b')}</>
            )}
          </p>

          <p className='janssen-legal'>© 2022 Janssen Inc. {bar} {t('footer.tm')}</p>

          <p className='footer-links'><a href={t('footer.pp_url')} target="_blank" rel="noreferrer">{t('footer.pp')}</a> {bar} <Link to="/terms-of-use">{t('footer.terms')}</Link></p>
          
          <p className='janssen-footer'>
            Janssen Inc.<br/>
            19 Green Belt Drive {bar} <span className='nowrap'>{t('footer.city')}</span>  M3C&nbsp;1L9<br/>
            <a href={t('footer.company_url')} rel="noreferrer" target="_blank">www.janssen.com/canada{lang === 'fr' && '/fr'}</a><br/>
            {/* This project code is only shown for mobile */}
            <span className='legal mobile project-code'>CP-312685{enFr("E", "F")}</span>
          </p>
        </div>
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
      {/* This project code is only shown for desktop */}
      <div className='legal desktop project-code'>
        CP-312685{enFr("E", "F")}
      </div>
    </footer>
  )
}