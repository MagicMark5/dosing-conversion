import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import ChevronHeader from './materials/ChevronHeader';
import PanelA from './accordion/PanelA';

import '../styles/Dosing.scss';
import '../styles/AccessibleAccordion.scss';
import '../styles/panels.scss';
import PanelB from './accordion/PanelB';
import PanelC from './accordion/PanelC';


export default function DosingInvegaSustenna({ reg, modal }) {
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
      value: <span>25<sup>‡</sup>-50 mg</span>,
      bgColor: "bg-red",
      fontColor: "font-red",
    }
  };
  
  return (
    <main className={`nav-shadow ${modal ? "blur" : ""}`}>
      <ChevronHeader
        bgLeft={'bg-header-orange'}
        text={<>Oral Antipsychotic to INVEGA&nbsp;SUSTENNA{reg} Conversion&nbsp;Guide</>}
        bgRight={'bg-header-red'}
      />
      <section className="Dosing-section">
        <h3 className="font-orange font-bold">Switching to INVEGA SUSTENNA{reg} from Oral Antipsychotic Medications</h3>
        <p>
          For patients who have never taken oral paliperidone or oral/injectable risperidone, tolerability should be established with oral paliperidone or oral risperidone prior to initiating treatment with INVEGA SUSTENNA{reg}.
          <br/><br/>
          There are no systematically collected efficacy or safety data to specifically address switching patients with schizophrenia or schizoaffective disorder from other antipsychotics to INVEGA SUSTENNA{reg} or concerning concomitant administration with other antipsychotics.
          <br/><br/>
          Very rare cases of severe hypersensitivity after injection with 1-month injectable paliperidone have been reported during post-marketing experience in patients who have previously tolerated oral paliperidone or oral risperidone. Care should be taken to avoid exposure to those that are suspected to be hypersensitive or have shown hypersensitivity reactions to any of the excipients.
        </p>
        
          <Accordion 
            allowMultipleExpanded={true} 
            allowZeroExpanded={true}
          >
            <AccordionItem>
              <AccordionItemHeading onClick={blurTarget} aria-level={ariaLevel}>
                <AccordionItemButton>
                  Switching from Other Oral Antipsychotics
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <PanelA />
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading onClick={blurTarget} aria-level={ariaLevel}>
                <AccordionItemButton>
                  Switching from INVEGA® Extended-release Tablets
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <PanelB doses={doses} />
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading onClick={blurTarget} aria-level={ariaLevel}>
                <AccordionItemButton>
                  INVEGA SUSTENNA® Monthly Maintenance Dosing
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <PanelC />
              </AccordionItemPanel>
            </AccordionItem>              
        </Accordion>
      </section>      
    </main>
  )
};