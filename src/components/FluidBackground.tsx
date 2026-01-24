'use client';

import Image from 'next/image';

export default function FluidBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <Image
        src="/bg.png"
        alt="Abstract background"
        fill
        className="object-cover blur-md opacity-[.15]"
      />
    </div>
  );
}
