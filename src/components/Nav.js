import { Link } from "react-router-dom";
import "./Nav.css";
// design images
import home from "../assets/home.png";
import topLine from "../assets/topLine.png";
// logos
import sustenna from "../assets/sustenna.png";
import trinza from "../assets/trinza.png";


export default function Nav() {
  return (
    <nav>
      <div className="toprow">
        <img src={topLine} alt="" />
      </div>
      <div className="botrow">
        <Link to="/"><img className="home-icon" src={home} alt="Home" aria-label="Home" role="button" /></Link>
        <div className="nav-logos">
          <img className="sustenna-logo" src={sustenna} alt="ONCE-MONTHLY INVEGA SUSTENNA® paliperidone palmitate PROLONGED-RELEASE INJECTABLE SUSPENSION" />
          <img className="trinza-logo" src={trinza} alt="PRINVEGA TRINZA® paliperidone palmitate prolonged-release injectable suspension 175 mg, 263 mg, 350 mg, 525 mg" />
        </div>
      </div>
    </nav>
  )
}