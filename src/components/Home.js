import { Link } from 'react-router-dom';
import './Home.css';

import BalanceSustenna from './balance/BalanceSustenna';
import BalanceTrinza from './balance/BalanceTrinza';

export default function Home() {
  const reg = <sup>&reg;</sup>; // ®

  return (
    <div className="home">
      <h1>INVEGA SUSTENNA{reg}<br/> Dosing Conversion Tool </h1>
      <div className="grid-2x2 home-grid">
        <p>Switch your patients from oral antipsychotics<br/> to INVEGA SUSTENNA{reg}</p>
        <p>Switch your patients from INVEGA SUSTENNA{reg}<br/> to INVEGA TRINZA{reg}</p>
        <Link className="bg-yellow btn" to="/dosing-tool-invega-sustenna">Oral Antipsychotics to INVEGA&nbsp;SUSTENNA®<br/> Dosing Conversion Guide</Link>
        <Link className="bg-blue btn" to="/dosing-tool-invega-trinza">INVEGA SUSTENNA® to INVEGA&nbsp;TRINZA®<br/> Dosing Conversion Guide</Link>
      </div>
      <BalanceSustenna reg={reg} />
      <br/><br/>
      <BalanceTrinza reg={reg} />
      <br/><br/>
    </div>
  )
}