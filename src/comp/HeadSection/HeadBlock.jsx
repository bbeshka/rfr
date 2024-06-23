import { okr } from "../../data";
export default function HeadBlock({
  name,
  resursed,
  stage,
  dps,
  dpc,
  setreborn,
}) {
  return (
    <div className="headbloc">
      <div className="container text-center">
        <div className="row">
          <div className="col-1 navbarbtn">
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              =
            </button>
          </div>

          <div className="col-2 user">{name}</div>

          <div className="col-2 resursed">{`${okr(resursed.gold)}`}</div>

          <div className="col-6 alli">
            <div className="row">
              <div className="col-4">{`${okr(stage)} этап`}</div>
              <div className="col dps">{`DPS : ${okr(dps)}`}</div>
              <div className="col dpc">{` DPC: ${okr(dpc)} `}</div>
            </div>
          </div>

          {stage > 170 ? (
            <div className="col-1 reborn">
              <img src="/reborn.svg" onClick={() => setreborn()} alt="" />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
