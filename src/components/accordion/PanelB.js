import DoseCalc from "../DoseCalc"

export default function PanelB({ doses }) {
  return (
    <article>
      <span className="font-grey">Following administration of the INVEGA SUSTENNA&reg; initiation regimen, patients previously stabilized on different doses of INVEGA&reg; Extended-Release Tablets can attain similar paliperidone steady-state exposure during maintenance treatment with the INVEGA SUSTENNA&reg; doses displayed below.</span>
      <br/><br/>
      <DoseCalc
        inputLabel={<span>If the <span className="nowrap">once-daily</span> <span className="font-red font-bold">INVEGA&reg;</span> dose is:</span>}
        outputLabel={<span>The Once-monthly <span className="font-red font-bold">INVEGA&nbsp;SUSTENNA&reg;</span> maintenance dose needed to attain similar steady-state paliperidone exposure during maintenance treatment is:<br/><br/></span>}
        doseIO={doses}
      />
      <br/><br/>
      <footer>
        <small>‡ Note: 25 mg dose is not available in Canada</small>
        <small>Adapted from the INVEGA SUSTENNA&reg; Product Monograph.</small>
      </footer>
    </article>
  )
}