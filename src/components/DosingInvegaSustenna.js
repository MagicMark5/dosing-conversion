import './DosingInvegaSustenna.css';

import Nav from './Nav';
import Accordion from './Accordion';
import BalanceSustenna from './balance/BalanceSustenna';

export default function DosingInvegaSustenna({ reg }) {
  
  return (
    <section className="DosingInvegaSustenna">
      <Nav />
      <h2>Oral Antipsychotic to INVEGA&nbsp;SUSTENNA{reg} Conversion Tool</h2>
      <h3>Switching to INVEGA SUSTENNA® from Oral Antipsychotic Medications</h3>
      <p>
        For patients who have never taken oral paliperidone or oral/injectable risperidone, tolerability should be established with oral paliperidone or oral risperidone prior to initiating treatment with INVEGA SUSTENNA{reg}.
        <br/><br/>
        Very rare cases of severe hypersensitivity after injection with INVEGA SUSTENNA{reg} have been reported during post-marketing experience in patients who have previously tolerated oral paliperidone or oral risperidone. Take care to avoid exposure to those that are suspected to be hypersensitive or have shown hypersensitivity reactions to any of the excipients
      </p>
      <div className="wrapper">
        <Accordion title={<span>Switch from <u>Other</u> Oral Antipsychotics</span>}>
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
          It's really hot inside Jupiter! No one knows exactly how hot, but
          scientists think it could be about 43,000°F (24,000°C) near Jupiter's
          center, or core.
        </Accordion>
        <Accordion title={<span>INVEGA SUSTENNA{reg} Monthly Maintenance Dosing</span>}>
          A black hole is an area of such immense gravity that nothing -- not even
          light -- can escape from it.
        </Accordion>
      </div>
      <p>
        There are no systematically collected efficacy or safety data to specifically address switching patients with schizophrenia or schizoaffective disorder from other antipsychotics to INVEGA SUSTENNA® or concerning concomitant administration with other antipsychotics.
      </p>
      <br/>
      <BalanceSustenna />
      <br/><br/>
    </section>
  )
};