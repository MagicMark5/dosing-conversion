import './Dosing.css';
import curve from '../assets/curve.png';
// import circle from '../assets/circle-4x.png';

import './AccessibleAccordion.css';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// import Accordion from './Accordion';
import BalanceSustenna from './balance/BalanceSustenna';
import DoseCalc from './DoseCalc';

export default function DosingInvegaSustenna({ reg, modal }) {

  // conversions of once-daily INVEGA dose to Once-monthly Sustenna maintenance dose
  const doses = {
    "12 mg": "150 mg",
    "6 mg": "75 mg",
    "3 mg": "25*-50 mg",
  };

  const units = (text) => <span className='units'>{text}</span>;
  
  return (
    <section className={modal ? "blur Dosing-section" : "Dosing-section"}>
      <h2>Oral Antipsychotic to INVEGA&nbsp;SUSTENNA{reg} Conversion Tool</h2>
      <h3>Switching to INVEGA SUSTENNA{reg} from Oral Antipsychotic Medications</h3>
      <p>
        For patients who have never taken oral paliperidone or oral/injectable risperidone, tolerability should be established with oral paliperidone or oral risperidone prior to initiating treatment with INVEGA SUSTENNA{reg}.
        <br/><br/>
        Very rare cases of severe hypersensitivity after injection with INVEGA SUSTENNA{reg} have been reported during post-marketing experience in patients who have previously tolerated oral paliperidone or oral risperidone. Take care to avoid exposure to those that are suspected to be hypersensitive or have shown hypersensitivity reactions to any of the excipients
      </p>
      <div className="wrapper">
        <Accordion>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                        Switch from <u>Other</u> Oral Antipsychotics
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <span>When starting INVEGA SUSTENNA{reg}</span>
                    <ol>
                      <li>Gradually discontinue the previous oral antipsychotic in accordance with the appropriate prescribing information. </li>
                      <li>Initiate INVEGA SUSTENNA{reg} according to the recommended initiation dosing regimen below: </li>
                    </ol>
                    <table className='table1'>
                      <tbody>
                        <tr>
                          <td>
                            <strong>Day 1</strong><br/>
                            Deltoid Muscle<br/>
                            150 mg
                          </td>
                          <td>
                            1 week +/- 4 days*
                          </td>
                          <td>
                            <strong>Day 8</strong><br/>
                            Deltoid Muscle<br/>
                            100 mg
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <br/>
                    <small>* In order to avoid a missed dose<br/>Adapted from the INVEGA SUSTENNA{reg} Product Monograph.</small>
                  </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                        Switch from INVEGA{reg} Extended-Release Tablets
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <span>Following administration of the INVEGA SUSTENNA{reg} initiation regimen, patients previously stabilized on different doses of INVEGA{reg} Extended-Release Tablets can attain similar paliperidone steady-state exposure during maintenance treatment with the INVEGA SUSTENNA{reg} doses displayed below.</span>
                    <br/><br/>
                    <DoseCalc
                      inputLabel={<span>If the once-daily INVEGA{reg} dose is:</span>}
                      outputLabel={<span>Once-monthly INVEGA SUSTENNA{reg} maintenance dose to attain similar steady-state paliperidone exposure during maintenance treatment:</span>}
                      doseIO={doses}
                    />
                    <br/><br/>
                    <small>* Note: 25 mg dose is not available in Canada<br/>Adapted from the INVEGA SUSTENNA{reg} Product Monograph.</small>
                  </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                        INVEGA SUSTENNA{reg} Monthly Maintenance Dosing
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                  <div className='grid-2x2'>
                    <div class="grid-row-spans-all-cols">
                      <span>To avoid missed monthly doses,<br/> patients may be given their monthly maintenance injection +/- 7 days from the monthly time point</span>
                    </div>
                    <br/><br/>
                    <div className='grid-row-2-col-1'>

                      <div className='dose-card'>
                        <div className='dosing flex-row'>
                          <div className='dose-label'>Maintenance Dose for Schizophrenia</div><img className="curve" src={curve} alt="" />
                          <div className='dose-values width-75 flex-col'>
                            <div className='flex-around full-width'>
                              <span>25 {units(`mg`)}</span>
                              <span>50 {units(`mg`)}</span>
                              <span><strong>75 {units(`mg`)}<sup className='double-dagger'>&dagger;&dagger;</sup></strong></span>
                            </div>
                            <div className='flex-around width-70'>
                              <span>100 {units(`mg`)}</span>
                              <span>150 {units(`mg`)}</span>
                            </div>
                          </div>
                        </div>
                        {/* <img className='circle' src={circle} alt=""  /> */}
                      </div>

                      <div className='dose-card'>
                        <div className='dosing flex-row'>
                          <div className='dose-label'>Maintenance Dose for Schizophrenia</div><img className="curve" src={curve} alt="" />
                          <div className='dose-values grid-2x2 grid-dosing'>
                            <span className='text-right'>50 {units(`mg`)}</span>
                            <span className='text-left'>75 {units(`mg`)}</span>
                            <span className='text-right'>100 {units(`mg`)}</span>
                            <span className='text-left'>150 {units(`mg`)}</span>
                          </div>
                        </div>
                        {/* <img className='circle' src={circle} alt=""  /> */}
                      </div>              
                      
                    </div>
                    <div className="grid-row-2-col-2">
                      <span>Note: For patients with schizophrenia, the recommended monthly maintenance dose is 75 mg, with a range of 25-150 mg based on individual patient tolerability and/or efficacy. The 25 mg dose is not available in Canada. For patients with schizoaffective disorder, the recommended monthly maintenance dose is within the range of 50-150 mg based on tolerability and/or efficacy. Please see the Product Monograph for complete dosing information.</span>
                    </div>
                  </div>
                  </AccordionItemPanel>
              </AccordionItem>              
          </Accordion>

        {/* <Accordion title={<span>Switch from <u>Other</u> Oral Antipsychotics</span>}>
          <span>When starting INVEGA SUSTENNA{reg}</span>
          <ol>
            <li>Gradually discontinue the previous oral antipsychotic in accordance with the appropriate prescribing information. </li>
            <li>Initiate INVEGA SUSTENNA{reg} according to the recommended initiation dosing regimen below: </li>
          </ol>
          <table className='table1'>
            <tbody>
              <tr>
                <td>
                  <strong>Day 1</strong><br/>
                  Deltoid Muscle<br/>
                  150 mg
                </td>
                <td>
                  1 week +/- 4 days*
                </td>
                <td>
                  <strong>Day 8</strong><br/>
                  Deltoid Muscle<br/>
                  100 mg
                </td>
              </tr>
            </tbody>
          </table>
          <br/>
          <small>* In order to avoid a missed dose<br/>Adapted from the INVEGA SUSTENNA{reg} Product Monograph.</small>
        </Accordion>
        <Accordion title={<span>Switch from INVEGA{reg} Extended-Release Tablets</span>}>
          <span>Following administration of the INVEGA SUSTENNA{reg} initiation regimen, patients previously stabilized on different doses of INVEGA{reg} Extended-Release Tablets can attain similar paliperidone steady-state exposure during maintenance treatment with the INVEGA SUSTENNA{reg} doses displayed below.</span>
          <br/><br/>
          <DoseCalc
            inputLabel={<span>If the once-daily INVEGA{reg} dose is:</span>}
            outputLabel={<span>Once-monthly INVEGA SUSTENNA{reg} maintenance dose to attain similar steady-state paliperidone exposure during maintenance treatment:</span>}
            doseIO={doses}
          />
          <br/><br/>
          <small>* Note: 25 mg dose is not available in Canada<br/>Adapted from the INVEGA SUSTENNA{reg} Product Monograph.</small>
        </Accordion>
        <Accordion title={<span>INVEGA SUSTENNA{reg} Monthly Maintenance Dosing</span>}>
          <div className='grid-2x2'>
            <div class="grid-row-spans-all-cols">
              <span>To avoid missed monthly doses,<br/> patients may be given their monthly maintenance injection +/- 7 days from the monthly time point</span>
            </div>
            <br/><br/>
            <div className='grid-row-2-col-1'>

              <div className='dose-card'>
                <div className='dosing flex-row'>
                  <div className='dose-label'>Maintenance Dose for Schizophrenia</div><img className="curve" src={curve} alt="" />
                  <div className='dose-values width-75 flex-col'>
                    <div className='flex-around full-width'>
                      <span>25 {units(`mg`)}</span>
                      <span>50 {units(`mg`)}</span>
                      <span><strong>75 {units(`mg`)}<sup className='double-dagger'>&dagger;&dagger;</sup></strong></span>
                    </div>
                    <div className='flex-around width-70'>
                      <span>100 {units(`mg`)}</span>
                      <span>150 {units(`mg`)}</span>
                    </div>
                  </div>
                </div>
                <img className='circle' src={circle} alt=""  />
              </div>

              <div className='dose-card'>
                <div className='dosing flex-row'>
                  <div className='dose-label'>Maintenance Dose for Schizophrenia</div><img className="curve" src={curve} alt="" />
                  <div className='dose-values grid-2x2 grid-dosing'>
                    <span className='text-right'>50 {units(`mg`)}</span>
                    <span className='text-left'>75 {units(`mg`)}</span>
                    <span className='text-right'>100 {units(`mg`)}</span>
                    <span className='text-left'>150 {units(`mg`)}</span>
                  </div>
                </div>
                <img className='circle' src={circle} alt=""  />
              </div>              
              
            </div>
            <div className="grid-row-2-col-2">
              <span>Note: For patients with schizophrenia, the recommended monthly maintenance dose is 75 mg, with a range of 25-150 mg based on individual patient tolerability and/or efficacy. The 25 mg dose is not available in Canada. For patients with schizoaffective disorder, the recommended monthly maintenance dose is within the range of 50-150 mg based on tolerability and/or efficacy. Please see the Product Monograph for complete dosing information.</span>
            </div>
          </div>                
        </Accordion> */}
      </div>
      <p>
        There are no systematically collected efficacy or safety data to specifically address switching patients with schizophrenia or schizoaffective disorder from other antipsychotics to INVEGA SUSTENNA{reg} or concerning concomitant administration with other antipsychotics.
      </p>
      <br/>
      <BalanceSustenna reg={reg} />
      <br/><br/>
    </section>
  )
};