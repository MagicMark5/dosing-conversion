import { Link } from 'react-router-dom';

export default function Home() {
  const reg = <sup>&reg;</sup>; // ®

  return (
    <div className="home">
      <h1>INVEGA SUSTENNA{reg} Dosing Conversion Tool </h1>
      <div className="grid-2x2">
        <p>Switch your patients from oral antipsychotics to INVEGA SUSTENNA{reg}</p>
        <p>Switch your patients from INVEGA SUSTENNA{reg} to INVEGA TRINZA{reg}</p>
        <Link to="/dosing-tool-invega-sustenna">Oral Antipsychotics to INVEGA SUSTENNA® Dosing Conversion Guide</Link>
        <Link to="/dosing-tool-invega-trinza">INVEGA SUSTENNA® to INVEGA TRINZA® Dosing Conversion Guide</Link>
      </div>
    </div>
  )
}