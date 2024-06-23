import { SettingsList } from "../../data";
export default function SettingsBlock({ name, lang, styled, setuser }) {
  function esp() {
    let e = [
      document.querySelector("#name"),
      document.querySelector("#styled"),
      document.querySelector("#lang"),
    ];
    e[0].value != name && setuser(e[0].id, e[0].value);
    e[1].selectedOptions[0].id != styled &&
      setuser(e[1].id, e[1].selectedOptions[0].id);
    e[2].selectedOptions[0].id != lang &&
      setuser(e[2].id, e[2].selectedOptions[0].id);
  }
  return (
    <>
      <div className="col styledblc">
        <br />
        <div className="nameUserBloc">
          <input
            id="name"
            type="text"
            placeholder={SettingsList.input[lang]}
            defaultValue={name}
          />
        </div>
        <div className="setStyledBloc">
          <br />
          <select id="styled" name="style" defaultValue={styled}>
            {SettingsList.styled.map((e) => (
              <option key={e.styl} id={e.styl} value={e.styl}>
                {e.langu[lang]}
              </option>
            ))}
          </select>
          <br />
          <br />
          <select id="lang" name="style" defaultValue={lang}>
            {SettingsList.language.map((e) => (
              <option key={e[0]} id={e[0]} value={e[0]}>
                {e[1]}
              </option>
            ))}
          </select>
          <div className="accpept">
            <br />
            <button onClick={() => esp()}>{SettingsList.btn[lang]}</button>
          </div>
        </div>
      </div>
    </>
  );
}
