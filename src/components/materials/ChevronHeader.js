import Chevron from "./Chevron";
import "../../styles/ChevronHeader.scss";

export default function ChevronHeader({ text }) {
  return (
    <>
      <div className="chevron-header">
        <div className="bg bg-orange">
        </div>
        <Chevron heading={<h1 className="chevron-text page-header-size">{text}</h1>}/>
        <div className="bg bg-red">
        </div>
      </div>
      <div className="silver-border"></div>
    </>
  )
}