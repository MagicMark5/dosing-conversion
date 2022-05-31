export default function Balance() {
  
  
  const reg = <sup>&reg;</sup>;
  const productMonograph = <p>Please consult the Product Monograph at <a href="https://www.janssen.com/canada/products" target="_blank" rel="noreferrer">www.janssen.com/canada/products</a> for contraindications, warnings, precautions, adverse reactions, interactions, dosing, and conditions of clinical use.</p>;

  return (
    <section className="balance">
      <p>
        <strong>INVEGA SUSTENNA{reg} Safety Information</strong><br/>
        INVEGA SUSTENNA{reg} (paliperidone palmitate) is indicated for the treatment of schizophrenia in adult patients. In controlled clinical trials, INVEGA SUSTENNA{reg} was found to improve the symptoms of schizophrenia, including positive and negative symptoms.
        <br/><br/>
        INVEGA SUSTENNA{reg} is indicated for the maintenance treatment of schizoaffective disorder in adult patients.
      </p>   
      {productMonograph}
      <p>
        <strong>INVEGA TRINZA{reg} Safety Information</strong><br/>
        INVEGA TRINZA{reg}, a 3-month injection, is indicated for the treatment of schizophrenia in adult patients. INVEGA TRINZA{reg} is to be used only after INVEGA SUSTENNA{reg} (1-month paliperidone palmitate prolonged-release injectable suspension) has been established as adequate treatment for at least four months. In order to establish a consistent maintenance dose, it is recommended that the last two doses of INVEGA SUSTENNA{reg} be the same dosage strength before starting INVEGA TRINZA{reg}.
      </p>
      {productMonograph}
    </section>    
  )
}