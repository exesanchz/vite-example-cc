import { useState, type MouseEvent } from "react";
import { IDot } from "../interfaces/Dot";

function Root() {
  const [dots, setDots] = useState<IDot[]>([]);
  const [storageDots, setStorageDots] = useState<IDot[]>([]);

  const draw = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    setDots([...dots, { x: clientX, y: clientY }]);
  };

  const undo = () => {
    if (dots.length > 0) {
      const newDots = [...dots];
      const lastDot = newDots.pop() as IDot;
      Promise.all([
        setStorageDots([...storageDots, lastDot]),
        setDots(newDots),
      ]);
    }
  };

  const redo = () => {
    if (storageDots.length > 0) {
      const newStorage = [...storageDots];
      const redoDot = newStorage.pop() as IDot;
      Promise.all([setStorageDots(newStorage), setDots([...dots, redoDot])]);
    }
  };

  return (
    <>
      <div id="button-wrapper">
        <button className="button-primary" onClick={undo}>
          Undo
        </button>
        <button className="button-primary" onClick={redo}>
          Redo
        </button>
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
