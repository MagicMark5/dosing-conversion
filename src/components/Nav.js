import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage; // current language
  const path = useLocation().pathname.split("/");
  const page = path[path.length - 1]; // current page


  const toggleModal = (e) => {
    // remove focus from safety information button after click
    e.target.blur(); 
    toggle();
  };

  const handleHomeClick = (e) => {
    // remove focus on a.home-link element after click
    e.nativeEvent.path[1].blur();
  }

  return (
    <nav>
      <div className={modal ? "blur toprow" : "toprow"}>
        <img src={topLine} alt="" />
      </div>
      <div className="language-switcher">
        <button className={lang === 'en' ? `currentLang` : ``} type="submit" onClick={() => { i18n.changeLanguage('en') }} disabled={ lang === 'en'}>EN</button>
        <span>|</span>
        <button className={lang === 'fr' ? `currentLang` : ``} type="submit" onClick={() => { i18n.changeLanguage('fr') }} disabled={ lang === 'fr' }>FR</button>
      </div>
      <div className={modal ? "blur desktop-row" : "desktop-row"}>
        <Link className="home-link" to="/" onClick={handleHomeClick}>
          <img className="home-icon" src={home} alt="Home" aria-label="Home" role="button" />
        </Link>       
        <div className="nav-btn">
          <button className="modal-button si-button" onClick={toggleModal}>
            {t("nav.safety")}
          </button>
        </div>
        <img className="nav-logo sustenna-logo" src={sustenna} alt="ONCE-MONTHLY INVEGA SUSTENNA® paliperidone palmitate PROLONGED-RELEASE INJECTABLE SUSPENSION" />
        {page !== "conversionguide1" && <img className="nav-logo trinza-logo" src={trinza} alt="INVEGA TRINZA® paliperidone palmitate prolonged-release injectable suspension 175 mg, 263 mg, 350 mg, 525 mg" />}
      </div>
      <Modal show={modal} closeModal={closeModal}/>
    </nav>
  )
}