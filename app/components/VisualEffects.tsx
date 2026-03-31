"use client";

import dynamic from "next/dynamic";

// Pindahkan import dynamic-nya ke sini, di dalam file berlabel 'use client'
const Bubbles = dynamic(() => import("./Bubbles"), { ssr: false });
const CustomCursor = dynamic(() => import("./CustomCursor"), { ssr: false });

export default function VisualEffects() {
  return (
    <>
      <CustomCursor />
      <Bubbles />
    </>
  );
}
