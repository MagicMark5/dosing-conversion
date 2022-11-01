import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useContext } from 'react';
import TranslationContext from '../context/TranslationContext';
// import { useState } from "react";
import "../styles/Nav.scss";
// design images
import home from "../assets/home.png";
import topLine from "../assets/topLine.png";
// Modal
import Modal from "./materials/Modal";
// logos
import sustenna from "../assets/sustenna.png";
import sustenna_fr from "../assets/sustenna_fr.png";
import trinza from "../assets/trinza.png";
import trinza_fr from "../assets/trinza_fr.png";


export default function Nav({ modal, toggle, closeModal, }) {
  const { t, i18n } = useTranslation();
  const { enFr } = useContext(TranslationContext); // brand names with non-breaking spaces
  const lang = i18n.resolvedLanguage; // current language
  const path = useLocation().pathname.split("/");
  const page = path[path.length - 1]; // current page

  const toggleModal = () => {
    toggle();
  };

  return (
    <nav>
      <div className={modal ? "blur toprow" : "toprow"}>
        <img src={topLine} alt="" />
      </div>
      <div className="language-switcher">
        <button 
          className={lang === 'en' ? `currentLang` : ``} 
          type="submit" 
          onClick={() => { i18n.changeLanguage('en') }} 
          disabled={ lang === 'en'}
          aria-label="English"
        >
          EN
        </button>
        <span>|</span>
        <button 
          className={lang === 'fr' ? `currentLang` : ``} 
          type="submit" 
          onClick={() => { i18n.changeLanguage('fr') }} 
          disabled={ lang === 'fr' }
          aria-label="French"
        >
          FR
        </button>
      </div>
      <div className={modal ? "blur desktop-row" : "desktop-row"}>
        <Link className="home-link" to="/">
          <img className="home-icon" src={home} alt={t('nav.home')} aria-label={t('nav.home')} role="button" />
        </Link>
        <div className="nav-btn">
          <button className="modal-button si-button" onClick={toggleModal}>
            {t("safety_info")}
          </button>
        </div>
        <img className="nav-logo sustenna-logo" src={enFr(sustenna, sustenna_fr)} alt={t('nav.alt_sustenna')} />
        {page !== "conversionguide1" && <img className="nav-logo trinza-logo" src={enFr(trinza, trinza_fr)} alt={t('nav.alt_trinza')} />}
      </div>
      <Modal show={modal} closeModal={closeModal}/>
    </nav>
  )
}