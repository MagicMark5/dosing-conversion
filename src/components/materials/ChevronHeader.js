import Chevron from "./Chevron";
import "../../styles/ChevronHeader.scss";

export default function ChevronHeader({ text, bgLeft, bgRight, bgRectangle, bgTriangle }) {
  return (
    <>
      <div className="chevron-header">
        <div className={`bg ${bgLeft}`}>
        </div>
        <Chevron 
          heading={<h1 className="chevron-text page-header-size">{text}</h1>}
          bgRectangle={bgRectangle}
          bgTriangle={bgTriangle}
        />
        <div className={`bg ${bgRight}`}>
        </div>
      </div>
      <div className="silver-border"></div>
    </>
  )
}