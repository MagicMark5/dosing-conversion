// image assets
import dose_100 from "../../assets/dose_100.png";
import dose_100_fr from "../../assets/dose_100_fr.png";
import dose_150 from "../../assets/dose_150.png";
import dose_150_fr from "../../assets/dose_150_fr.png";
// React, react-router-dom, and i18next
import { useContext } from 'react';
import { useTranslation } from "react-i18next";
import TranslationContext from '../../context/TranslationContext';
// custom hooks
import useFootnoteRefs from "../../hooks/useFootnoteRefs";

export default function PanelA() {
  const { t } = useTranslation();
  // brand name strings
  const { enFr, sustenna, d_sustenna } = useContext(TranslationContext);
  // url parts to use in footnote links
  const { base_url, page } = useFootnoteRefs();

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
          <label className="muscle" aria-describedby="footnote_asterisk">            
            {enFr(
              <span>
                {t('guide1.panelA.delt')}<br/>{t('guide1.panelA.muscle')}
              </span>,
              <span>
                {t('guide1.panelA.muscle')}<br/>{t('guide1.panelA.delt')}
              </span>,
            )}
            <a id="footnote-asterisk-ref" href={`${base_url}/#/${page}#footnote_asterisk`} aria-describedby="footnote_asterisk" aria-label="To asterisk footnote">*</a>
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
          <label className="nowrap uppercase">
            <span>+/-</span> {t('guide1.panelA.4_days')}<sup><a id="footnote-dagger-ref" href={`${base_url}/#/${page}#footnote_dagger`} aria-describedby="footnote_dagger" aria-label="To dagger footnote">&dagger;</a></sup>
          </label>
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
            )}<a href={`${base_url}/#/${page}#footnote_asterisk`} aria-describedby="footnote_asterisk" aria-label="To asterisk footnote">*</a>
          </label>
        </div>
      </figure>
      
      <br/>
      <footer>
        <h3 id="panelA-footnote-label">Footnotes</h3>
        <ul>
          <li><small id="footnote_asterisk"><a href={`${base_url}/#/${page}#footnote-asterisk-ref`} aria-label="Asterisk footnote">*</a> {t('guide1.panelA.foot_a')}</small></li>
          <li><small id="footnote_dagger"><a href={`${base_url}/#/${page}#footnote-dagger-ref`} aria-label="Dagger footnote">†</a> {t('guide1.panelA.foot_b')}</small></li>
          <li>
            <small>
              {enFr(
                <span>{t('adapted_from')}{sustenna} {t('product_m')}</span>,
                <span>{t('product_m')} {d_sustenna}</span>,
              )}.
            </small>
          </li>
        </ul>
      </footer>
    </article>
  )
}