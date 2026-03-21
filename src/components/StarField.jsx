import { useEffect, useRef } from "react";

export default function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animId;
    let stars = [];

    // Resize canvas to full screen
    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    // Create stars
    function initStars() {
      stars = [];
      const count = Math.floor((canvas.width * canvas.height) / 6000); // density
      for (let i = 0; i < count; i++) {
        stars.push(createStar(true)); // true = random Y start
      }
    }

    function createStar(randomY = false) {
      const size = Math.random() * 2.5 + 0.5;
      return {
        x: Math.random() * canvas.width,
        y: randomY ? Math.random() * canvas.height : -10,
        size,
        speedY: Math.random() * 0.8 + 0.3,   // fall speed
        speedX: (Math.random() - 0.5) * 0.3,  // slight horizontal drift
        opacity: Math.random() * 0.6 + 0.3,
        twinkle: Math.random() * Math.PI * 2, // twinkle phase offset
        // random color: white, cyan, pink, or purple tint
        color: ["255,255,255", "0,245,255", "255,45,120", "200,180,255"][
          Math.floor(Math.random() * 4)
        ],
      };
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = Date.now() / 1000;

      stars.forEach((s, i) => {
        // Twinkle effect
        const twinkleOpacity = s.opacity * (0.6 + 0.4 * Math.sin(now * 2 + s.twinkle));

        // Draw glow
        const gradient = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.size * 2.5);
        gradient.addColorStop(0, `rgba(${s.color}, ${twinkleOpacity})`);
        gradient.addColorStop(1, `rgba(${s.color}, 0)`);

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw core
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color}, ${Math.min(twinkleOpacity * 1.4, 1)})`;
        ctx.fill();

        // Move star (snow fall)
        s.y += s.speedY;
        s.x += s.speedX;

        // Reset if out of screen
        if (s.y > canvas.height + 10) {
          stars[i] = createStar(false); // respawn from top
        }
        if (s.x < -10) s.x = canvas.width + 10;
        if (s.x > canvas.width + 10) s.x = -10;
      });

      animId = requestAnimationFrame(draw);
    }

    resize();
    initStars();
    draw();

    window.addEventListener("resize", () => {
      resize();
      initStars();
    });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",  // clicks pass through
        zIndex: 0,              // behind everything
      }}
    />
  );
}