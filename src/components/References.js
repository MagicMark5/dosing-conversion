export default function References() {
  // These references are the same in en and fr
  const references = [
    `INVEGA SUSTENNA® Product Monograph. Janssen Inc. December 17, 2020.`,
    `INVEGA TRINZA® Product Monograph. Janssen Inc. December 17, 2020.`,
  ];

  return (
    <section>
      <strong>References:</strong>
      <ol className="reference">
        {/* map out each reference <li> element  */}
        {references.map((reference, i) => <li key={i}>{reference}</li>)}
      </ol>
    </section>
  )
}