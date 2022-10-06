import Chevron from "./Chevron";
import "../../styles/ChevronHeader.scss";

export default function ChevronHeader({ text }) {
  return (
    <>
      <div className="chevron-header">
        <Chevron heading={<h1 className="chevron-text">{text}</h1>} />
        <div className="bg bg-orange">
        </div>
        <div className="bg bg-red">
        </div>
      </div>
      <div className="silver-border"></div>
    </>
  )
}