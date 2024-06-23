import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { sahflkhsfsaal } from "./data.js";

export default function AppLang() {
  return (
    <div
      className="modal fade show"
      id="exampleModal"
      aria-labelledby="exampleModalLabel"
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <p className="h5">Выберите предпочитаемый язык </p>
            <div className="vr"></div>
            <p className="h5">Choose your preferred language </p>
          </div>
          <div className="modal-body">
            <div className="content text-center">
              <div className="row">
                <div className="col"> Выберите язык </div>
              </div>
              <div className="row">
                <div className="col"> Select a language</div>
              </div>
              <div className="row">
                <div className="row couppap">
                  <div className="col">
                    <select name="lang" id="lang">
                      <option value="rus">Русский</option>
                      <option value="eng">Английский</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                onClick={() => {
                  localStorage.lang = document.querySelector("select").value;
                  document.getElementById("modal").remove();
                  sahflkhsfsaal();
                  ReactDOM.createRoot(document.getElementById("root")).render(
                    <App />
                  );
                }}
                type="button"
                className="btn btn-primary"
              >
                Принять | accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
