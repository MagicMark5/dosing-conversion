export default function References() {

  const references = [
    `INVEGA SUSTENNA® Product Monograph. Janssen Inc. December 17, 2020.`,
    `INVEGA TRINZA® Product Monograph. Janssen Inc. December 17, 2020.`,
  ];

  return (
    <section>
      <strong>References:</strong>    
      <ol className="reference">
        {references.map((reference, i) => <li key={i}>{reference}</li>)}
      </ol>
    </section>
  )
}