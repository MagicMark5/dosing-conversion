import Nav from './Nav';
import DoseCalc from './DoseCalc';
import BalanceSustenna from './balance/BalanceSustenna';
import BalanceTrinza from './balance/BalanceTrinza';

export default function DosingInvegaTrinza({ reg }) {
  // dosing conversions of sustenna to trinza
  const doses = {
    "50 mg": "175 mg",
    "75 mg": "263 mg",
    "100 mg": "350 mg",
    "150 mg": "525 mg", 
  };


  return (
    <section className="Dosing-section">
      <Nav />
      <h2>INVEGA&nbsp;SUSTENNA{reg} to INVEGA&nbsp;TRINZA{reg}<br/> Dosing Conversion Guide</h2>
      <h3>Switching from INVEGA&nbsp;SUSTENNA{reg} to INVEGA&nbsp;TRINZA{reg}</h3>
      <p>
        INVEGA&nbsp;TRINZA{reg} is to be used only after INVEGA&nbsp;SUSTENNA{reg} has been established as adequate treatment for at least four months. To establish a consistent maintenance dose, it is recommended that the last two doses of INVEGA&nbsp;SUSTENNA{reg} be the same dosage strength before starting INVEGA&nbsp;TRINZA{reg}.
        <br/><br/>
        <strong><u>Recommended INVEGA&nbsp;TRINZA{reg} dosing</u></strong>
        <ul>
          <li>Initiate INVEGA&nbsp;TRINZA{reg} in place of the next scheduled INVEGA&nbsp;SUSTENNA{reg} dose</li>
          <li>INVEGA&nbsp;TRINZA{reg} dose should be based on the previous INVEGA&nbsp;SUSTENNA{reg} dose using the equivalent 3.5-fold multiplier</li>
          <li>INVEGA&nbsp;TRINZA{reg} may be administered +/- 7 days from the next scheduled INVEGA&nbsp;SUSTENNA{reg} dose</li>
          <li>Following the initial INVEGA&nbsp;TRINZA{reg} dose, administer INVEGA&nbsp;TRINZA{reg} every 3 months. Dose can be adjusted at this interval between 175 mg – 525 mg based on individual tolerability and/or efficacy.</li>
        </ul>
      </p>
      <div className='wrapper'>
        <DoseCalc
          inputLabel={<span>If the last INVEGA&nbsp;SUSTENNA{reg} dose is:</span>}
          outputLabel={<span>Initiate INVEGA&nbsp;TRINZA{reg} at the following dose:</span>}
          doseIO={doses}
        />
        <br/><br/>
        <small>Adapted from the INVEGA TRINZA® Product Monograph.</small>
      </div>
      <br/><br/>
      <BalanceSustenna reg={reg} />
      <br/><br/>
      <BalanceTrinza reg={reg} />
      <br/><br/>
    </section>
  )
};