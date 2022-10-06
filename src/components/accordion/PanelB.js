import DoseCalc from "../DoseCalc"

export default function PanelB({ doses }) {
  return (
    <article>
      <span>Following administration of the INVEGA SUSTENNA&reg; initiation regimen, patients previously stabilized on different doses of INVEGA&reg; Extended-Release Tablets can attain similar paliperidone steady-state exposure during maintenance treatment with the INVEGA SUSTENNA&reg; doses displayed below.</span>
      <br/><br/>
      <DoseCalc
        inputLabel={<span>If the once-daily INVEGA&reg; dose is:</span>}
        outputLabel={<span>Once-monthly INVEGA SUSTENNA&reg; maintenance dose to attain similar steady-state paliperidone exposure during maintenance treatment:</span>}
        doseIO={doses}
      />
      <br/><br/>
      <small>* Note: 25 mg dose is not available in Canada<br/>Adapted from the INVEGA SUSTENNA&reg; Product Monograph.</small>
    </article>
  )
}