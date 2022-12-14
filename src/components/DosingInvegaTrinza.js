import DoseCalc from './DoseCalc';
import ChevronHeader from './materials/ChevronHeader';
// Stylesheets
import '../styles/Dosing.scss';
import '../styles/AccessibleAccordion.scss';
import '../styles/panels.scss';
// images
import icon_alert from '../assets/icon_alert.png';
import icon_calendar from '../assets/icon_calendar.png';
import icon_days from '../assets/icon_days.png';
import seven_days_fr from '../assets/seven_days_fr.png';
import icon_reminder from '../assets/icon_reminder.png';
import icon_syringe from '../assets/icon_syringe.png';
// Accordion 
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import { useTranslation } from "react-i18next";
import { useContext } from 'react';
import TranslationContext from '../context/TranslationContext';

export default function DosingInvegaTrinza({ reg, modal }) {
  // dosing conversions of sustenna to trinza
  const { t } = useTranslation();
  const { enFr, sustenna, trinza, d_sustenna, d_trinza, qu_sustenna } = useContext(TranslationContext); // brand name strings  
  
  // Conversions of doses
  // The last word of the snake-case css class must be the color
  const doses = {
    "50 mg": {
      value: "175 mg",
      bgColor: "bg-light-grey",
      fontColor: "font-light-grey",
    },
    "75 mg": {
      value: "263 mg",
      bgColor: "bg-trinza-blue",
      fontColor: "font-trinza-blue",
    },
    "100 mg": {
      value: "350 mg",
      bgColor: "bg-light-orange",
      fontColor: "font-light-orange",
    },
    "150 mg": {
      value: "525 mg",
      bgColor: "bg-red",
      fontColor: "font-red",
    },
  };

  return (
    <main className={`nav-shadow ${modal ? "blur" : ""}`}>
      <ChevronHeader
        bgLeft={"bg-trinza-left"}
        text={enFr(
          <>{sustenna} to {trinza}<br/> {t('guide2.h1')}</>,
          <>{t('guide2.h1')} {trinza} à partir {d_sustenna}</>
        )}
        sidePad="side-pad-60"
        bgRight={"bg-trinza-right"}
        bgRectangle={'bg-trinza-blue'}
        bgTriangle={'blue-triangle'}        
      />
      <section className='Dosing-section'>
        <h2 className='font-red font-bold'>
          {enFr(
            <>{t('switching_from')}{sustenna} {enFr("to", "à partir")} {trinza}</>,
            <>{t('switching_from')}{trinza} {enFr("to", "à partir")} {d_sustenna}</>,
          )}
        </h2>
        <header className="sustenna-to-trinza">
          <div>
            <img
              src={icon_alert} 
              alt=""
            />
          </div>
          <p className='font-grey'>
            {trinza} {t('guide2.p_a')} {enFr(sustenna, qu_sustenna)} {t('guide2.p_b')} {enFr(sustenna, d_sustenna)} {t('guide2.p_c')} {trinza}.
          </p>
        </header>

        {/* Accordion that is always expanded */}
        <Accordion preExpanded={['trinza']}>
          <AccordionItem uuid={'trinza'}>
            <AccordionItemHeading>
              <div className="accordion__button panelD-button" id="accordion__heading-trinza" aria-disabled="true" aria-controls="accordion__panel-trinza" data-accordion-component="AccordionItemButton">
                <strong>
                  {enFr(
                    <>Recommended {trinza} dosing</>,
                    <>Posologie recommandée {d_trinza}</>,
                  )}
                </strong>
              </div>
            </AccordionItemHeading>
            <AccordionItemPanel className='panelD'>
              <article className='sustenna-to-trinza'>
                
                <div className='icon-text-wrapper'>
                  <div className='icon-text-pair'>
                    <img src={icon_calendar} alt="" />
                    <p>{t('guide2.text_1a')} {trinza} {t('guide2.text_1b')} {enFr(sustenna, d_sustenna)}{enFr(" dose.", ".")}</p>
                  </div>
                  <div className='icon-text-pair'>
                    <img src={enFr(icon_days, seven_days_fr)} alt="" />
                    <p>
                      {enFr(
                        <>{trinza} may be administered <span className='nowrap'>+/- 7 days</span> {t('guide2.text_3a')} {sustenna} dose.</>,
                        <>{trinza} peut être administré jusqu’à <span className='nowrap'>7 jours</span> {t('guide2.text_3a')} {d_sustenna}.</>,
                      )}
                    </p>
                  </div>             
                </div>

                <div className='icon-text-wrapper'>
                  <div className='icon-text-pair'>
                    <img src={icon_syringe} alt="" />
                    <p>
                      {enFr(
                        <>{trinza} {t('guide2.text_2a')} {sustenna} dose using the equivalent <span className='nowrap'>3.5-fold</span> multiplier.</>,
                        <>La dose {d_trinza} {t('guide2.text_2a')} {d_sustenna}, c’est-à-dire en multipliant par un facteur <span className='nowrap'>de 3,5.</span></>,
                      )}
                    </p>
                  </div>
                  <div className='icon-text-pair'>
                    <img src={icon_reminder} alt="" />
                    <p>
                      {enFr(
                        <>Following the initial {trinza} dose, administer {trinza} every <span className='nowrap'>3 months.</span> Dose can be adjusted at this interval between <span className='nowrap'>175 mg–525 mg</span> based on individual tolerability and/or efficacy.</>,
                        <>Après la dose initiale {d_trinza}, administrer {trinza} tous les <span className='nowrap'>3 mois.</span> La dose peut être ajustée à cet intervalle entre <span className='nowrap'>175 mg et 525 mg</span> en fonction de la tolérabilité et/ou de l’efficacité propre à chaque patient.</>,
                      )}
                    </p>
                  </div>                  
                </div>                

                <div className='sustenna-to-trinza-calc'>
                  <DoseCalc
                    inputLabel={<span>
                                  {enFr(
                                    <>If the last <span className='font-bold font-light-red'>INVEGA SUSTENNA{reg}</span> dose is:</>,
                                    <>Si la dernière dose d’<span className='font-bold font-light-red'>INVEGA SUSTENNA®</span> est <span className='nowrap'>de :</span></>,
                                  )}
                                </span>}
                    outputLabel={<span>
                                  {enFr(
                                    <>Initiate <span className='font-bold font-trinza-blue nowrap'>INVEGA&nbsp;TRINZA{reg}</span> at the following dose:</>,
                                    <>Instaurer <span className='font-bold font-trinza-blue nowrap'>INVEGA TRINZA®</span> à la dose <span className='nowrap'>suivante :</span></>,
                                  )}
                                </span>}
                    doseIO={doses}
                    bgOutput={'bg-light-blue'}
                    colorOutput={'font-dark-blue'}
                    colWidth={'width-50p'}
                  />
                  <div className='calc-footer'>
                    <small>
                      {enFr(
                        <>Adapted from the {trinza} Product Monograph.</>,
                        <>D’après la monographie {d_trinza}.</>,
                      )}
                    </small>
                  </div>
                </div>
              </article>
            </AccordionItemPanel>
          </AccordionItem>            
        </Accordion>
      </section>
    </main>
  )
};