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
          Sunlight reaches Earth's atmosphere and is scattered in all directions by
          all the gases and particles in the air. Blue light is scattered more than
          the other colors because it travels as shorter, smaller waves. This is why
          we see a blue sky most of the time.
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