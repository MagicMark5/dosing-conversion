import { useState } from 'react';
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
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);

  const ariaLevelForAccordionHeadings = 3;

  // conversions of once-daily INVEGA dose to Once-monthly Sustenna maintenance dose
  const doses = {
    "12 mg": "150 mg",
    "6 mg": "75 mg",
    "3 mg": "25*-50 mg",
  };
  
  return (
    <main className={`nav-shadow ${modal ? "blur" : ""}`}>
      <ChevronHeader text={<>Oral Antipsychotic to INVEGA&nbsp;SUSTENNA{reg} Conversion Guide</>} />
      <section className="Dosing-section">
        <h3 className="font-orange bold">Switching to INVEGA SUSTENNA{reg} from Oral Antipsychotic Medications</h3>
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
              <AccordionItemHeading 
                onClick={(e) => {
                  setOpenOne(!openOne);
                  e.target.blur();
                }} 
                aria-level={ariaLevelForAccordionHeadings}
              >
                <AccordionItemButton>
                  Switching from Other Oral Antipsychotics
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={openOne ? "accordion__panel accordion__open" : "accordion__panel" }>
                <PanelA />
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading 
                onClick={(e) => {
                  setOpenTwo(!openTwo);
                  e.target.blur();
                }}
                aria-level={ariaLevelForAccordionHeadings}
              >
                <AccordionItemButton>
                  Switching from INVEGA® Extended-release Tablets
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={openTwo ? "accordion__panel accordion__open" : "accordion__panel" }>
                <PanelB doses={doses} />
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading 
                onClick={(e) => {
                  setOpenThree(!openThree);
                  e.target.blur();
                }}
                aria-level={ariaLevelForAccordionHeadings}
              >
                <AccordionItemButton>
                  INVEGA SUSTENNA® Monthly Maintenance Dosing
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={openThree ? "accordion__panel accordion__open" : "accordion__panel" }>
                <PanelC />
              </AccordionItemPanel>
            </AccordionItem>              
        </Accordion>
      </section>      
    </main>
  )
};