import dose_100 from "../../assets/dose_100.png";
import dose_150 from "../../assets/dose_150.png";

export default function PanelA() {
  return (
    <article>
      <span>When starting INVEGA SUSTENNA&reg;</span>
      <ol className="panel-a-ol">
        <li>Gradually discontinue the previous oral antipsychotic in accordance with the appropriate prescribing information. </li>
        <li>Initiate INVEGA SUSTENNA&reg; according to the recommended initiation dosing regimen below: </li>
      </ol>

      <figure>
        <div className="day-muscle">
          <label className="day">DAY 1</label>
          <br/>
          <label className="muscle">DELTOID<br/>MUSCLE*</label>
        </div>

        <div className="join-label">
          <label className="week">1 WEEK</label>
          <hr />
          <label className="plus_minus_days"><span>+/-</span> 4 DAYS</label>
        </div>

        <div className="day-muscle">
          <label className="day">DAY 8</label>
          <br/>
          <label className="muscle">DELTOID<br/>MUSCLE*</label>
        </div>
      </figure>
      
      <br/>
      <small>* In order to avoid a missed dose<br/>Adapted from the INVEGA SUSTENNA&reg; Product Monograph.</small>    
    </article>
  )
}