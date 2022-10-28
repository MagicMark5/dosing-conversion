import dose_100 from "../../assets/dose_100.png";
import dose_100_fr from "../../assets/dose_100_fr.png";
import dose_150 from "../../assets/dose_150.png";
import dose_150_fr from "../../assets/dose_150_fr.png";

import { useTranslation } from "react-i18next";
import { useContext } from 'react';
import TranslationContext from '../../context/TranslationContext';

export default function PanelA() {
  const { t } = useTranslation();
  const { enFr, sustenna, d_sustenna } = useContext(TranslationContext); // brand name strings

  return (
    <article>
      <span>{t('guide1.panelA.span')}{sustenna}</span>
      <ol className="panel-a-ol">
        <li>{t('guide1.panelA.li_1')}</li>
        <li>{t('guide1.panelA.initiate')}{sustenna}{t('guide1.panelA.li_2')}</li>
      </ol>

      <figure>
        <div className="day-muscle">
          <div className="m-10-bot">
            <label className="day">{t('guide1.panelA.day', { numOfDays: 1 })}</label>
          </div>
          <label className="muscle">
            {enFr(
              <span>
                {t('guide1.panelA.delt')}<br/>{t('guide1.panelA.muscle')}
              </span>,
              <span>
                {t('guide1.panelA.muscle')}<br/>{t('guide1.panelA.delt')}
              </span>,
            )}*
            <br/>
          </label>
        </div>

        <img 
          src={enFr(dose_150, dose_150_fr)}
          alt={t('guide1.panelA.alt_dose_150')}
          className="panelA-card"
        />

        <div className="join-label">
          <label className="font-bold nowrap uppercase">{t('guide1.panelA.1_week')}</label>
          <hr />
          <label className="nowrap uppercase"><span>+/-</span> {t('guide1.panelA.4_days')}<sup>&dagger;</sup></label>
        </div>

        <img 
          src={enFr(dose_100, dose_100_fr)}
          alt={t('guide1.panelA.alt_dose_100')}
          className="panelA-card"
        />

        <div className="day-muscle">
          <div className="m-10-bot">
            <label className="day">{t('guide1.panelA.day', { numOfDays: 8 })}</label>
          </div>
          <label className="muscle">
            {enFr(
              <span>
                {t('guide1.panelA.delt')}<br/>{t('guide1.panelA.muscle')}
              </span>,
              <span>
                {t('guide1.panelA.muscle')}<br/>{t('guide1.panelA.delt')}
              </span>,
            )}*
          </label>        
        </div>
      </figure>
      
      <br/>
      <footer>
        <small>* {t('guide1.panelA.foot_a')}</small>
        <small>† {t('guide1.panelA.foot_b')}</small>
        <small>
          {enFr(
            <span>{t('adapted_from')}{sustenna} {t('product_m')}</span>,
            <span>{t('product_m')} {d_sustenna}</span>,
          )}.
        </small>
      </footer>
    </article>
  )
}