"use client";

import Image from "next/image";

const navItems = ["Platform", "Solutions", "Method", "Insights"];

const integrations = [
  { name: "Supa Blox", icon: "◯" },
  { name: "Hype Blox", icon: "▪" },
  { name: "Ultra Blox", icon: "●" },
  { name: "Frame Blox", icon: "◇" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#111111]">
      {/* Fixed Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div className="flex items-center gap-3">
            <Image
              src="/images/xsolv-3d-logo.png"
              alt="Xsolv logo"
              width={28}
              height={28}
              className="object-contain"
            />
            <span className="text-[11px] font-semibold uppercase tracking-[0.42em] text-black/75">
              Xsolv
            </span>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-black/60 md:flex">
            {navItems.map((item) => (
              <a key={item} href="#" className="relative text-black/65 transition-all duration-300 hover:text-black after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                {item}
              </a>
            ))}
          </nav>

          <button className="rounded-full border border-black/10 bg-black px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
            Book a call
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="relative w-full h-[500px]">
            {/* Floating Black Integration Bar - positioned at bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-[70%] px-8">
              <div className="rounded-t-full bg-black shadow-[0_20px_40px_rgba(0,0,0,0.15)] px-16 py-8 flex items-center justify-center">
                <p className="text-3xl font-bold text-white tracking-[0.2em]">
                  Solve support succeed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blank Section */}
      <section className="w-full h-screen bg-white" />
    </main>
  );
}
