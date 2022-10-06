export default function PanelC() {

  const units = (text) => <span className='units'>{text}</span>;

  return (
    <article>
      <div className='grid-2x2'>
        <div className="grid-row-spans-all-cols">
          <span>To avoid missed monthly doses,<br/> patients may be given their monthly maintenance injection +/- 7 days from the monthly time point</span>
        </div>
        <br/><br/>
        <div className='grid-row-2-col-1'>

          <div className='dose-card'>
            <div className='dosing flex-row'>
              <div className='dose-label'>Maintenance Dose for Schizophrenia</div>
              <div className='dose-values width-75 flex-col'>
                <div className='flex-around full-width'>
                  <span>25 {units(`mg`)}</span>
                  <span>50 {units(`mg`)}</span>
                  <span><strong>75 {units(`mg`)}<sup className='double-dagger'>&dagger;&dagger;</sup></strong></span>
                </div>
                <div className='flex-around width-70'>
                  <span>100 {units(`mg`)}</span>
                  <span>150 {units(`mg`)}</span>
                </div>
              </div>
            </div>
            {/* <img className='circle' src={circle} alt=""  /> */}
          </div>

          <div className='dose-card'>
            <div className='dosing flex-row'>
              <div className='dose-label'>Maintenance Dose for Schizophrenia</div>
              <div className='dose-values grid-2x2 grid-dosing'>
                <span className='text-right'>50 {units(`mg`)}</span>
                <span className='text-left'>75 {units(`mg`)}</span>
                <span className='text-right'>100 {units(`mg`)}</span>
                <span className='text-left'>150 {units(`mg`)}</span>
              </div>
            </div>
            {/* <img className='circle' src={circle} alt=""  /> */}
          </div>              
          
        </div>
        <div className="grid-row-2-col-2">
          <span>Note: For patients with schizophrenia, the recommended monthly maintenance dose is 75 mg, with a range of 25-150 mg based on individual patient tolerability and/or efficacy. The 25 mg dose is not available in Canada. For patients with schizoaffective disorder, the recommended monthly maintenance dose is within the range of 50-150 mg based on tolerability and/or efficacy. Please see the Product Monograph for complete dosing information.</span>
        </div>
      </div>  
    </article>
  )
}