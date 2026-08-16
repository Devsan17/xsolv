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
      <section className="relative h-[calc(100vh-88px)] w-full overflow-hidden bg-white">
        <div className="relative mx-auto h-full w-full max-w-[1600px]">
          <div className="absolute inset-y-0 left-0 flex items-center justify-start pl-0 md:pl-2 xl:pl-6">
            <p className="text-left font-black uppercase leading-[0.7] tracking-[-0.08em] text-black/80 text-[clamp(5.5rem,12vw,22rem)]">
              XSOLV
            </p>
          </div>

          <div className="pointer-events-none absolute bottom-0 right-0 z-10 w-[32%] max-w-[500px] min-w-[260px] pr-3 pb-2">
            <Image
              src="/images/Banner%20img.png"
              alt="Xsolv banner"
              width={500}
              height={500}
              className="h-auto w-full origin-bottom-right object-contain scale-[1.18] drop-shadow-[0_18px_32px_rgba(0,0,0,0.12)]"
            />
          </div>
        </div>
      </section>

      {/* Blank Section */}
      <section className="w-full h-screen bg-black" />
    </main>
  );
}
