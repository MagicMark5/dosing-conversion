// Safety Info - Balance copy
import BalanceTrinza from "../balance/BalanceTrinza";
import BalanceSustenna from "../balance/BalanceSustenna";
// styles
import "../../styles/Modal.scss";

export default function Modal({ show, closeModal }) {
  const reg = <sup>&reg;</sup>; // ®

  return (
    <>
      { show &&
          <div className="modal">
            <h3 className="modal-header-title">Important Safety Information</h3>
            <BalanceSustenna reg={reg} />
            <br/>
            <BalanceTrinza reg={reg} />
            <footer className="modal-footer">
              <button className="modal-button continue-button" onClick={() => closeModal()}>
                Continue to website
              </button>
            </footer>
          </div>
      }
    </>
  )  
};