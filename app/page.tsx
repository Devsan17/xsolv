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
          {/* Main Hero Card - Full Screen */}
          <div className="relative w-full h-full">
            <div className="relative rounded-t-3xl overflow-hidden bg-gradient-to-br from-blue-400 via-cyan-300 to-slate-400 w-full h-full">
              {/* Background overlay - simulates the image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-slate-600/30" />

              {/* Content Container */}
              <div className="relative h-full flex items-center justify-between px-16">
                {/* Left Side - Stat */}
                <div className="flex flex-col gap-6 max-w-md">
                  <div className="text-9xl font-black text-white tracking-tight leading-none">
                    98%
                  </div>
                  <p className="text-2xl text-white/90 font-light leading-relaxed">
                    Get More Done, Effortlessly
                  </p>
                </div>

                {/* Right Side - Description */}
                <div className="flex flex-col gap-4 max-w-md text-right">
                  <h2 className="text-4xl font-bold text-white tracking-tight leading-tight">
                    Advanced Integrations
                  </h2>
                  <p className="text-base text-white/85 font-light leading-relaxed">
                    Connect with your favorite tools to create a seamless workflow.
                  </p>
                </div>
              </div>

              {/* Floating Black Integration Bar - positioned at bottom */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-20 w-full max-w-3xl px-4">
                <div className="rounded-t-full bg-black shadow-[0_20px_40px_rgba(0,0,0,0.15)] px-10 py-6">
                  <div className="flex items-center justify-center gap-10 sm:gap-14">
                    {integrations.map((integration) => (
                      <div
                        key={integration.name}
                        className="flex flex-col items-center gap-2 transition-all duration-300 hover:scale-110"
                      >
                        <div className="text-lg font-light text-white/90">
                          {integration.icon}
                        </div>
                        <span className="whitespace-nowrap text-[11px] font-medium text-white/75 tracking-[0.02em]">
                          {integration.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
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
