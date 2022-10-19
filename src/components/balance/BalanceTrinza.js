import ProductMonograph from "./ProductMonograph";

export default function BalanceTrinza({ reg }) {
  return (
    <section className="balance">
      <p>
        <strong className="font-bold"><span className="font-red">INVEGA TRINZA® Safety Information</span></strong><br/>
        INVEGA&nbsp;TRINZA®, a 3-month injection, is indicated for the treatment of schizophrenia in adult patients. INVEGA&nbsp;TRINZA® is to be used only after INVEGA&nbsp;SUSTENNA® (1-month paliperidone palmitate prolonged-release injectable suspension) has been established as adequate treatment for at least four months. In order to establish a consistent maintenance dose, it is recommended that the last two doses of INVEGA SUSTENNA® be the same dosage strength before starting INVEGA&nbsp;TRINZA®.
        <br/><br/>
        <ProductMonograph />
      </p>
    </section>
  )
}