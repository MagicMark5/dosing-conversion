import DoseCalc from "../DoseCalc";

import { useTranslation } from "react-i18next";
import { useContext } from 'react';
import TranslationContext from '../../context/TranslationContext';

export default function PanelB({ doses }) {
  const { t } = useTranslation();
  const { enFr, invega, sustenna, d_sustenna } = useContext(TranslationContext); // brand name strings

  return (
    <article>
      <span className="font-grey">{t('guide1.panelB.span_a')}{enFr(sustenna, d_sustenna)}{t('guide1.panelB.span_b')}{invega}{t('guide1.panelB.span_c')}{enFr(sustenna, d_sustenna)}{t('guide1.panelB.span_d')}</span>
      <br/><br/>
      <DoseCalc
        inputLabel={<span>
                      {enFr(
                        <>{t('guide1.panelB.input_a')} <span className="nowrap">{t('guide1.panelB.input_b')}</span> <span className="font-red font-bold">{invega}</span><span className="nowrap">{t('guide1.panelB.input_c')}</span></>,
                        <>{t('guide1.panelB.input_a')} <span className="nowrap">{t('d_apos')}</span><span className="font-red font-bold">{invega}</span>&nbsp;<span className="nowrap">{t('est_colon')}</span></>,
                      )}
                    </span>}
        outputLabel={<span>
                      {t('guide1.panelB.output_a')}
                      {enFr(
                        <><span className="font-red font-bold">{sustenna}</span></>,
                        <><span className="nowrap">{t('d_apos')}<span className="font-red font-bold">{sustenna}</span></span></>,
                      )}
                      {t('guide1.panelB.output_b')}<span className="nowrap">{enFr("", t('est_colon'))}</span>
                      <br/><br/>
                    </span>}
        doseIO={doses}
        bgOutput={'bg-peach'}
        colorOutput={'font-light-orange'}
      />
      <br/><br/>
      <footer>
        <small>‡ {t('guide1.panelB.foot_a')}</small>
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