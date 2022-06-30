import './Chevron.css';
// logos
import sustenna from "../../assets/sustenna.png";
import trinza from "../../assets/trinza.png";

export default function Chevron({ heading }) {
  return (
    <div className='chevron-wrapper'>
      <div class="chevron-container">
        <div className='chevron-logos'>
          <img className="sustenna-logo" src={sustenna} alt="ONCE-MONTHLY INVEGA SUSTENNA® paliperidone palmitate PROLONGED-RELEASE INJECTABLE SUSPENSION" />
          <img className="trinza-logo" src={trinza} alt="PRINVEGA TRINZA® paliperidone palmitate prolonged-release injectable suspension 175 mg, 263 mg, 350 mg, 525 mg" />
        </div>
        <div class="heading">{heading}</div>
      </div>
      <div class="chevron"></div>
    </div>
  )
}