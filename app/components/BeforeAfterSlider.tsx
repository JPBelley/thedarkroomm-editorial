"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";

interface Props {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
  objectPosition?: string;
}

export default function BeforeAfterSlider({ before, after, beforeAlt = "Before", afterAlt = "After", objectPosition = "center center" }: Props) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    setPosition(Math.min(100, Math.max(0, ((clientX - left) / width) * 100)));
  }, []);

  const onHandlePointerDown = (e: React.PointerEvent) => {
    e.stopPropagation();
    dragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updatePosition(e.clientX);
  };

  const onPointerUp = () => { dragging.current = false; };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/9] lg:aspect-[21/9] overflow-hidden select-none"
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      {/* After — full width, base layer */}
      <Image src={after} alt={afterAlt} fill sizes="100vw" className="object-cover" style={{ objectPosition }} preload />

      {/* Before — clipped to left of handle */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image src={before} alt={beforeAlt} fill sizes="100vw" className="object-cover" style={{ objectPosition }} preload />
      </div>

      {/* Divider line */}
      <div
        className="absolute inset-y-0 w-[1px] bg-white/80 pointer-events-none"
        style={{ left: `${position}%` }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 cursor-col-resize"
        style={{ left: `${position}%` }}
        onPointerDown={onHandlePointerDown}
      >
        <div className="w-8 h-8 bg-white flex items-center justify-center shadow-md">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 3L1 8L5 13" stroke="#000" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" />
            <path d="M11 3L15 8L11 13" stroke="#000" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-6 left-6 bg-primary text-on-primary px-3 py-1.5 pointer-events-none">
        <span className="text-label-caps">Before</span>
      </div>
      <div className="absolute bottom-6 right-6 bg-primary text-on-primary px-3 py-1.5 pointer-events-none">
        <span className="text-label-caps">After</span>
      </div>
    </div>
  );
}
