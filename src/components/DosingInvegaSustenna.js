import '../styles/Dosing.scss';
import '../styles/AccessibleAccordion.scss';
import '../styles/panels.scss';

import { useTranslation } from "react-i18next";
import { useContext } from 'react';
import TranslationContext from '../context/TranslationContext';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import ChevronHeader from './materials/ChevronHeader';
// accordion children
import PanelA from './accordion/PanelA';
import PanelB from './accordion/PanelB';
import PanelC from './accordion/PanelC';
// custom hooks;
import useFootnoteRefs from '../hooks/useFootnoteRefs';
import { Helmet } from 'react-helmet-async';


export default function DosingInvegaSustenna({ modal }) {
  const { t } = useTranslation();
  // brand name strings
  const { enFr, invega, sustenna, d_sustenna } = useContext(TranslationContext);
  // url parts to use in footnote links
  const { base_url, page } = useFootnoteRefs();

  // Blur focus outline after a click
  const blurTarget = (e) => e.target.blur();

  const ariaLevel = 3;

  // conversions of once-daily INVEGA dose to Once-monthly Sustenna maintenance dose
  // The last word of the snake-case css class must be the color (see DoseCalc.js)
  const doses = {
    "12 mg": {
      value: "150 mg",
      bgColor: "bg-light-grey",
      fontColor: "font-light-grey",
    },
    "6 mg": {
      value: "75 mg",
      bgColor: "bg-light-orange",
      fontColor: "font-light-orange",
    },
    "3 mg": {
      value: <span>25<sup style={{ fontFamily: "Apex Sans" }}><a id="footnote-doubledagger-ref" href={`${base_url}/#/${page}#footnote_doubledagger`} aria-describedby="footnote_doubledagger" aria-label="To double dagger footnote">‡</a></sup>-50 mg</span>,
      bgColor: "bg-red",
      fontColor: "font-red",
    }
  };
  
  return (
    <>
      <Helmet>
        <title>{t("title_sustenna")}</title>
      </Helmet>
      <main className={`nav-shadow ${modal ? "blur" : ""}`}>
        <ChevronHeader
          bgLeft={'bg-header-orange'}
          text={<>{t('guide1.h1_a')}{sustenna} {enFr("", " à partir ")}<span className='nowrap'>{t('guide1.h1_b')}</span></>}
          bgRight={'bg-header-red'}
        />
        <section className="Dosing-section">
          <h2 className="font-orange font-bold">
            {t('guide1.h2_a')} {sustenna} {t('guide1.h2_b')}
          </h2>
          <p>
            {t('guide1.p1_a')}{sustenna}.
            <br/><br/>
            {t('guide1.p2_a')}{enFr(sustenna, d_sustenna)}{t('guide1.p2_b')}{enFr("", d_sustenna)}{enFr("", t('guide1.p2_c'))}
            <br/><br/>
            {t('guide1.p3')}
          </p>
          
            <Accordion 
              allowMultipleExpanded={true} 
              allowZeroExpanded={true}
            >
              <AccordionItem>
                <AccordionItemHeading onClick={blurTarget} aria-level={ariaLevel}>
                  <AccordionItemButton>
                    {enFr(
                      <span>{t('switching_from')} {t('guide1.panelA.h3')}</span>,
                      <span>{t('switching_from')} {sustenna} à partir d’autres {t('guide1.panelA.h3')}</span>
                    )}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <PanelA />
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading onClick={blurTarget} aria-level={ariaLevel}>
                  <AccordionItemButton>
                    {enFr(
                        <span>{t('switching_from')} {invega} {t('guide1.panelB.h3')}</span>,
                        <span>{t('switching_from')} {sustenna} à partir de comprimés {invega} à {t('guide1.panelB.h3')}</span>,
                    )}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <PanelB doses={doses} />
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading onClick={blurTarget} aria-level={ariaLevel}>
                  <AccordionItemButton>
                    {enFr(
                      <span>{sustenna} {t('guide1.panelC.h3')}</span>,
                      <span>{t('guide1.panelC.h3')} {d_sustenna}</span>,
                    )}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <PanelC />
                </AccordionItemPanel>
              </AccordionItem>              
          </Accordion>
        </section>      
      </main>
    </>
  )
};