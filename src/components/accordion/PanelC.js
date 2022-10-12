// images
import seven_days from "../../assets/seven_days.png";
import dose_maintenance_1 from "../../assets/dose_maintenance_1.png";
import dose_maintenance_2 from "../../assets/dose_maintenance_2.png";
// styles
import "../../styles/panels.scss";

export default function PanelC() {

  return (
    <article className="maintenance">
      <header className="maintenance">
        <img
          src={seven_days} 
          alt="+/- 7 days"
        />
        <p>To avoid missed monthly doses, patients may be given their monthly maintenance injection <strong style={{ whiteSpace: "nowrap" }}>+/- 7&nbsp;days</strong> from the monthly time point</p>
      </header>

      <section className="maintenance">
        <div className="day-muscle">
          <label className="day">MONTHLY</label>
          <br/>
          <label className="muscle">DELTOID OR GLUTEAL MUSCLE<sup>§</sup></label>
        </div>

        <figure className="maintenance">
          <h5>Maintenance Dose for Schizophrenia</h5>
          <img
            className="maintenance-dose-card"
            src={dose_maintenance_1}
            alt="25 mg  50 mg  75 mg‖  100 mg  150 mg"
          />
          <footer>
            <small><sup>‖</sup> Recommended dose</small>
          </footer>
        </figure>

        <figure className="maintenance">
          <h5>Maintenance Dose for Schizoaffective Disorder</h5>
          <img
            className="maintenance-dose-card"
            src={dose_maintenance_2}
            alt="50 mg 	75 mg  100 mg   150 mg"
          />
        </figure>        
      </section>

      <footer>
        <small>§ See details about needle selection based on selected injection area and patient weight in the product monograph.</small>
        <br/>
        <small>Note: For patients with schizophrenia, the recommended monthly maintenance dose is <span style={{ whiteSpace: "nowrap" }}>75 mg</span>, with a range of <span style={{ whiteSpace: "nowrap" }}>25-150 mg</span> based on individual patient tolerability and/or efficacy. The <span style={{ whiteSpace: "nowrap" }}>25 mg</span> dose is not available in Canada. For patients with schizoaffective disorder, the recommended monthly maintenance dose is within the range of <span style={{ whiteSpace: "nowrap" }}>50-150 mg</span> based on tolerability and/or efficacy.<br/> Please see the Product Monograph for complete dosing information.</small>
      </footer>
    </article>
  )
}