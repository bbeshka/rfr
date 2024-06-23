import { okr } from "../../data";

export default function MonsterHpApp({ hp, hpp }) {
  return (
    <>
      <span>{`HP ${okr(hp)} / ${okr(hpp())}`}</span>
      <div
        className="progress"
        role="progressbar"
        aria-label="Пример опасности"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="progress-bar bg-danger"
          style={{
            width: `${okr((hp * 100) / hpp())}%`,
          }}
        >
          {`${okr((hp * 100) / hpp())}%`}
        </div>
      </div>
    </>
  );
}
