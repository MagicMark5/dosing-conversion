import '../styles/App.scss';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Layout from './Layout';
import Home from './Home';
import DosingInvegaSustenna from './DosingInvegaSustenna';
import DosingInvegaTrinza from './DosingInvegaTrinza';
import TermsOfUse from './TermsOfUse';
import useLanguage from '../hooks/useLanguage';
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async"; // Helmet allows us to change the index.html <head>
import TranslationProvider from '../context/TranslationProvider';

function App() {
  useLanguage();
  const { t } = useTranslation();
  const [modal, setModal] = useState(true);
  const toggle = () => setModal(!modal);
  
  const reg = <sup>&reg;</sup>; // ®
  
  const closeModal = () => {
    setModal(false);
    window.scrollTo(0,0);
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
