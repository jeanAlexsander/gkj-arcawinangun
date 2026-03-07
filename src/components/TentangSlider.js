"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const images = [
  "/kegiatan_1.jpg",
  "/kegiatan_2.jpg",
  "/kegiatan_3.jpg",
  "/gereja.jpg",
];

export default function TentangSlider() {
  const [current, setCurrent] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isHover) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 3000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isHover]);

  return (
    <div
      className="relative w-full h-[300px] rounded-xl overflow-hidden shadow group"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* SLIDES */}
      {images.map((img, index) => (
        <div
          key={img}
          className={`
            absolute inset-0
            transition-all duration-1000 ease-in-out
            ${
              index === current
                ? "opacity-100 scale-105"
                : "opacity-0 scale-100"
            }
          `}
        >
          <Image
            src={img}
            alt="Kegiatan GKJ Arcawinangun"
            fill
            className="
              object-cover
              transition-transform duration-700
              group-hover:scale-110
            "
          />
        </div>
      ))}

      {/* OVERLAY */}
      <div
        className="
          absolute inset-0
          bg-black/10
          transition
          group-hover:bg-black/20
        "
      />

      {/* DOT INDICATOR */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`
              w-3 h-3 rounded-full transition
              ${
                index === current
                  ? "bg-blue-600 scale-110"
                  : "bg-white/70 hover:bg-blue-400"
              }
            `}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
