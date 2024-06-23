import { useState } from "react";
import { hiroCardList } from "../../data";
import HiroCardApp from "./HiroCardApp";
export default function HiroBlock({
  gold,
  hiro,
  styled,
  lang,
  upphiro,
  buyhiro,
}) {
  const [mult, setMult] = useState(1);

  return (
    <div className="HiroAllBox">
      <div className="row mulip-btn">
        {[1, 10, 50, 100, 500].map((e) => (
          <div key={e} className="col">
            <button
              onClick={() => {
                setMult(() => e);
              }}
            >{`x${e}`}</button>
          </div>
        ))}
      </div>
      <div className="CardBox">
        {hiroCardList.map((prop) =>
          prop.pricBuy <= gold || hiro[prop.id].buy || prop.id == 1 ? (
            <HiroCardApp
              key={prop.id}
              lang={lang}
              gold={gold}
              hiro={hiro[prop.id]}
              name={prop.name[styled]}
              src={prop.src[styled]}
              pricBuy={prop.pricBuy}
              priceUppMultiplicator={prop.priceUppMultiplicator}
              id={prop.id}
              baseDps={prop.baseDps}
              mult={mult}
              buyhiro={(i, q, d) => buyhiro(i, q, d)}
              upphiro={(i, c, q, d) => upphiro(i, c, q, d)}
            />
          ) : null
        )}
      </div>
    </div>
  );
}
