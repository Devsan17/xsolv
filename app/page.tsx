"use client";

import { useState } from "react";
import Image from "next/image";

const navItems = [
  { label: "Hero", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Why Choose", href: "#why-choose" },
];

const iconClassName = "h-6 w-6";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ceo1Ok, setCeo1Ok] = useState(true);
  const [ceo2Ok, setCeo2Ok] = useState(true);

  return (
    <main className="min-h-screen bg-white text-[#111111]">
      <header className="sticky top-0 z-50 px-4 pt-4">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 rounded-3xl border border-white/30 bg-white/35 px-4 py-4 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] sm:rounded-full sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center justify-between gap-3 lg:justify-start">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logos.png"
                alt="Xsolv logo"
                width={28}
                height={28}
                className="object-contain"
              />
              <span className="text-[11px] font-semibold uppercase tracking-[0.42em] text-black/75">
                Xsolv
              </span>
            </div>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black transition lg:hidden"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {menuOpen ? (
                  <>
                    <path d="M6 6l12 12" />
                    <path d="M18 6L6 18" />
                  </>
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </svg>
            </button>
          </div>

          <nav className="hidden items-center gap-8 text-[15px] tracking-[0.04em] text-black/60 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-black/65 transition-all duration-300 hover:text-black after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="tel:9741432331"
            className="hidden rounded-full border border-[#EEEEEE] bg-black px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] lg:inline-flex"
          >
            Book a Call ↗
          </a>
        </div>

        {menuOpen ? (
          <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-black/10 bg-white px-4 py-4 shadow-[0_10px_25px_rgba(0,0,0,0.08)] md:hidden">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-2 py-2 text-sm font-medium text-black/70 transition hover:bg-black/5 hover:text-black"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        ) : null}
      </header>

      <a
        href="tel:9741432331"
        className="fixed bottom-4 right-4 z-50 inline-flex items-center justify-center rounded-full border border-black/10 bg-black px-4 py-3 text-xs font-medium text-white shadow-[0_10px_25px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-0.5 sm:hidden"
      >
        Book a call
      </a>

      <section id="hero" className="relative w-full overflow-hidden bg-white">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col px-6 pb-0 pt-10 md:block md:min-h-[560px] md:px-0 md:pb-0 md:pt-0">
          <div className="mb-6 flex items-center justify-center md:hidden">
            <Image
              src="/images/logos.png"
              alt="Xsolv logo"
              width={88}
              height={88}
              className="h-auto w-[88px] object-contain"
            />
          </div>

          <div className="mb-2 flex items-center justify-center md:hidden">
            <div className="text-[clamp(63px,18vw,108px)] font-black leading-none tracking-[-0.06em] text-black">
              Xsolv
            </div>
          </div>

          <div className="mb-6 text-center text-[14px] font-medium tracking-[0.18em] text-black/70 uppercase md:hidden">
            Solve support succeed
          </div>

                    <div className="relative hidden min-h-[560px] md:block">
            <div className="absolute left-6 top-1/2 z-10 -translate-y-1/2 md:left-10 xl:left-16">
              <Image
                src="/images/logos.png"
                alt="Xsolv logo"
                width={250}
                height={250}
                className="h-auto w-[250px] object-contain"
              />
            </div>

            <div className="absolute inset-y-0 left-0 flex items-center justify-start pl-72 md:pl-80 xl:pl-96">
              <div className="max-w-[980px]">
                <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.45em] text-black/45">
                  Digital • Technology • Growth
                </div>
                <div className="text-[clamp(96px,12vw,180px)] font-black leading-none tracking-[-0.06em] text-black">
                  Xsolv
                </div>
                <div className="mt-4 text-[clamp(26px,2.4vw,40px)] font-semibold leading-[1.1] tracking-[-0.04em] text-black/82">
                  Solve • Support • Succeed
                </div>
                <p className="mt-5 max-w-[720px] text-[clamp(16px,1.3vw,22px)] leading-[1.7] text-black/70">
                  Technology that moves businesses forward.
                </p>
                <a
                  href="#services"
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-black"
                >
                  Explore Services
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className="pointer-events-none absolute bottom-0 right-0 z-20 w-[50%] max-w-[800px] min-w-[280px] pr-0 pb-0 md:w-[48%] lg:w-[46%]">
              <Image
                src="/images/builds.png"
                alt="Xsolv banner"
                width={500}
                height={500}
                className="h-auto w-full origin-bottom-right object-contain scale-[1.18] translate-x-2 md:scale-[1.24] lg:scale-[1.28] drop-shadow-[0_18px_32px_rgba(0,0,0,0.12)]"
              />
            </div>

          </div>
          <div className="mt-0 flex items-center justify-center md:hidden">
            <Image
              src="/images/builds.png"
              alt="Xsolv banner"
              width={500}
              height={500}
              className="h-auto w-[calc(100vw+1.5rem)] max-w-none object-contain translate-x-2 drop-shadow-[0_18px_32px_rgba(0,0,0,0.12)]"
            />
          </div>
        </div>
      </section>

      <section id="services" className="w-full bg-black py-20 text-white sm:py-24">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-[760px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/45">
              Services
            </p>
            <h2 className="mt-4 text-[clamp(30px,4vw,48px)] font-black leading-[1.02] tracking-[-0.05em]">
              Business support built to keep operations moving.
            </h2>
            <p className="mt-4 max-w-[620px] text-[15px] leading-[1.7] text-white/65">
              Flexible service lines for teams that need dependable execution, clear communication, and steady follow-through.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <article className="rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-[2px]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconClassName} aria-hidden="true">
                  <path d="M12 3l7 3v5c0 4.6-3 8.7-7 10-4-1.3-7-5.4-7-10V6l7-3z" />
                  <path d="M9.5 12.2l1.9 1.9 3.6-3.8" />
                </svg>
              </div>
              <h3 className="mt-5 text-[20px] font-semibold text-white">BPO Solutions</h3>
              <p className="mt-3 text-[14px] leading-[1.7] text-white/68">
                Reliable outsourced business processes designed around your requirements.
              </p>
            </article>

            <article className="rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-[2px]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconClassName} aria-hidden="true">
                  <path d="M4 13a8 8 0 0 1 16 0" />
                  <path d="M4 13v4a2 2 0 0 0 2 2h2v-6H6a2 2 0 0 0-2 2z" />
                  <path d="M20 13v4a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2z" />
                  <path d="M12 19a2 2 0 0 0 2-2" />
                </svg>
              </div>
              <h3 className="mt-5 text-[20px] font-semibold text-white">Customer Support</h3>
              <p className="mt-3 text-[14px] leading-[1.7] text-white/68">
                Professional communication that helps businesses build stronger customer relationships.
              </p>
            </article>

            <article className="rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-[2px]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconClassName} aria-hidden="true">
                  <path d="M7 7h4v4H7z" />
                  <path d="M13 13h4v4h-4z" />
                  <path d="M11 9h2a2 2 0 0 1 2 2v2" />
                  <path d="M9 11H7a2 2 0 0 0-2 2v2" />
                </svg>
              </div>
              <h3 className="mt-5 text-[20px] font-semibold text-white">Recovery &amp; Collections</h3>
              <p className="mt-3 text-[14px] leading-[1.7] text-white/68">
                Structured and ethical recovery focused on consistent follow-up and improved collection efficiency.
              </p>
            </article>

            <article className="rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-[2px]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconClassName} aria-hidden="true">
                  <path d="M4 6h16v10H4z" />
                  <path d="M4 12h4l2 3h4l2-3h4" />
                </svg>
              </div>
              <h3 className="mt-5 text-[20px] font-semibold text-white">Back-Office Support</h3>
              <p className="mt-3 text-[14px] leading-[1.7] text-white/68">
                Operational support that helps your internal team focus on core business priorities.
              </p>
            </article>

            <article className="rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-[2px]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconClassName} aria-hidden="true">
                  <path d="M4 7h16v10H4z" />
                  <path d="M7 10h10" />
                  <path d="M7 13h6" />
                  <path d="M7 17l3-3 2 2 4-4" />
                </svg>
              </div>
              <h3 className="mt-5 text-[20px] font-semibold text-white">Process Management</h3>
              <p className="mt-3 text-[14px] leading-[1.7] text-white/68">
                Streamline and manage repetitive business processes.
              </p>
            </article>

            <article className="rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-[2px]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconClassName} aria-hidden="true">
                  <path d="M4 5h16v14H4z" />
                  <path d="M8 9h8" />
                  <path d="M8 13h5" />
                  <path d="M6 17c1.5-2 3.3-3 6-3s4.5 1 6 3" />
                </svg>
              </div>
              <h3 className="mt-5 text-[20px] font-semibold text-white">Telecalling</h3>
              <p className="mt-3 text-[14px] leading-[1.7] text-white/68">
                Handle inbound and outbound customer calls.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="portfolio" className="relative w-full overflow-hidden bg-white py-16">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center px-4 sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-[620px] flex-col items-center text-center">
            <h2 className="mt-4 max-w-[620px] text-[clamp(38px,4vw,52px)] font-black leading-[1.02] tracking-[-0.05em] text-black">
              Trusted by leaders
            </h2>

            <p className="mt-5 max-w-[620px] text-[30px] font-bold leading-[1.55] text-black/45">
              From various industries
            </p>

          </div>

          <div className="relative mt-[-22px] h-[320px] w-full">
            <div className="flex w-full justify-center">
              <div className="flex h-full w-fit items-end gap-2">
                <div className="h-[300px] w-[180px] flex-none overflow-hidden rounded-[26px] bg-[#f7f7f7] shadow-[0_18px_40px_rgba(0,0,0,0.10)]" style={{ transform: "translateY(-8px)" }}>
                  <Image src="/images/profile pic/pro9.jpg" alt="" width={360} height={560} className="h-full w-full object-cover" />
                </div>
                <div className="h-[280px] w-[160px] flex-none overflow-hidden rounded-[22px] bg-[#f7f7f7] shadow-[0_20px_48px_rgba(0,0,0,0.14)]" style={{ transform: "translateY(0px)" }}>
                  <Image src="/images/profile pic/pro1.jpg" alt="" width={360} height={560} className="h-full w-full object-cover" />
                </div>
                <div className="h-[240px] w-[140px] flex-none overflow-hidden rounded-[22px] bg-[#f7f7f7] shadow-[0_18px_42px_rgba(0,0,0,0.12)]" style={{ transform: "translateY(12px)" }}>
                  <Image src="/images/profile pic/pro2.jpg" alt="" width={360} height={560} className="h-full w-full object-cover" />
                </div>
                <div className="h-[190px] w-[110px] flex-none overflow-hidden rounded-[18px] bg-[#f7f7f7] shadow-[0_14px_30px_rgba(0,0,0,0.10)]" style={{ transform: "translateY(24px)" }}>
                  <Image src="/images/profile pic/pro3.jpg" alt="" width={360} height={560} className="h-full w-full object-cover" />
                </div>
                <div className="h-[160px] w-[92px] flex-none overflow-hidden rounded-[16px] bg-[#f7f7f7] shadow-[0_12px_26px_rgba(0,0,0,0.08)]" style={{ transform: "translateY(34px)" }}>
                  <Image src="/images/profile pic/pro4.jpg" alt="" width={360} height={560} className="h-full w-full object-cover" />
                </div>
                <div className="h-[190px] w-[110px] flex-none overflow-hidden rounded-[18px] bg-[#f7f7f7] shadow-[0_14px_30px_rgba(0,0,0,0.10)]" style={{ transform: "translateY(24px)" }}>
                  <Image src="/images/profile pic/pro5.jpg" alt="" width={360} height={560} className="h-full w-full object-cover" />
                </div>
                <div className="h-[240px] w-[140px] flex-none overflow-hidden rounded-[22px] bg-[#f7f7f7] shadow-[0_18px_42px_rgba(0,0,0,0.12)]" style={{ transform: "translateY(12px)" }}>
                  <Image src="/images/profile pic/pro6.jpg" alt="" width={360} height={560} className="h-full w-full object-cover" />
                </div>
                <div className="h-[280px] w-[160px] flex-none overflow-hidden rounded-[26px] bg-[#f7f7f7] shadow-[0_20px_48px_rgba(0,0,0,0.14)]" style={{ transform: "translateY(0px)" }}>
                  <Image src="/images/profile pic/pro7.jpg" alt="" width={360} height={560} className="h-full w-full object-cover" />
                </div>
                <div className="h-[300px] w-[180px] flex-none overflow-hidden rounded-[22px] bg-[#f7f7f7] shadow-[0_18px_40px_rgba(0,0,0,0.10)]" style={{ transform: "translateY(-8px)" }}>
                  <Image src="/images/profile pic/pro8.jpg" alt="" width={360} height={560} className="h-full w-full object-cover" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="why-choose" className="flex min-h-screen w-full items-start bg-black pt-28 text-white sm:pt-32 lg:items-center lg:pt-10">
        <div className="mx-auto w-full max-w-none px-4 py-10 sm:px-6 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-start">
            <div className="max-w-[560px]">
              <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/72 sm:text-[12px]">
                <span>Why Businesses Choose Xsolv</span>
              </div>

              <h2 className="mt-6 max-w-[520px] text-[clamp(34px,5vw,64px)] font-black leading-[1.02] tracking-[-0.05em] text-white sm:text-[clamp(40px,5vw,64px)]">
                Performance you can
                <br />
                measure.
              </h2>
            </div>

            <div className="relative overflow-hidden rounded-[12px] border border-white/8 bg-[#050505] p-4 sm:p-5 md:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(255,255,255,0.16),transparent_36%),radial-gradient(circle_at_52%_62%,rgba(255,255,255,0.08),transparent_30%)]" />
              <div className="relative flex min-h-[320px] flex-col justify-between gap-5 sm:min-h-[360px]">
                <div className="flex items-start justify-between gap-4">
                  <div className="max-w-[280px] text-[12px] leading-[1.45] text-white/72 sm:text-[13px]">
                    A sleek line graph showing a strong upward trend in business performance over time.
                  </div>
                  <div className="text-right text-[28px] font-medium tracking-[-0.06em] text-white/88 sm:text-[34px]">+32%</div>
                </div>

                <svg viewBox="0 0 900 250" className="h-[140px] w-full sm:h-[170px]" aria-hidden="true">
                  <defs>
                    <linearGradient id="xsGraphGlow" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.0)" />
                      <stop offset="50%" stopColor="rgba(255,255,255,0.14)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.28)" />
                    </linearGradient>
                    <linearGradient id="xsGraphFill" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.72)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
                    </linearGradient>
                  </defs>
                  <path d="M0,220 C90,230 140,180 220,180 C300,180 350,200 420,174 C500,145 560,86 640,92 C720,98 760,138 820,106 C860,85 890,52 900,34 L900,250 L0,250 Z" fill="url(#xsGraphFill)" />
                  <path d="M0,220 C90,230 140,180 220,180 C300,180 350,200 420,174 C500,145 560,86 640,92 C720,98 760,138 820,106 C860,85 890,52 900,34" fill="none" stroke="url(#xsGraphGlow)" strokeWidth="5" strokeLinecap="round" />
                </svg>

                <div className="grid gap-2 sm:grid-cols-3">
                  <div className="rounded-[10px] border border-white/8 bg-white/6 px-3 py-3">
                    <div className="text-[24px] font-medium tracking-[-0.05em] text-white sm:text-[28px]">+35%</div>
                    <p className="mt-2 text-[12px] leading-[1.45] text-white/68">Improvement in process productivity</p>
                  </div>
                  <div className="rounded-[10px] border border-white/8 bg-white/6 px-3 py-3">
                    <div className="text-[24px] font-medium tracking-[-0.05em] text-white sm:text-[28px]">- 40%</div>
                    <p className="mt-2 text-[12px] leading-[1.45] text-white/68">Reduction in operational delays</p>
                  </div>
                  <div className="rounded-[10px] border border-white/8 bg-white/6 px-3 py-3">
                    <div className="text-[24px] font-medium tracking-[-0.05em] text-white sm:text-[28px]">24/7</div>
                    <p className="mt-2 text-[12px] leading-[1.45] text-white/68">Continuous customer support coverage</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-1 grid w-full gap-4 md:grid-cols-2 xl:grid-cols-3 lg:col-span-2">
              {[
                {
                  title: "Operational Efficiency",
                  icon: (
                    <path d="M4 16a8 8 0 0 1 16 0" />
                  ),
                },
                {
                  title: "Professional Customer Handling",
                  icon: (
                    <>
                      <circle cx="12" cy="8" r="3" />
                      <path d="M5 18a7 7 0 0 1 14 0" />
                    </>
                  ),
                },
                {
                  title: "Scalable Solutions",
                  icon: (
                    <>
                      <path d="M6 16l6-6 4 4 4-8" />
                      <path d="M14 6h6v6" />
                    </>
                  ),
                },
                {
                  title: "Performance-Focused Processes",
                  icon: (
                    <>
                      <circle cx="12" cy="12" r="6" />
                      <path d="M12 12l3-3" />
                    </>
                  ),
                },
                {
                  title: "Transparent Reporting",
                  icon: (
                    <>
                      <path d="M6 18V8" />
                      <path d="M12 18V5" />
                      <path d="M18 18v-9" />
                    </>
                  ),
                },
                {
                  title: "Dedicated Team",
                  icon: (
                    <>
                      <circle cx="9" cy="9" r="2.2" />
                      <circle cx="15" cy="9" r="2.2" />
                      <path d="M5.5 18a3.5 3.5 0 0 1 7 0" />
                      <path d="M11.5 18a3.5 3.5 0 0 1 7 0" />
                    </>
                  ),
                },
              ].map((item) => (
                <div key={item.title} className="flex min-h-[86px] w-full items-center gap-4 rounded-[8px] border border-white/5 bg-white/[0.03] px-4 py-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] border border-white/12 bg-white/[0.04] text-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[19px] w-[19px]" aria-hidden="true">
                      {item.icon}
                    </svg>
                  </div>
                  <div className="text-[15px] font-semibold leading-[1.2] text-white">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white pb-6 pt-16 text-black">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(320px,420px)_1fr] lg:items-center">
            <div className="relative mx-auto w-full max-w-[420px]">
              <div className="absolute -left-3 -top-3 h-full w-full rounded-[28px] border border-black/10 bg-black/5" />
              <div className="relative overflow-hidden rounded-[28px] bg-[#f4f4f4] shadow-[0_20px_50px_rgba(0,0,0,0.10)]">
                {ceo1Ok ? (
                  <Image
                    src="/images/team/kir.jpeg"
                    alt="Kiran S Poojary"
                    width={900}
                    height={1100}
                    className="h-auto w-full object-cover"
                    onError={() => setCeo1Ok(false)}
                  />
                ) : (
                  <div className="flex aspect-[9/11] items-center justify-center bg-gradient-to-br from-black/5 to-black/15 p-6 text-center">
                    <div>
                      <div className="text-[28px] font-black tracking-[-0.05em] text-black">Kiran S</div>
                      <div className="mt-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-black/55">
                        Image unavailable
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="max-w-[760px]">
              <h2 className="text-[clamp(32px,4vw,48px)] font-black leading-[1.02] tracking-[-0.05em] text-black">
                Kiran S Poojary
              </h2>
              <p className="mt-2 text-[15px] font-semibold uppercase tracking-[0.18em] text-black/55 sm:text-[16px]">
                Founder &amp; Managing Director
              </p>
              <p className="mt-6 max-w-[760px] text-[15px] leading-[1.85] text-black/70 sm:text-[16px]">
                At Xsolv, I believe business growth and employee growth should happen together. We want to build a company where people don&apos;t simply come to work – they learn, grow, take responsibility, develop confidence, and build their future. Our goal is simple: create value for our clients while creating meaningful opportunities for our people. When our clients grow, we grow. When our employees grow, Xsolv grows with them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16 text-black">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_minmax(320px,420px)] lg:items-center">
            <div className="max-w-[760px]">
              <h2 className="text-[clamp(32px,4vw,48px)] font-black leading-[1.02] tracking-[-0.05em] text-black">
                Preethi P Suvarna
              </h2>
              <p className="mt-2 text-[15px] font-semibold uppercase tracking-[0.18em] text-black/55 sm:text-[16px]">
                Director
              </p>
              <div className="relative mt-6 w-full max-w-[420px] lg:hidden">
                <div className="absolute -right-3 -top-3 h-full w-full rounded-[28px] border border-black/10 bg-black/5" />
                <div className="relative overflow-hidden rounded-[28px] bg-[#f4f4f4] shadow-[0_20px_50px_rgba(0,0,0,0.10)]">
                  {ceo2Ok ? (
                    <Image
                      src="/images/team/preethi.png"
                      alt="Preethi P Suvarna"
                      width={700}
                      height={900}
                      className="h-auto w-full object-cover"
                      onError={() => setCeo2Ok(false)}
                    />
                  ) : (
                    <div className="flex aspect-[7/9] items-center justify-center bg-gradient-to-br from-black/5 to-black/15 p-6 text-center">
                      <div>
                        <div className="text-[28px] font-black tracking-[-0.05em] text-black">Preethi P</div>
                        <div className="mt-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-black/55">
                          Image unavailable
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <p className="mt-6 max-w-[760px] text-[15px] leading-[1.85] text-black/70 sm:text-[16px]">
                At Xsolv, our focus is on building strong systems, dependable teams, and lasting relationships with our clients. We believe that sustainable growth comes from consistency, collaboration, and a commitment to doing things the right way. As we continue to grow, our priority remains the same: to empower our people, deliver meaningful results for our clients, and create a workplace where everyone has the opportunity to learn, contribute, and move forward with confidence.
              </p>
            </div>

            <div className="relative mx-auto hidden w-full max-w-[420px] lg:block">
              <div className="absolute -right-3 -top-3 h-full w-full rounded-[28px] border border-black/10 bg-black/5" />
              <div className="relative overflow-hidden rounded-[28px] bg-[#f4f4f4] shadow-[0_20px_50px_rgba(0,0,0,0.10)]">
                {ceo2Ok ? (
                  <Image
                    src="/images/team/preethi.png"
                    alt="Preethi P Suvarna"
                    width={700}
                    height={900}
                    className="h-auto w-full object-cover"
                    onError={() => setCeo2Ok(false)}
                  />
                ) : (
                  <div className="flex aspect-[7/9] items-center justify-center bg-gradient-to-br from-black/5 to-black/15 p-6 text-center">
                    <div>
                      <div className="text-[28px] font-black tracking-[-0.05em] text-black">Preethi P</div>
                      <div className="mt-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-black/55">
                        Image unavailable
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full border-t border-white/10 bg-black py-8 text-white">
        <div className="mx-auto grid w-full max-w-[1600px] gap-8 px-4 text-sm text-white/60 sm:px-6 lg:grid-cols-3 lg:items-start lg:px-10">
          <div className="flex flex-col gap-2 text-center text-white/70 lg:justify-self-start lg:text-left">
            <div className="font-semibold text-white/85">Xsolv Business Solutions</div>
            <div>No. 75, Sirimudi, 4th Stage, 3rd Block, Basaveshwara Nagar, Bangalore - 560079</div>
            <a className="transition hover:text-white" href="mailto:xsolvbusinesssolutions@gmail.com">
              xsolvbusinesssolutions@gmail.com
            </a>
            <a className="transition hover:text-white" href="tel:9741432331">
              +91-9741432331
            </a>
          </div>
          <div className="flex flex-col items-center justify-center gap-1.5 text-center text-white/70 lg:justify-self-center lg:text-center">
            <span>Design &amp; Code by</span>
            <a
              className="text-sm font-bold uppercase tracking-[0.08em]"
              href="https://www.bigbotco.com/"
              target="_blank"
              rel="noreferrer"
              style={{ fontFamily: '"Courier New", monospace' }}
            >
              BigBotCo.
            </a>
          </div>
          <div className="flex flex-col items-center gap-3 text-center text-white/70 lg:justify-self-end lg:items-end lg:text-right">
            <a className="transition hover:text-white" href="/about-xsolv">
              About Xsolv
            </a>
            <a className="transition hover:text-white" href="/privacy-policy">
              Privacy Policy
            </a>
            <a className="transition hover:text-white" href="/terms-conditions">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </footer>
    </main>
  );


}

