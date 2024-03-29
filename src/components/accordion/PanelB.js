import DoseCalc from "../DoseCalc";
import { useTranslation } from "react-i18next";
import { useContext } from 'react';
import TranslationContext from '../../context/TranslationContext';
// custom hooks
import useFootnoteRefs from "../../hooks/useFootnoteRefs";

// "Switch from INVEGA Extended-Release Tablets" 2nd Panel on /conversionguide1 page
export default function PanelB({ doses }) {
  const { t } = useTranslation();
  // brand name strings
  const { enFr, invega, sustenna, d_sustenna } = useContext(TranslationContext);
  // url parts to use for footnote refs
  const { base_url, page } = useFootnoteRefs();

  return (
    <article>
      <p className="panelB-p font-grey">
        {t('guide1.panelB.span_a')}{enFr(sustenna, d_sustenna)}{t('guide1.panelB.span_b')}{invega}{t('guide1.panelB.span_c')}{enFr(sustenna, d_sustenna)}{t('guide1.panelB.span_d')}
      </p>
      {/* First dosing "calculator" tab list that uses the {doses} object prop for each input/output */}
      {/* Inputs are treated as tabs, the output is treated as tab panel */}
      <DoseCalc
        inputLabel={<span>
                      {enFr(
                        <>{t('guide1.panelB.input_a')} <span className="nowrap">{t('guide1.panelB.input_b')}</span> <span className="font-red font-bold">{invega}</span><span className="nowrap">{t('guide1.panelB.input_c')}</span></>,
                        <>{t('guide1.panelB.input_a')} <span className="nowrap">{t('d_apos')}</span><span className="font-red font-bold">{invega}</span>&nbsp;<span className="nowrap">{t('est_colon')}</span></>,
                      )}
                    </span>}
        outputLabel={<span>
                      {enFr(
                        <>{t('guide1.panelB.output_a')}<span className="font-red font-bold">{sustenna}</span>{t('guide1.panelB.output_b')}</>,
                        <>{t('guide1.panelB.output_a')}<span className="nowrap">{t('d_apos')}<span className="font-red font-bold">{sustenna}</span></span>{t('guide1.panelB.output_b')}</>,
                      )}
                      <span className="nowrap">{enFr("", t('est_colon'))}</span>
                    </span>}
        ariaLabelInput={t('guide1.panelB.aria_input_prefix')}
        ariaLabelOutput={t('guide1.panelB.aria_output_prefix')}
        doseIO={doses}
        bgOutput={'bg-peach'}
        colorOutput={'font-light-orange'}
        ariaLabel={'heading__oral_AS_to_sustenna'}
      />
      <footer className="panelB-foot">
        <h3 id="panelB-footnote-label">Footnotes</h3>
        <ul>
          <li><small id="footnote_doubledagger"><a href={`${base_url}/#/${page}#footnote-doubledagger-ref`} aria-label="Double dagger footnote">‡</a> {t('guide1.panelB.foot_a')}</small></li>
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