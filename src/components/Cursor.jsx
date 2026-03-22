import { useEffect, useRef } from "react";
import "./Cursor.css";

export default function Cursor() {
  const cursorRef = useRef(null);
  const cursor2Ref = useRef(null);

  useEffect(() => {
    // Don't run on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

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

  // Hide on touch devices via CSS too
  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={cursor2Ref} className="cursor2" />
    </>
  );
}