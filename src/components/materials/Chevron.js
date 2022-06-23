import './Chevron.css';

export default function Chevron({ heading }) {
  return (
    <div class="chevron-container">
      <div class="heading">{heading}</div>
      <div class="chevron"></div>
    </div>
  )
}