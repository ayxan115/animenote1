import styles from "./style.module.scss";
import ReactDOM from "react-dom";

export default function Model({ modelUser, closeOpaneModel, children }) {
  return ReactDOM.createPortal(
    <>
      {modelUser && (
        <div className={styles.model}>
          <div className={styles.model_wrapper}>
            <div className={styles.model_content}>
              <button
                onClick={closeOpaneModel}
                className={styles.model_close_btn}
              ></button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>,
    document.getElementById("portal")
  );
}
