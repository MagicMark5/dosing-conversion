// styles
import '../styles/Home.scss';
// for en/fr translation
import TranslationContext from '../context/TranslationContext';
import { useTranslation } from "react-i18next";
// react hooks
import { useContext } from 'react';
import { Link } from 'react-router-dom';
// custom components
import Chevron from './materials/Chevron';

export default function Home({ modal }) {
  const { t, i18n } = useTranslation();
  // current language
  const lang = i18n.resolvedLanguage;
  // brand names with non-breaking spaces
  const { sustenna, trinza, d_sustenna } = useContext(TranslationContext);

  return (
    <main className="home">
      <div className={modal ? "blur home-bg" : "home-bg"}>
        <div className="flex-center" style={{ marginTop: "auto" }}>
          <Chevron heading={<h1 aria-hidden={modal} className="chevron-text home-header-size">{t('home.title')}</h1>} />
        </div>
        <section className="buttons">
          <Link className="btn left" to="/conversionguide1">
            <div className="ghost-arrow arrow-left"></div>
            <p>
              {t('home.btn_1a')} {sustenna}<br /> {t('home.btn_1b')}
            </p>
          </Link>
          <Link className="btn right" to="/conversionguide2">
            <p>
              {lang === "en" && <>{sustenna} to {trinza}<br /> {t('home.btn_1b')}</>}
              {lang === "fr" && <>{t('home.btn_1a')} {trinza}<br /> à partir {d_sustenna}</>}
            </p>
            <div className="ghost-arrow arrow-right"></div>
          </Link>
        </section>
      </div>
    </main>
  )
}