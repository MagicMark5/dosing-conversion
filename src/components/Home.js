import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <h1>INVEGA SUSTENNA® Dosing Conversion Tool </h1>
      <div className="grid-2x2">
        <p>Switch your patients from oral antipsychotics to INVEGA SUSTENNA®</p>
        <p>Switch your patients from INVEGA SUSTENNA® to INVEGA TRINZA®</p>
        <Link to="/dosing-tool-invega-sustenna">Oral Antipsychotics to INVEGA SUSTENNA® Dosing Conversion Guide</Link>
        <Link to="/dosing-tool-invega-trinza">INVEGA SUSTENNA® to INVEGA TRINZA® Dosing Conversion Guide</Link>
      </div>
    </div>
  )
}