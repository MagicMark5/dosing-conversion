import '../../styles/Chevron.scss';

export default function Chevron({ heading }) {
  return (
    <div className="flex-center">
      <div className='chevron-wrapper'>
        <div className="chevron-container">
          <div className="heading">{heading}</div>
        </div>
        <div className="chevron"></div>
      </div>
    </div>
  )
}