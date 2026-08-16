"use client";

import Image from "next/image";

const navItems = ["Platform", "Solutions", "Method", "Insights"];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#111111]">
      <header className="sticky top-0 z-50 px-4 pt-4">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 rounded-3xl border border-white/30 bg-white/35 px-4 py-4 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] sm:rounded-full sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center justify-between gap-3 lg:justify-start">
            <div className="flex items-center gap-3">
              <Image
                src="/images/3d.png"
                alt="Xsolv logo"
                width={28}
                height={28}
                className="object-contain"
              />
              <span className="text-[11px] font-semibold uppercase tracking-[0.42em] text-black/75">
                Xsolv
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-black/60 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="relative text-black/65 transition-all duration-300 hover:text-black after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </nav>

          <button className="hidden rounded-full border border-black/10 bg-black px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] lg:inline-flex">
            Book a call
          </button>
        </div>
      </header>

      <a
        href="#"
        className="fixed bottom-4 right-4 z-50 inline-flex items-center justify-center rounded-full border border-black/10 bg-black px-4 py-3 text-xs font-medium text-white shadow-[0_10px_25px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-0.5 sm:hidden"
      >
        Book a call
      </a>

      <section className="relative w-full overflow-hidden bg-white">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col px-6 pb-0 pt-10 md:block md:min-h-[560px] md:px-0 md:pb-0 md:pt-0">
          <div className="mb-6 flex items-center justify-center md:hidden">
            <Image
              src="/images/3d.png"
              alt="Xsolv logo"
              width={88}
              height={88}
              className="h-auto w-[88px] object-contain"
            />
          </div>

          <div className="mb-2 flex items-center justify-center md:hidden">
            <Image
              src="/images/xsolv text.png"
              alt="Xsolv text"
              width={700}
              height={220}
              className="h-auto w-[min(82vw,520px)] object-contain"
            />
          </div>

          <div className="relative hidden min-h-[560px] md:block">
            <div className="absolute left-6 top-1/2 z-10 -translate-y-1/2 md:left-10 xl:left-16">
              <Image
                src="/images/3d.png"
                alt="Xsolv logo"
                width={250}
                height={250}
                className="h-auto w-[250px] object-contain"
              />
            </div>

            <div className="absolute inset-y-0 left-0 flex items-center justify-start pl-72 md:pl-80 xl:pl-96">
              <Image
                src="/images/xsolv text.png"
                alt="Xsolv text"
                width={700}
                height={220}
                className="h-auto w-[min(700px,55vw)] -ml-8 object-contain"
              />
            </div>

            <div className="pointer-events-none absolute bottom-0 right-0 z-10 w-[32%] max-w-[500px] min-w-[260px] pr-3 pb-0">
              <Image
                src="/images/img1.png"
                alt="Xsolv banner"
                width={500}
                height={500}
                className="h-auto w-full origin-bottom-right object-contain scale-[1.18] drop-shadow-[0_18px_32px_rgba(0,0,0,0.12)]"
              />
            </div>
          </div>

          <div className="mt-0 flex items-center justify-center md:hidden">
            <Image
              src="/images/img1.png"
              alt="Xsolv banner"
              width={500}
              height={500}
              className="h-auto w-[92vw] max-w-[520px] object-contain drop-shadow-[0_18px_32px_rgba(0,0,0,0.12)]"
            />
          </div>
        </div>
      </section>

      <section className="relative h-screen max-h-[760px] min-h-[680px] w-full overflow-hidden bg-white">
        <div className="mx-auto flex h-full w-full max-w-[1600px] flex-col items-center px-4 pb-10 pt-[86px] sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-[620px] flex-col items-center text-center">
            <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-[18px] font-semibold text-orange-600">
              Behind the Designs
            </span>

            <h2 className="mt-4 max-w-[620px] text-[clamp(38px,4vw,52px)] font-black leading-[1.02] tracking-[-0.05em] text-black">
              Curious What Else I&apos;ve
              <br />
              Created?
            </h2>

            <p className="mt-5 max-w-[620px] text-[13px] leading-[1.55] text-black/45">
              Explore more brand identities, packaging, and digital design work in my extended portfolio.
            </p>

            <button className="mt-5 inline-flex h-9 items-center gap-2 rounded-full border border-black/10 bg-white px-4 text-[12px] font-medium text-black shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-0.5">
              <span>See more Projects</span>
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-white">→</span>
            </button>
          </div>

          <div className="relative mt-2 h-[340px] w-full">
            <div className="flex w-full justify-center">
              <div className="flex h-full w-fit items-end gap-3">
                <div className="h-[280px] w-[140px] flex-none overflow-hidden rounded-[26px] bg-[#f7f7f7] shadow-[0_20px_48px_rgba(0,0,0,0.14)]">
                  <Image src="/images/profile pic/pro1.jpg" alt="" width={360} height={560} className="h-full w-full object-cover" />
                </div>
                <div className="h-[240px] w-[120px] flex-none overflow-hidden rounded-[22px] bg-[#f7f7f7] shadow-[0_18px_42px_rgba(0,0,0,0.12)]">
                  <Image src="/images/profile pic/pro2.jpg" alt="" width={360} height={560} className="h-full w-full object-cover" />
                </div>
                <div className="h-[190px] w-[95px] flex-none overflow-hidden rounded-[18px] bg-[#f7f7f7] shadow-[0_14px_30px_rgba(0,0,0,0.10)]">
                  <Image src="/images/profile pic/pro3.jpg" alt="" width={360} height={560} className="h-full w-full object-cover" />
                </div>
                <div className="h-[160px] w-[82px] flex-none overflow-hidden rounded-[16px] bg-[#f7f7f7] shadow-[0_12px_26px_rgba(0,0,0,0.08)]">
                  <Image src="/images/profile pic/pro4.jpg" alt="" width={360} height={560} className="h-full w-full object-cover" />
                </div>
                <div className="h-[190px] w-[95px] flex-none overflow-hidden rounded-[18px] bg-[#f7f7f7] shadow-[0_14px_30px_rgba(0,0,0,0.10)]">
                  <Image src="/images/profile pic/pro5.jpg" alt="" width={360} height={560} className="h-full w-full object-cover" />
                </div>
                <div className="h-[240px] w-[120px] flex-none overflow-hidden rounded-[22px] bg-[#f7f7f7] shadow-[0_18px_42px_rgba(0,0,0,0.12)]">
                  <Image src="/images/profile pic/pro6.jpg" alt="" width={360} height={560} className="h-full w-full object-cover" />
                </div>
                <div className="h-[280px] w-[140px] flex-none overflow-hidden rounded-[26px] bg-[#f7f7f7] shadow-[0_20px_48px_rgba(0,0,0,0.14)]">
                  <Image src="/images/profile pic/pro7.jpg" alt="" width={360} height={560} className="h-full w-full object-cover" />
                </div>
              </div>
            </div>

            <div className="absolute left-[52px] top-[300px]">
              <div className="text-[11px] font-bold text-orange-500">#01</div>
              <div className="text-[12px] text-black/70">Strategy &amp; Planning</div>
            </div>
            <div className="absolute left-[310px] top-[300px]">
              <div className="text-[11px] font-bold text-orange-500">#02</div>
              <div className="text-[12px] text-black/70">Design &amp; Development</div>
            </div>
            <div className="absolute right-[310px] top-[300px] text-right">
              <div className="text-[11px] font-bold text-orange-500">#03</div>
              <div className="text-[12px] text-black/70">Launch &amp; Growth</div>
            </div>
            <div className="absolute right-[52px] top-[300px] text-right">
              <div className="text-[11px] font-bold text-orange-500">#04</div>
              <div className="text-[12px] text-black/70">Ongoing Support</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
