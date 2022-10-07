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
          <label className="day">DAY&nbsp;1</label>
          <br/>
          <label className="muscle">DELTOID<br/>MUSCLE*</label>
        </div>

        <img 
          src={dose_150} 
          alt="Initiation Dose 150 mg"
          width={400}
        />

        <div className="join-label">
          <label className="week">1&nbsp;WEEK</label>
          <hr />
          <label className="days"><span>+/-</span> 4 DAYS<sup>&dagger;</sup></label>
        </div>

        <img 
          src={dose_100} 
          alt="Initiation Dose 100 mg"
          width={400}
        />

        <div className="day-muscle">
          <label className="day">DAY&nbsp;8</label>
          <br/>
          <label className="muscle">DELTOID<br/>MUSCLE*</label>
        </div>
      </figure>
      
      <br/>
      <footer>
        <small>* See details about needle selection based on selected injection area and patient weight in the product monograph.</small>
        <small>† In order to avoid a missed dose</small>
        <small>Adapted from the INVEGA SUSTENNA&reg; Product Monograph.</small>
      </footer>
    </article>
  )
}