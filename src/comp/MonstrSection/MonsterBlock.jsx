import MonserCanvasApp from "./MonserCanvasApp";
import MonsterHpApp from "./MonsterHpApp";
import { monstrList } from "../../data";
import { useState, useEffect } from "react";
export default function MonsterBlock({
  dps,
  dpc,
  stage,
  styled,
  setgold,
  setuser,
}) {
  const [mon, setMon] = useState({
    ...monstrList[styled][Math.ceil(Math.random() * 4)],
  });
  function setm() {
    setMon(() => ({
      ...monstrList[styled][Math.ceil(Math.random() * 4)],
    }));
  }

  const [hp, sethp] = useState(hpp());
  useEffect(() => {
    const bug = setInterval(() => {
      hp - dps / 5 > 0
        ? sethp((h) => h - dps / 10)
        : (sethp(() => hpp(1)),
          setgold(-Math.round(1 * 1.12 ** stage)),
          setuser("stage", stage + 1),
          setm());
    }, 100);
    return () => {
      clearInterval(bug);
    };
  });
  function hpp(a = 0) {
    return 10 * 1.05 ** (stage + a);
  }
  function hpc() {
    hp - dpc > 0
      ? sethp((h) => h - dpc)
      : (sethp(() => hpp(1)),
        setgold(-Math.round(1 * 1.12 ** stage)),
        setuser("stage", stage + 1),
        setm());
  }
  return (
    <div className="canvahp">
      <MonserCanvasApp mon={mon} hpc={() => hpc()} />
      <br />
      <MonsterHpApp hp={hp} hpp={() => hpp()} />
    </div>
  );
}
