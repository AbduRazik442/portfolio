import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [ring, setRing] = useState({
    x: 0,
    y: 0,
  });

  const [tail, setTail] = useState({
    x: 0,
    y: 0,
  });

  const [hovering, setHovering] = useState(false);

  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth > 768
  );

  // Track mouse
  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        moveCursor
      );
  }, []);

  // Ring follows cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setRing((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.25,
        y: prev.y + (position.y - prev.y) * 0.25,
      }));
    }, 16);

    return () => clearInterval(interval);
  }, [position]);

  // Tail follows slower
  useEffect(() => {
    const interval = setInterval(() => {
      setTail((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.12,
        y: prev.y + (position.y - prev.y) * 0.12,
      }));
    }, 16);

    return () => clearInterval(interval);
  }, [position]);

  // Hover detection
  useEffect(() => {
    const elements = document.querySelectorAll(
      "a, button"
    );

    const enter = () => setHovering(true);
    const leave = () => setHovering(false);

    elements.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener(
          "mouseenter",
          enter
        );
        el.removeEventListener(
          "mouseleave",
          leave
        );
      });
    };
  }, []);

  // Hide on mobile
  useEffect(() => {
    const resize = () =>
      setIsDesktop(
        window.innerWidth > 768
      );

    window.addEventListener(
      "resize",
      resize
    );

    return () =>
      window.removeEventListener(
        "resize",
        resize
      );
  }, []);

  if (!isDesktop) return null;

  return (
    <>
      {/* Glow Tail */}
      <div
        className="
          fixed
          pointer-events-none
          z-[9997]
          h-20
          w-20
          rounded-full
          bg-cyan-500/10
          dark:bg-cyan-400/20
          blur-3xl
          transition-all
          duration-300
        "
        style={{
          left: tail.x - 40,
          top: tail.y - 40,
        }}
      />

      {/* Ring */}
      <div
        className={`
          fixed
          pointer-events-none
          z-[9998]
          rounded-full
          border
          border-cyan-500/40
          dark:border-cyan-400/50
          transition-all
          duration-300
          ${
            hovering
              ? "h-14 w-14"
              : "h-8 w-8"
          }
        `}
        style={{
          left:
            ring.x -
            (hovering ? 28 : 16),
          top:
            ring.y -
            (hovering ? 28 : 16),
        }}
      />

      {/* Arrow Cursor */}
      <div
        className="
          fixed
          pointer-events-none
          z-[9999]
          transition-transform
          duration-75
        "
        style={{
          left: position.x,
          top: position.y,
          transform:
            hovering
              ? "scale(1.15)"
              : "scale(1)",
        }}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M4 3L18 12L11 13L14 21L11 22L8 14L4 18V3Z"
            className="
              fill-black
              dark:fill-white
            "
          />
        </svg>
      </div>
    </>
  );
};

export default CustomCursor;