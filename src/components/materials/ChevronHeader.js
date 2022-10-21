import Chevron from "./Chevron";
import "../../styles/ChevronHeader.scss";

export default function ChevronHeader({ text, bgLeft, bgRight, bgRectangle, bgTriangle, sidePad = "side-pad-20" }) {
  return (
    <>
      <header className="chevron-header">
        <div className={`bg ${bgLeft}`}>
          <div className="silver-border"></div>
        </div>
        <Chevron 
          heading={<h1 className={`chevron-text page-header-size ${sidePad}`}>{text}</h1>}
          bgRectangle={bgRectangle}
          bgTriangle={bgTriangle}
        />
        <div className={`bg ${bgRight}`}>
          <div className="silver-border"></div>
        </div>
      </header>
    </>
  )
}