export default function LefBarApp({ prop, isActive, onClick }) {
  return (
    <div className={"LeftBarIcon " + prop.nam["eng"]}>
      <div className="imgLeftBar">
        <img
          src={prop.src}
          onClick={onClick}
          className={`img-fluid btn ${isActive ? "active" : ""}`}
          alt="..."
        ></img>
      </div>
    </div>
  );
}
