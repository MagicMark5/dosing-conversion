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

export default function PanelC() {
  const { t } = useTranslation();
  const { enFr, mg } = useContext(TranslationContext); // brand name strings  

  return (
    <article className="maintenance">
      <div className="width-80p m-0-auto">
        <header className="maintenance">
          <img
            src={enFr(seven_days, seven_days_fr)} 
            alt={enFr("+/- 7 days", "+/- 7 jours")}
          />
          <p>
            {t('guide1.panelC.p_a')}<strong><span className="nowrap">{t('guide1.panelC.seven_days')}</span>{enFr("", t('guide1.panelC.plus_minus'))}</strong>{t('guide1.panelC.p_b')}
          </p>
        </header>
        <section className="maintenance">
          <div className="day-muscle">
            <div className="m-10-bot">
              <label className="day">{enFr(t('guide1.panelC.monthly'), <span className="lh-1">{t('guide1.panelC.monthly_a')}<br/>{t('guide1.panelC.monthly_b')}</span>)}</label>
            </div>
            <label className="muscle">{t('guide1.panelC.delt_or_glut')}<sup>§</sup></label>
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
        <small>§ {t('guide1.panelC.foot_a')}</small>
        <br/>
        <small>{t('guide1.panelC.foot_b')} {mg(75)}, {t('guide1.panelC.foot_b2')} {enFr(mg("25-150"), mg("25 à 150"))}{t('guide1.panelC.foot_b3')} {mg(25)} {t('guide1.panelC.foot_b4')} {enFr(mg("50-150"), mg("50 à 150"))}{t('guide1.panelC.foot_b5')}<br/> {t('guide1.panelC.foot_b6')}</small>
      </footer>
    </article>
  )
}