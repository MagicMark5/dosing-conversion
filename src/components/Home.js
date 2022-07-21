import { Link } from 'react-router-dom';
import '../styles/Home.scss';

import Chevron from './materials/Chevron';

export default function Home({modal}) {
  return (
    <div className="home">
      <div className={modal ? "blur home-bg" : "home-bg"}>
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
    </div>
  )
}