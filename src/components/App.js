import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
// Custom components
import Layout from './Layout';
import Home from './Home';
import DosingInvegaSustenna from './DosingInvegaSustenna';
import DosingInvegaTrinza from './DosingInvegaTrinza';
import TermsOfUse from './TermsOfUse';
// Helmet allows us to change the index.html <head>
import { Helmet } from "react-helmet-async";
// Provides Translation context and hooks to entire app
import TranslationProvider from '../context/TranslationProvider';
import { useTranslation } from "react-i18next";
import useLanguage from '../hooks/useLanguage';
// stylesheet
import '../styles/App.scss';

function App() {
  useLanguage();
  const { t } = useTranslation();
  const [modal, setModal] = useState(true);
  const toggle = () => setModal(!modal);
  
  // ®
  const reg = <sup>&reg;</sup>;
  
  const closeModal = () => {
    setModal(false);
    // scroll to top of page when modal is closed
    window.scrollTo(0,0);
    const open_modal_btn = document.getElementById('modal_open');
    // As per Essentials accesibility scan: ensure safety info button gets focus when modal is closed
    open_modal_btn.focus();
  };
  
  return (
    <div className="App">
      <TranslationProvider>
        <Helmet>
            <title>{t("htmlTitle")}</title>
        </Helmet>
        <Routes>
          <Route element={<Layout modal={modal} closeModal={closeModal} toggle={toggle} />}>
            <Route path="/" element={<Home modal={modal} />} />
            <Route path="/conversionguide1" element={<DosingInvegaSustenna modal={modal} reg={reg} />} />
            <Route path="/conversionguide2" element={<DosingInvegaTrinza modal={modal} reg={reg} />} />
            <Route path="/terms-of-use" element={<TermsOfUse modal={modal} reg={reg} />} />
          </Route>
        </Routes>
      </TranslationProvider>
    </div>
  );
}

export default App;
