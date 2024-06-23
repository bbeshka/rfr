import { useState } from "react";
import { userDate } from "./data";
import CastlBlock from "./comp/CastlSection/CastlBlock";
import HeadBlock from "./comp/HeadSection/HeadBlock";
import HiroBlock from "./comp/HiroSection/HiroBlock";
import LaboratoryBlock from "./comp/LaboratorySection/LaboratoryBlock";
import NavBarBlock from "./comp/LeftNavBarSection/NavBarBlock";
import MonsterBlock from "./comp/MonstrSection/MonsterBlock";
import SettingsBlock from "./comp/SettingsSection/SettingsBlock";

export default function App() {
  const [user, setUser] = useState({ ...userDate });
  // localStorage.userd = JSON.stringify(user);
  const [but, setBut] = useState(
    document.documentElement.clientHeight /
      document.documentElement.clientWidth >
      1.5
      ? "Monstr"
      : "Hiro"
  );
  const [size, setSize] = useState(
    document.documentElement.clientHeight / document.documentElement.clientWidth
  );
  let timeout = false;
  window.addEventListener("resize", function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setSize(
        document.documentElement.clientHeight /
          document.documentElement.clientWidth
      ),
        document.documentElement.clientHeight /
          document.documentElement.clientWidth <
          1.5 && but == "Monster"
          ? setBut("Hiro")
          : null;
    }, 100);
  });
  function setuser(q, n) {
    setUser((userSta) => ({
      ...userSta,
      [q]: n,
    }));
  }
  function setlvl(id, count, bdps) {
    setUser((userSta) => ({
      ...userSta,
      hiro: {
        ...userSta.hiro,
        [id]: {
          ...userSta.hiro[id],
          lvl: user.hiro[id].lvl + count,
        },
      },
      dps: user.dps + bdps * count,
      dpc: user.dpc + (bdps * count) / 2,
    }));
  }
  function setbuy(id, bdps) {
    setUser((userSta) => ({
      ...userSta,
      hiro: {
        ...userSta.hiro,
        [id]: {
          ...userSta.hiro[id],
          buy: true,
        },
      },
      dps: user.dps + bdps,
      dpc: user.dpc + bdps / 2,
    }));
  }
  function setgold(p) {
    setUser((userSta) => ({
      ...userSta,
      resursed: {
        ...userSta.resursed,
        gold: user.resursed.gold - p,
      },
    }));
  }
  function setreborn() {
    setUser((userSta) => ({
      ...userSta,
      hiro: userDate.hiro,
      resursed: {
        ...userSta.resursed,
        gold: 100,
      },
      stage: 1,
      dps: 0,
      dpsMultip: user.dpsMultip + 1,
      dpc: 1,
      dpcMultip: user.dpcMultip + 0.5,
    }));
  }
  return (
    <div className="container">
      <div className="row contt">
        <NavBarBlock but={but} size={size} setbut={(n) => setBut(n)} />

        <div className="col mainblock">
          <div className="row headblock">
            <HeadBlock
              name={user.name}
              resursed={user.resursed}
              stage={user.stage}
              dps={user.dps * user.dpsMultip}
              dpc={user.dpc * user.dpcMultip}
              setreborn={() => setreborn()}
            />
          </div>
          <div className="row twoblock">
            <div className="col leftblock">
              {
                {
                  Monster: "",
                  Hiro: (
                    <HiroBlock
                      gold={user.resursed.gold}
                      hiro={user.hiro}
                      styled={user.styled}
                      lang={user.lang}
                      upphiro={(i, c, q, d) => {
                        setlvl(i, c, d), setgold(q);
                      }}
                      buyhiro={(i, q, d) => {
                        setbuy(i, d), setgold(q);
                      }}
                    />
                  ),
                  Laboratory: (
                    <LaboratoryBlock
                      lang={user.lang}
                      gold={user.resursed.gold}
                      setuser={(q, n, p) => {
                        setuser(q, n);
                        setgold(p);
                      }}
                      dpsMultip={user.dpsMultip}
                      dpcMultip={user.dpcMultip}
                    />
                  ),
                  Castl: <CastlBlock />,
                  Settings: (
                    <SettingsBlock
                      name={user.name}
                      lang={user.lang}
                      styled={user.styled}
                      setuser={(q, n) => setuser(q, n)}
                    />
                  ),
                }[but]
              }
            </div>
            {size < 1.5 || (size > 1.5 && but == "Monster") ? (
              <div className="col rightblock">
                {
                  <MonsterBlock
                    dps={user.dps * user.dpsMultip}
                    dpc={user.dpc * user.dpcMultip}
                    stage={user.stage}
                    styled={user.styled}
                    setgold={(p) => {
                      setgold(p);
                    }}
                    setuser={(q, n) => {
                      setuser(q, n);
                    }}
                  />
                }
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
