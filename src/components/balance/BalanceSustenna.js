import ProductMonograph from "./ProductMonograph";

export default function BalanceSustenna({ reg }) {
  return (
    <section className="balance">
      <p>
        <strong className="font-bold"><span className="bold font-red">INVEGA SUSTENNA® Safety Information</span></strong><br/>
        INVEGA SUSTENNA® (paliperidone palmitate) is indicated for the treatment of schizophrenia in adult patients. In controlled clinical trials, INVEGA SUSTENNA® was found to improve the symptoms of schizophrenia, including positive and negative symptoms.
        <br/><br/>
        INVEGA SUSTENNA® is indicated for the maintenance treatment of schizoaffective disorder in adult patients.
        <br/><br/>
        <ProductMonograph />        
      </p>
    </section>    
  )
}