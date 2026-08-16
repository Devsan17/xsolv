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
      <section className="relative h-screen w-full overflow-hidden">
        <div className="flex h-full w-full items-center justify-center px-4 md:px-8">
          <div className="relative h-[500px] w-full max-w-[1600px] overflow-hidden">
            <div className="flex h-full w-full items-center justify-between gap-4 md:gap-8">
              <div className="flex w-[28%] min-w-0 shrink-0 items-center justify-center">
                <Image
                  src="/images/xsolv-3d-logo.png"
                  alt="Xsolv logo"
                  width={360}
                  height={360}
                  className="h-auto w-full max-h-[320px] object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.12)]"
                />
              </div>

              <div className="flex min-w-0 flex-1 items-center justify-center overflow-hidden">
                <p className="text-center font-black uppercase leading-none tracking-[0.05em] text-black/80 text-[clamp(4rem,8vw,12rem)]">
                  Xsolv
                </p>
              </div>
            </div>

            <div className="pointer-events-none absolute bottom-0 right-0 flex w-[22%] max-w-[300px] translate-x-[2%] translate-y-[2%] items-end justify-end overflow-hidden">
              <Image
                src="/images/Banner%20img.png"
                alt="Xsolv banner"
                width={420}
                height={420}
                className="h-auto w-full max-h-[260px] object-contain scale-[1.1] drop-shadow-[0_18px_32px_rgba(0,0,0,0.12)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blank Section */}
      <section className="w-full h-screen bg-white" />
    </main>
  );
}
