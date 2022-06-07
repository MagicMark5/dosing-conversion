import './Footer.css';

export default function Footer() {

  // Balance stays visible on every page of the app

  return (
    <>
      <section className="footer flex-col">
        <p className="legal">
          © 2022 Janssen Inc.<br/><br/>
          All trademarks used under license.<br/>
          Janssen Inc.<br/><br/>
          19 Green Belt Drive <br/>
          Toronto, Ontario  M3C 1L9<br/>
          <a href="https://www.janssen.com/canada" rel="noreferrer" target="_blank">www.janssen.com/canada</a><br/>
        </p>
        <div className="logos flex-col">
          <img alt="Member of Innovative Medicines Canada logo" 
            height="auto" 
            src="https://email-builder-c70fb.appspot.com.storage.googleapis.com/orgs/maven/projects/adam's-starter/images/imc-logo-white-en-xFyAEg-.png" 
            title="Member of Innovative Medicines Canada logo" 
            width="150"
          />
          <img alt="PAAB" 
            height="auto" 
            src="https://email-builder-c70fb.appspot.com.storage.googleapis.com/orgs/maven/projects/adam's-starter/images/paab-logo-en-bZ1Fyg-.png" 
            width="87"
          />
          <img alt="Janssen Pharmaceutical Companies of Johnson &#x26; Johnson" 
            height="auto" 
            src="https://email-builder-c70fb.appspot.com.storage.googleapis.com/orgs/maven/projects/adam's-starter/images/janssen-logo-CNWFqg-.png" 
            title="Janssen Pharmaceutical Companies of Johnson &#x26; Johnson" 
            width="180"
          />          
        </div>
      </section>
    </>
  )
}