import '../../styles/Chevron.scss';

export default function Chevron({ heading, bgTriangle, bgRectangle }) {
  return (    
    <div className='chevron-wrapper'>
      { /* This is the rectangle of the chevron */ }      
      <div className={`heading ${bgRectangle || 'bg-red'}`}>
        {heading}
      </div>
      { /* This is the triangle of the chevron */ }
      <div className={`chevron ${bgTriangle || 'red-triangle'}`}>
      </div>
    </div>    
  )
}