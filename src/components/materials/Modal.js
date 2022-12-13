// Safety Info - Balance copy
import BalanceTrinza from "../balance/BalanceTrinza";
import BalanceSustenna from "../balance/BalanceSustenna";
// styles
import "../../styles/Modal.scss";
import { useTranslation } from "react-i18next";

export default function Modal({ show, closeModal }) {
  const { t } = useTranslation();

  const reg = <sup>&reg;</sup>; // ®

  return (
    <>
      { show &&
          <div 
            id="safety_info"
            className="modal" 
            role="dialog" 
            aria-modal="true"
            aria-labelledby="safety_info_label">
            <h3 id="safety_info_label" className="modal-header-title">{t("modal.title")}</h3>
            <BalanceSustenna reg={reg} />
            <br/>
            <BalanceTrinza reg={reg} />
            <footer className="modal-footer">
              <button className="modal-button continue-button" onClick={() => closeModal()}>
                {t("modal.continue")}
              </button>
            </footer>
          </div>
      }
    </>
  )  
};