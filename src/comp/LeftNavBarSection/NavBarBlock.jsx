import LefBarApp from "./LefBarApp";
import { leftList } from "../../data";
export default function NavBarBlock({ but, size, setbut }) {
  return (
    <div
      className={size > 1.5 ? "offcanvas offcanvas-start" : "col-1"}
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      {leftList.map((prop) => (
        <LefBarApp
          key={prop.nam["eng"]}
          prop={prop}
          isActive={but == prop.nam["eng"]}
          onClick={() => {
            setbut(prop.nam["eng"]);
          }}
        />
      ))}
    </div>
  );
}
