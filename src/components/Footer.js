import Balance from './Balance';
import References from './References';

export default function Footer() {

  // Balance stays visible on every page of the app

  return (
    <div className="flex-footer">
      <Balance />
      <References />
      <div className="legal">legal</div>
      <div className="logos">logos</div>
    </div>
  )
}