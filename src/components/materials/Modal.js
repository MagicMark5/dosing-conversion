// Safety Info - Balance copy
import BalanceTrinza from "../balance/BalanceTrinza";
import BalanceSustenna from "../balance/BalanceSustenna";
// styles
import "../../styles/Modal.scss";
import { useTranslation } from "react-i18next";

export default function Modal({ show, closeModal }) {
  const { t } = useTranslation();

  // ®
  const reg = <sup>&reg;</sup>;

  return (
    <>
      { show &&
          <div
            id="safety_info"
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="safety_info_label">
            {/* Modal heading - needs to be treated as h1 by screen readers but requires less css overrides as an h3 */}
            <h3 id="safety_info_label" aria-level="1" className="modal-header-title">{t("modal.title")}</h3>
            {/* Balance copy for each brand */}
            <BalanceSustenna reg={reg} />
            <br/>
            <BalanceTrinza reg={reg} />
            {/* "Continue to website" button closes modal  */}
            <footer className="modal-footer">
              <button autoFocus={true} id="modal_continue" className="modal-button continue-button" onClick={() => closeModal()}>
                {t("modal.continue")}
              </button>
            </footer>
          </div>
      }
    </>
  )  
}