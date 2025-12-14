'use client';

export default function FluidBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050505]">
      <div className="absolute left-0 top-0 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-[40rem] w-[40rem] translate-x-1/4 translate-y-1/4 rounded-full bg-purple-500/10 blur-[150px]" />
    </div>
  );
}
