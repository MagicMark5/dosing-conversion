import '../styles/Footer.scss';
import { Link } from 'react-router-dom';
// images
import divider from "../assets/divider.png";
import janssen from "../assets/janssen.png";
import imc from "../assets/imc.png";
import paab from "../assets/paab.png";

export default function Footer({modal}) {

  const bar = <span>&nbsp;|&nbsp;</span>;

  return (
    <footer className={modal ? "blur page-footer" : "page-footer"}>
      <img className="footer-divider" src={divider} alt="footer divider" />
      <div className='legal-logos-container'>
        <p className="legal">
          <strong>References:</strong> 1. INVEGA SUSTENNA® Product Monograph. Janssen Inc. December 17, 2020. 2. INVEGA TRINZA® Product Monograph. Janssen Inc. December 17, 2020.<br/><br/>
          © 2022 Janssen Inc. {bar} All trademarks used under license.<br/><br/>
          <a href="https://www.janssen.com/canada/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> {bar} 
          <Link to="/terms-of-use">Terms of Use</Link><br/><br/>
          Janssen Inc.<br/>
          19 Green Belt Drive {bar} Toronto,&nbsp;Ontario  M3C&nbsp;1L9<br/>
          <a href="https://www.janssen.com/canada" rel="noreferrer" target="_blank">www.janssen.com/canada</a>
          <span className='legal mobile project-code'>
            <br/><br/>
            CP-312685E
          </span>          
        </p>
        <div className="logos">
          <img alt="Member of Innovative Medicines Canada logo"
            className="imc-logo"
            src={imc}
            title="Member of Innovative Medicines Canada logo"
          />
          <img alt="PAAB"
            className="paab-logo"
            src={paab}
          />
          <img alt="Janssen Pharmaceutical Companies of Johnson &#x26; Johnson"
            className="janssen-logo"
            src={janssen} 
            title="Janssen Pharmaceutical Companies of Johnson &#x26; Johnson" 
          />
        </div>
      </div>
      <div className='legal desktop project-code'>
        CP-312685E
      </div>
    </footer>
  )
}