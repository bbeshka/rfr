import { okr } from "../../data"; // фукнция приведения числа к BigInt и последующей записи через экспоненту
import { hiroCardGold } from "../../data";
export default function HiroCardApp({
  lang,
  gold,
  hiro,
  name,
  src,
  pricBuy,
  priceUppMultiplicator,
  id,
  baseDps,
  mult,
  upphiro,
  buyhiro,
}) {
  //a - базовая стоимость, q - мультипликатор, an - текщийй лвл, n - лвл повышения
  function upp(n) {
    let x = [pricBuy, priceUppMultiplicator, hiro.lvl];
    return Math.round(
      (x[0] * x[1] ** (x[2] + n - 1) * x[1] - x[0]) / (x[1] - 1) -
        (x[0] * x[1] ** (x[2] - 1) * x[1] - x[0]) / (x[1] - 1)
    );
  }
  return (
    <div className={`row  hiro-card ${name}`}>
      <div className="col-3 position-relative hiro-img">
        <img
          className="img-hiro-card position-absolute top-50 start-50 translate-middle rounded-4 border border-white"
          src={src}
          alt=""
        />
      </div>

      <div className="col hiro-btn">
        <span className="hironame"> {name} </span>
        <br />
        {!hiro.buy && (
          <>
            <button
              className="btn buy-hiro"
              disabled={gold >= pricBuy ? false : true}
              onClick={() => {
                buyhiro(id, pricBuy, baseDps);
              }}
            >
              {`${hiroCardGold.buy[lang]} ${okr(pricBuy)}`}
            </button>
          </>
        )}
        {hiro.buy && (
          <button
            className="btn upp-hiro"
            onClick={() => {
              upphiro(id, mult, upp(mult), baseDps);
            }}
            disabled={gold >= upp(mult) ? false : true}
          >
            {`${hiroCardGold.up[lang]} ${mult}  ${okr(upp(mult))} `}
          </button>
        )}
      </div>
      <div className="col-3 hiro-info">
        <span>{`DPS: ${okr(baseDps * hiro.lvl)}`}</span>
        <br />
        <span>{`DPC: ${okr((baseDps * hiro.lvl) / 2)}`}</span>
        <br />
        {hiro.buy && <span>{`LVL: ${okr(hiro.lvl)}`}</span>}
      </div>
    </div>
  );
}
