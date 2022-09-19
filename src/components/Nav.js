import { Link } from "react-router-dom";
// import { useState } from "react";
import "../styles/Nav.scss";
// design images
import home from "../assets/home.png";
import topLine from "../assets/topLine.png";
// Modal
import Modal from "./materials/Modal";
// logos
import sustenna from "../assets/sustenna.png";
import trinza from "../assets/trinza.png";


export default function Nav({ modal, toggle, closeModal, }) {
  // const [modal, setModal] = useState(true);
  // const toggle = () => setModal(!modal);

  // const closeModal = () => {
  //   setModal(false);
  // };

  // const blurClass = (classes) => modal ? `blur ${classes}` : classes;


  return (
    <nav>
      <div className={modal ? "blur toprow" : "toprow"}>
        <img src={topLine} alt="" />
      </div>
      <div className={modal ? "blur botrow" : "botrow"}>
        <Link to="/dosing-tool"><img className="home-icon" src={home} alt="Home" aria-label="Home" role="button" /></Link>
        <div className='chevron-logos'>
          <img className="sustenna-logo" src={sustenna} alt="ONCE-MONTHLY INVEGA SUSTENNA® paliperidone palmitate PROLONGED-RELEASE INJECTABLE SUSPENSION" />
          <img className="trinza-logo" src={trinza} alt="PRINVEGA TRINZA® paliperidone palmitate prolonged-release injectable suspension 175 mg, 263 mg, 350 mg, 525 mg" />
        </div>        
        <button className="modal-button si-button" onClick={() => toggle()}>
          Safety Information
        </button>
      </div>
      <Modal show={modal} closeModal={closeModal}/>
    </nav>
  )
}