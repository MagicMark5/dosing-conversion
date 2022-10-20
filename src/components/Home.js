import '../styles/Home.scss';
import { Link } from 'react-router-dom';
import Chevron from './materials/Chevron';
import { useTranslation } from "react-i18next";


export default function Home({modal}) {
  const { t } = useTranslation();

  return (
    <div className="home">
      <div className={modal ? "blur home-bg" : "home-bg"}>
        <div className="flex-center">
          <Chevron heading={<h1 className="chevron-text home-header-size">{t('home.title')}</h1>} />
        </div>
        <div className="buttons">
          <Link className="btn left" to="/conversionguide1">
            <div className="ghost-arrow arrow-left"></div>
            <p>Oral Antipsychotics to INVEGA&nbsp;SUSTENNA®<br/> Dosing Conversion Guide</p>
          </Link>
          <Link className="btn right" to="/conversionguide2">
            <p>INVEGA SUSTENNA® to INVEGA&nbsp;TRINZA®<br/> Dosing Conversion Guide</p>
            <div className="ghost-arrow arrow-right"></div>
          </Link>
        </div>
      </div>
    </div>
  )
}