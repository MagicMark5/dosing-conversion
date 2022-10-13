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
import icon_reminder from '../assets/icon_reminder.png';
import icon_syringe from '../assets/icon_syringe.png';
// Accordion 
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

export default function DosingInvegaTrinza({ reg, modal }) {
  // dosing conversions of sustenna to trinza
  
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
        text={<>INVEGA&nbsp;SUSTENNA{reg} to INVEGA&nbsp;TRINZA{reg}<br/> Dosing Conversion Guide</>}
        bgRight={"bg-trinza-right"}
        bgRectangle={'bg-blue'}
        bgTriangle={'blue-triangle'}        
      />
      <section className='Dosing-section'>
        <h3 className='font-red font-bold'>
          Switching from INVEGA&nbsp;SUSTENNA{reg} to INVEGA&nbsp;TRINZA{reg}
        </h3>
        <header className="sustenna-to-trinza">
          <div>
            <img
              src={icon_alert} 
              alt="!"
            />
          </div>
          <p className='font-grey'>
            <span className='nowrap'>INVEGA&nbsp;TRINZA{reg}</span> is to be used only after <span className='nowrap'>INVEGA&nbsp;SUSTENNA{reg}</span> has been established as adequate treatment for at least four months. To establish a consistent maintenance dose, it is recommended that the last two doses of <span className='nowrap'>INVEGA&nbsp;SUSTENNA{reg}</span> be the same dosage strength before starting <span className='nowrap'>INVEGA&nbsp;TRINZA{reg}</span>.
          </p>
        </header>

        {/* Accordion that is always expanded */}
        <Accordion preExpanded={['trinza']}>
          <AccordionItem uuid={'trinza'}>
            <AccordionItemHeading>
              <AccordionItemButton className='accordion__button panelD-button'>
                <strong>Recommended <span className='nowrap'>INVEGA&nbsp;TRINZA{reg}</span> dosing</strong>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className='panelD'>
              <article className='sustenna-to-trinza'>

                <div className='icon-text-wrapper'>
                  <div className='icon-text-pair'>
                    <img src={icon_calendar} alt="" />
                    <p>Initiate <span className='nowrap'>INVEGA TRINZA®</span> in place of the next scheduled <span className='nowrap'>INVEGA SUSTENNA®</span> dose.</p>
                  </div>
                  <div className='icon-text-pair'>
                    <img src={icon_days} alt="+/- 7 days" />
                    <p><span className='nowrap'>INVEGA TRINZA®</span> may be administered <span className='nowrap'>+/- 7 days</span> from the next scheduled <span className='nowrap'>INVEGA SUSTENNA®</span> dose.</p>
                  </div>                  
                </div>

                <div className='icon-text-wrapper'>
                  <div className='icon-text-pair'>
                    <img src={icon_syringe} alt="" />
                    <p><span className='nowrap'>INVEGA TRINZA®</span> dose should be based on the previous <span className='nowrap'>INVEGA SUSTENNA®</span> dose using the equivalent <span className='nowrap'>3.5-fold</span> multiplier.</p>
                  </div>
                  <div className='icon-text-pair'>
                    <img src={icon_reminder} alt="" />
                    <p>Following the initial <span className='nowrap'>INVEGA TRINZA®</span> dose, administer <span className='nowrap'>INVEGA TRINZA®</span> every 3 months. Dose can be adjusted at this interval between <span className='nowrap'>175 mg – 525 mg</span> based on individual tolerability and/or efficacy.</p>
                  </div>                  
                </div>                

                <div className='sustenna-to-trinza-calc'>
                  <DoseCalc
                    inputLabel={<span>If the last <span className='font-bold font-light-red'>INVEGA SUSTENNA{reg}</span> dose is:</span>}
                    outputLabel={<span>Initiate <span className='font-bold font-trinza-blue nowrap'>INVEGA&nbsp;TRINZA{reg}</span> at the following dose:</span>}
                    doseIO={doses}
                    bgOutput={'bg-light-blue'}
                    colorOutput={'font-dark-blue'}
                    colWidth={'width-50p'}
                  />
                </div>
              </article>
            </AccordionItemPanel>
          </AccordionItem>            
        </Accordion>
      </section>
    </main>
  )
};