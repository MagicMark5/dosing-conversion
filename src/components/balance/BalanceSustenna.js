import ProductMonograph from "./ProductMonograph";

export default function BalanceSustenna({ reg }) {
  return (
    <section className="balance">
      <p>
        <strong>INVEGA SUSTENNA{reg} Safety Information</strong><br/>
        INVEGA SUSTENNA{reg} (paliperidone palmitate) is indicated for the treatment of schizophrenia in adult patients. In controlled clinical trials, INVEGA SUSTENNA{reg} was found to improve the symptoms of schizophrenia, including positive and negative symptoms.
        <br/><br/>
        INVEGA SUSTENNA{reg} is indicated for the maintenance treatment of schizoaffective disorder in adult patients.
      </p>
      <ProductMonograph />
    </section>    
  )
}