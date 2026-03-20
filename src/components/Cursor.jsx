import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [smooth, setSmooth] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const animate = () => {
      setSmooth((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.15,
        y: prev.y + (pos.y - prev.y) * 0.15,
      }));
      requestAnimationFrame(animate);
    };
    animate();
  }, [pos]);

  return (
    <div
      style={{
        position: "fixed",
        top: smooth.y,
        left: smooth.x,
        width: 0,
        height: 0,
        borderLeft: "10px solid transparent",
        borderRight: "10px solid transparent",
        borderBottom: "20px solid #00f5d4",
        transform: "translate(-50%, -50%) rotate(45deg)",
        pointerEvents: "none",
        zIndex: 9999,
        filter: "drop-shadow(0 0 6px #00f5d4)",
      }}
    />
  );
}