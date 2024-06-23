import { laboratoryList, okr } from "../../data";
export default function LaboratoryBlock({
  lang,
  gold,
  setuser,
  dpsMultip,
  dpcMultip,
}) {
  let q = ["dpsMultip", "dpcMultip"];
  function uppMultiplicatorPrice(mult) {
    return mult * 10 ** (mult + 1);
  }
  function uppMultiplicatorValue(mult) {
    return mult + mult / 10;
  }
  return (
    <div className="lab">
      {[dpsMultip, dpcMultip].map((e, i) => (
        <div key={i} className="laboratoryblock">
          <span>{`${laboratoryList.up[lang][0]} ${["DPS", "DPC"][i]} ${okr(
            e
          )} => ${okr(uppMultiplicatorValue(e))}`}</span>
          <br />
          <button
            onClick={() => {
              setuser(q[i], uppMultiplicatorValue(e), uppMultiplicatorPrice(e));
            }}
            disabled={gold >= uppMultiplicatorPrice(e) ? false : true}
          >{`${laboratoryList.up[lang][2]} ${laboratoryList.up[lang][1]} ${okr(
            uppMultiplicatorPrice(e)
          )}`}</button>
        </div>
      ))}
    </div>
  );
}
