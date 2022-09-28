import '../styles/Footer.scss';
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
          Privacy Policy {bar} Terms of Use<br/><br/>
          Janssen Inc.<br/>
          19 Green Belt Drive {bar} Toronto, Ontario  M3C 1L9<br/>
          <a href="https://www.janssen.com/canada" rel="noreferrer" target="_blank">www.janssen.com/canada</a>
        </p>
        <div className="logos">
          <img alt="Member of Innovative Medicines Canada logo" 
            height="auto" 
            src={imc}
            title="Member of Innovative Medicines Canada logo"
          />
          <img alt="PAAB" 
            height="auto" 
            src={paab}
          />
          <img alt="Janssen Pharmaceutical Companies of Johnson &#x26; Johnson" 
            height="auto" 
            src={janssen} 
            title="Janssen Pharmaceutical Companies of Johnson &#x26; Johnson" 
          />          
        </div>
      </div>
      <div className='legal project-code'>
        CP-312685E
      </div>
    </footer>
  )
}