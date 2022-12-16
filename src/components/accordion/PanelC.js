// images
import seven_days from "../../assets/seven_days.png";
import seven_days_fr from "../../assets/seven_days_fr.png";
import dose_maintenance_1 from "../../assets/dose_maintenance_1.png";
import dose_maintenance_2 from "../../assets/dose_maintenance_2.png";
// styles
import "../../styles/panels.scss";
// Translation
import { useTranslation } from "react-i18next";
import { useContext } from 'react';
import TranslationContext from '../../context/TranslationContext';
// custom hooks
import useFootnoteRefs from "../../hooks/useFootnoteRefs";

export default function PanelC() {
  const { t } = useTranslation();
  // brand name strings 
  const { enFr, mg } = useContext(TranslationContext); 
  // url parts to use in footnote link
  const { base_url, page } = useFootnoteRefs();

  return (
    <article className="maintenance">
      <div className="width-80p m-0-auto">
        <header className="maintenance">
          <img
            src={enFr(seven_days, seven_days_fr)} 
            alt=""/>
          <p>
            {t('guide1.panelC.p_a')}<strong><span className="nowrap">{t('guide1.panelC.seven_days')}</span>{enFr("", t('guide1.panelC.plus_minus'))}</strong>{t('guide1.panelC.p_b')}
          </p>
        </header>
        <section className="maintenance">
          <div className="day-muscle">
            <div className="m-10-bot">
              <label className="day">{enFr(t('guide1.panelC.monthly'), <span>{t('guide1.panelC.monthly_a')}<br/>{t('guide1.panelC.monthly_b')}</span>)}</label>
            </div>
            <label className="muscle">{t('guide1.panelC.delt_or_glut')}<sup><a id="footnote-section-ref" href={`${base_url}/#/${page}#footnote_section`} aria-describedby="footnote_section" aria-label="To section footnote">§</a></sup></label>
          </div>

          <figure className="maintenance">
            <h4>{t('guide1.panelC.h4_a')}</h4>
            <img
              className="width-100p panelC-card"
              src={dose_maintenance_1}
              alt={t('guide1.panelC.alt_card_a')}
            />
            <footer>
              <small><sup>‖</sup> {t('guide1.panelC.card_foot')}</small>
            </footer>
          </figure>

          <figure className="maintenance" style={{ paddingBottom: "16px" }}>
            <h4>{t('guide1.panelC.h4_b')} <span className="nowrap">{t('guide1.panelC.sad')}</span></h4>
            <img
              className="width-100p panelC-card"
              src={dose_maintenance_2}
              alt={t('guide1.panelC.alt_card_b')}
            />
          </figure>       
        </section>
      </div>


      <footer className="panel-C-footer">
        <h3 id="panelC-footnote-label">Footnotes</h3>
        <ul>
          <li><small id="footnote_section"><a href={`${base_url}/#/${page}#footnote-section-ref`} aria-label="Section footnote">§</a> {t('guide1.panelC.foot_a')}</small></li>
          <li>
            <small>{t('guide1.panelC.foot_b')} {mg(75)}, {t('guide1.panelC.foot_b2')} {enFr(mg("25-150"), mg("25 à 150"))}{t('guide1.panelC.foot_b3')} {mg(25)} {t('guide1.panelC.foot_b4')} {enFr(mg("50-150"), mg("50 à 150"))}{t('guide1.panelC.foot_b5')}<br/> {t('guide1.panelC.foot_b6')}</small>
          </li>
        </ul>
      </footer>
    </article>
  )
}