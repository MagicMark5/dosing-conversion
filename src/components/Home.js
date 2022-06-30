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
        <Chevron heading={<h1 className="chevron-text">Dosing Conversion Guides</h1>} />
        <div className="buttons">
          <Link className="btn left" to="/dosing-tool/1">
            <div className="ghost-arrow arrow-left"></div>
            <p>Oral Antipsychotics to INVEGA&nbsp;SUSTENNA®<br/> Dosing Conversion Guide</p>
          </Link>
          <Link className="btn right" to="/dosing-tool/2">
            <div className="ghost-arrow arrow-right"></div>
            <p>INVEGA SUSTENNA® to INVEGA&nbsp;TRINZA®<br/> Dosing Conversion Guide</p>
          </Link>
        </div>
      </div>
      <BalanceSustenna reg={reg} />
      <br/><br/>
      <BalanceTrinza reg={reg} />
      <br/><br/>
    </div>
  )
}