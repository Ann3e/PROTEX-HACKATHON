// import { useEffect, useState } from "react";

// export default function Cursor() {
//   const [pos, setPos] = useState({ x: 0, y: 0 });
//   const [smooth, setSmooth] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const move = (e) => {
//       setPos({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   useEffect(() => {
//     const animate = () => {
//       setSmooth((prev) => ({
//         x: prev.x + (pos.x - prev.x) * 0.15,
//         y: prev.y + (pos.y - prev.y) * 0.15,
//       }));
//       requestAnimationFrame(animate);
//     };
//     animate();
//   }, [pos]);

//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: smooth.y,
//         left: smooth.x,
//         width: 0,
//         height: 0,
//         borderLeft: "10px solid transparent",
//         borderRight: "10px solid transparent",
//         borderBottom: "20px solid #00f5d4",
//         transform: "translate(-50%, -50%) rotate(45deg)",
//         pointerEvents: "none",
//         zIndex: 9999,
//         filter: "drop-shadow(0 0 6px #00f5d4)",
//       }}
//     />
//   );
// }



import { useEffect, useRef } from "react";
import "./Cursor.css";

export default function Cursor() {
  const cursorRef = useRef(null);
  const cursor2Ref = useRef(null);

  useEffect(() => {
    let mx = 0, my = 0, tx = 0, ty = 0;

    const move = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursorRef.current.style.left = mx + "px";
      cursorRef.current.style.top = my + "px";
    };

    const interval = setInterval(() => {
      tx += (mx - tx) * 0.25;
      ty += (my - ty) * 0.25;
      cursor2Ref.current.style.left = tx + "px";
      cursor2Ref.current.style.top = ty + "px";
    }, 16);

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
        <div ref={cursorRef} className="cursor" />
      <div ref={cursor2Ref} className="cursor2" />
    </>
  );
}
