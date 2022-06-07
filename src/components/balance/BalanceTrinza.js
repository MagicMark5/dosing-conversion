import ProductMonograph from "./ProductMonograph";

export default function BalanceTrinza({ reg }) {
  return (
    <section className="balance">
      <p>
        <strong>INVEGA TRINZA{reg} Safety Information</strong><br/>
        INVEGA TRINZA{reg}, a 3-month injection, is indicated for the treatment of schizophrenia in adult patients. INVEGA TRINZA{reg} is to be used only after INVEGA SUSTENNA{reg} (1-month paliperidone palmitate prolonged-release injectable suspension) has been established as adequate treatment for at least four months. In order to establish a consistent maintenance dose, it is recommended that the last two doses of INVEGA SUSTENNA{reg} be the same dosage strength before starting INVEGA TRINZA{reg}.
      </p>
      <ProductMonograph />
    </section>    
  )
}