"use client";

import Image, { type StaticImageData } from "next/image";
import { useCallback, useEffect, useRef } from "react";

const TILT_MAX = 2.15;
const LERP = 0.11;
const EPS = 0.01;

type MedGuardHeroImageFrameProps = {
  src: StaticImageData;
  alt: string;
  priority?: boolean;
  side: "left" | "right";
};

function easeToward(current: number, target: number, factor: number) {
  return current + (target - current) * factor;
}

export default function MedGuardHeroImageFrame({
  src,
  alt,
  priority = false,
  side,
}: MedGuardHeroImageFrameProps) {
  const tiltNodeRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ rx: 0, ry: 0 });
  const currentRef = useRef({ rx: 0, ry: 0 });
  const rafRef = useRef<number | null>(null);
  const noTiltRef = useRef(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    noTiltRef.current = mq.matches;
    const onChange = () => {
      noTiltRef.current = mq.matches;
    };
    mq.addEventListener("change", onChange);
    return () => {
      mq.removeEventListener("change", onChange);
    };
  }, []);

  const runFrame = useCallback(() => {
    const el = tiltNodeRef.current;
    if (!el || noTiltRef.current) {
      rafRef.current = null;
      return;
    }
    const c = currentRef.current;
    const t = targetRef.current;
    c.rx = easeToward(c.rx, t.rx, LERP);
    c.ry = easeToward(c.ry, t.ry, LERP);
    el.style.setProperty("transform", `perspective(1000px) rotateX(${c.rx}deg) rotateY(${c.ry}deg)`);
    const near =
      Math.abs(t.rx - c.rx) < EPS && Math.abs(t.ry - c.ry) < EPS;
    if (near) {
      rafRef.current = null;
      return;
    }
    rafRef.current = requestAnimationFrame(runFrame);
  }, []);

  useEffect(
    () => () => {
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    },
    [],
  );

  const startLoop = useCallback(() => {
    if (noTiltRef.current) return;
    if (rafRef.current != null) return;
    rafRef.current = requestAnimationFrame(runFrame);
  }, [runFrame]);

  const objectPosition = side === "left" ? "object-[center_20%]" : "object-center";
  const reveal = side === "left" ? "medguard-hero-reveal--left" : "medguard-hero-reveal--right";
  const drift = side === "left" ? "medguard-hero-drift--left" : "medguard-hero-drift--right";

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || noTiltRef.current) return;
    if (!tiltNodeRef.current) return;
    const rect = tiltNodeRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    targetRef.current = {
      rx: Math.max(-TILT_MAX, Math.min(TILT_MAX, -py * 2 * TILT_MAX)),
      ry: Math.max(-TILT_MAX, Math.min(TILT_MAX, px * 2 * TILT_MAX)),
    };
    startLoop();
  };

  const handlePointerLeave = () => {
    targetRef.current = { rx: 0, ry: 0 };
    startLoop();
  };

  return (
    <div
      className={[
        "medguard-hero-reveal w-full min-w-0 max-w-[min(280px,92vw)] sm:max-w-[min(100%,300px)] lg:max-w-none",
        reveal,
        side === "right" && "lg:mt-4",
        side === "left" && "lg:-mb-1",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={["medguard-hero-drift", drift].join(" ")}>
        <div
          ref={tiltNodeRef}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          className="medguard-hero-tilt transform-3d backface-hidden will-change-transform"
        >
          <div
            className={[
              "relative overflow-hidden rounded-2xl",
              "ring-1 ring-stone-900/6 shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_20px_50px_-20px_rgba(15,23,42,0.18)]",
            ].join(" ")}
          >
            <div className="relative aspect-3/4 w-full sm:aspect-3/4">
              <Image
                src={src}
                alt={alt}
                fill
                priority={priority}
                className={`object-cover ${objectPosition}`}
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 40vw, 30vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
