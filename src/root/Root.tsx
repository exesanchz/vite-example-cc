import { useState, type MouseEvent } from "react";
import { IDot } from "../interfaces/Dot";

function Root() {
  const [dots, setDots] = useState<IDot[]>([]);

  const draw = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    setDots([...dots, { x: clientX, y: clientY }]);
    console.log(e);
  };

  return (
    <>
      <div id="button-wrapper">
        <button className="button-primary">Undo</button>
        <button className="button-primary">Redo</button>
      </div>
      <div id="click-area" onClick={draw}>
        {dots.map(({ x, y }: IDot, i: number) => (
          <div
            key={`dot-${i}-${x}-${y}`}
            style={{ left: x, top: y }}
            className="dot"
          ></div>
        ))}
      </div>
    </>
  );
}

export default Root;
