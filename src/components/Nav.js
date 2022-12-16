import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useContext, useEffect, useState } from 'react';
import { trapFocus } from "../helpers/trapFocus";
import TranslationContext from '../context/TranslationContext';
import "../styles/Nav.scss";
// design images
import home from "../assets/home.png";
import topLine from "../assets/topLine.png";
// Custom component
import Modal from "./materials/Modal";
// logos
import sustenna from "../assets/sustenna.png";
import sustenna_fr from "../assets/sustenna_fr.png";
import trinza from "../assets/trinza.png";
import trinza_fr from "../assets/trinza_fr.png";


export default function Nav({ modal, toggle, closeModal }) {
  // track focus state of language to set "aria-selected"
  const [ langFocus, setLangFocus ] = useState("");
  const { t, i18n } = useTranslation();
  // brand names with non-breaking spaces
  const { enFr } = useContext(TranslationContext);
  // current language
  const lang = i18n.resolvedLanguage;
  const path = useLocation().pathname.split("/");
  // current page
  const page = path[path.length - 1];

  const toggleModal = () => {
    toggle();
  };

  // After first render select <Modal/> element and trap tab focus inside it
  useEffect(() => {
    const modal = document.getElementById('safety_info');
    if (modal) trapFocus(modal, 'a#sustenna_pm, a#trinza_pm, button#modal_continue', closeModal);
  }, [closeModal]);

  return (
    <header role="banner">
      <nav>
        <div className={modal ? "blur toprow" : "toprow"}>
          <img 
            src={topLine} 
            alt=""
          />
        </div>
        <form className="language-switcher">
          <input
            id="en"
            onFocus={() => { setLangFocus("en") }}
            onChange={() => { i18n.changeLanguage('en'); }}
            checked={lang === 'en'}
            type="radio"
            name="Language"
            value="English"
            aria-current={langFocus === 'en'}
            aria-label="English"/>
          <label
            htmlFor="en"
            className={lang === 'en' ? `currentLang` : ``}>
              EN
          </label>
          { /* hide the "|" from screen readers so it is not read aloud */ }
          <span aria-hidden="true">|</span>
          <input
            id="fr"
            onFocus={() => { setLangFocus("fr") }}
            onChange={() => { i18n.changeLanguage('fr'); }}
            checked={lang === 'fr'}
            type="radio"
            name="Language"
            value="French"
            aria-current={langFocus === 'fr'}
            aria-label="French"/>
          <label 
            htmlFor="fr" 
            className={lang === 'fr' ? `currentLang` : ``}>
              FR
          </label>
        </form>
        <div className={modal ? "blur desktop-row" : "desktop-row"}>
          <Link className="home-link" to="/">
            <img 
              className="home-icon" 
              src={home} 
              alt={t('nav.home')} 
              aria-label={t('nav.home')}
            />
          </Link>

          <div className="logos-for-desktop">
            <img className="nav-logo sustenna-logo" style={{right: page === "conversionguide1" ? "15px" : "35px"}} src={enFr(sustenna, sustenna_fr)} alt={t('nav.alt_sustenna')} />
            {page !== "conversionguide1" && <img className="nav-logo trinza-logo" src={enFr(trinza, trinza_fr)} alt={t('nav.alt_trinza')} />}
          </div>

          <div className="nav-btn">
            <button id="modal_open" className="modal-button si-button" onClick={toggleModal}>
              {t("safety_info")}
            </button>
          </div>

          <div className="logos-for-mobile">
            <img className="nav-logo sustenna-logo" src={enFr(sustenna, sustenna_fr)} alt={t('nav.alt_sustenna')} />
            {page !== "conversionguide1" && <img className="nav-logo trinza-logo" src={enFr(trinza, trinza_fr)} alt={t('nav.alt_trinza')} />}          
          </div>        
        </div>
        <Modal show={modal} closeModal={closeModal}/>
      </nav>
    </header>
  )
}