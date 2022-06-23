import { Link } from 'react-router-dom';
import './Home.css';

import Chevron from './materials/Chevron';
import BalanceSustenna from './balance/BalanceSustenna';
import BalanceTrinza from './balance/BalanceTrinza';

export default function Home() {
  const reg = <sup>&reg;</sup>; // ®

  return (
    <div className="home">
      <div className="home-bg">
        <Chevron heading={<h1 className="chevron-text">INVEGA SUSTENNA{reg}<br/> Dosing Conversion Guides</h1>} />
        <div className="grid-2x2 home-grid">
          <Link className="bg-yellow btn" to="/dosing-tool-invega-sustenna">Oral Antipsychotics to INVEGA&nbsp;SUSTENNA®<br/> Dosing Conversion Guide</Link>
          <Link className="bg-blue btn" to="/dosing-tool-invega-trinza">INVEGA SUSTENNA® to INVEGA&nbsp;TRINZA®<br/> Dosing Conversion Guide</Link>
        </div>
      </div>
      <BalanceSustenna reg={reg} />
      <br/><br/>
      <BalanceTrinza reg={reg} />
      <br/><br/>
    </div>
  )
}