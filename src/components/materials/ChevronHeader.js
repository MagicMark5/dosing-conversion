import Chevron from "./Chevron";
import "../../styles/ChevronHeader.scss";

// Surrounding container component for the <Chevron/> design that holds the page's main heading
export default function ChevronHeader({ text, bgLeft, bgRight, bgRectangle, bgTriangle, sidePad = "side-pad-20" }) {
  return (    
    <header className="chevron-header">
      {/* silver border underneath chevron + dynamic background color */}
      <div className={`bg ${bgLeft}`}>
        <div className="silver-border"></div>
      </div>
      {/* Chevron props change depending on the page */}
      <Chevron 
        heading={<h1 className={`chevron-text page-header-size ${sidePad}`}>{text}</h1>}
        bgRectangle={bgRectangle}
        bgTriangle={bgTriangle}
      />
      {/* silver border underneath chevron + dynamic background color */}
      <div className={`bg ${bgRight}`}>
        <div className="silver-border"></div>
      </div>
    </header>
  )
}