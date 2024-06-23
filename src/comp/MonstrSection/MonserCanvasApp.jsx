import { useRef } from "react";

export default function MonserCanvasApp({ mon, hpc }) {
  const canvas = useRef();

  let img = new Image();

  img.src = mon.src;
  img.onload = () => {
    canvas.current.height = 760;
    canvas.current.width = 950;
    canvas.current
      .getContext("2d")
      .clearRect(10, 10, canvas.current.width, canvas.current.height);
    canvas.current
      .getContext("2d")
      .drawImage(img, 10, 10, canvas.current.width, canvas.current.height);
  };
  return (
    <>
      <canvas
        ref={canvas}
        onClick={() => {
          hpc();
        }}
        id="canva"
      ></canvas>
      <br />
      <span>{mon.name}</span>
    </>
  );
}
