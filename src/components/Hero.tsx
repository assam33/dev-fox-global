import Image from "next/image";
import markWhite from "@/assets/DevFox-fox-HD.png";
import { heroFacts } from "@/data/site";
import { btnGhost, btnPrimary, cn } from "@/lib/ui";
import Container from "./Container";

export default function Hero() {
  return (
    <section id="home" className="bg-paper pb-16 pt-12 lg:pb-22 lg:pt-18">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-stretch lg:gap-18">
        <div>
          <h1 className="max-w-[18ch] text-[clamp(2.5rem,5.4vw,4.25rem)] font-bold leading-[1.04] tracking-[-0.035em] motion-safe:animate-rise lg:max-w-[14ch]">
            Software that helps your business run better.
          </h1>
          <p className="mt-6 max-w-136 text-[1.2rem] leading-[1.6] motion-safe:animate-rise-2">
            DevFox designs and builds websites, mobile apps and custom software for companies in Pakistan and
            around the world.
          </p>
          <div className="mt-9 flex flex-wrap gap-[0.85rem] motion-safe:animate-rise-3">
            <a href="#contact" className={cn(btnPrimary, "max-sm:flex-[1_1_100%]")}>
              Start a project
            </a>
            <a href="#work" className={cn(btnGhost, "max-sm:flex-[1_1_100%]")}>
              See our work
            </a>
          </div>
          <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-5 border-t border-line pt-7 motion-safe:animate-rise-4 sm:mt-14 sm:gap-x-12">
            {heroFacts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-[0.9rem] text-muted">{fact.label}</dt>
                <dd className="font-head text-[1.1rem] font-semibold text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* The one bold element on the page */}
        {/* <aside
          aria-label="DevFox"
          className="relative isolate flex min-h-[380px] flex-col justify-between overflow-hidden rounded-[22px] bg-[linear-gradient(155deg,#2D6CF6_0%,#5A4DF0_50%,#9440E8_100%)] p-6 text-white motion-safe:animate-rise-visual sm:min-h-[460px] sm:rounded-[28px] sm:p-8 lg:min-h-130"
        >
          <Image
            src={markWhite}
            alt=""
            priority
            className="absolute left-1/2 top-[46%] -z-10 h-auto w-[58%] max-w-68 -translate-x-1/2 -translate-y-1/2"
          />
          <p className="inline-flex items-center gap-[0.6rem] self-start rounded-full bg-transparent/16 px-[0.95rem] py-[0.45rem] text-[0.92rem] font-semibold">
          </p>
          <p className="max-w-76 font-head text-[1.2rem] sm:max-w-120 lg:max-w-76 font-semibold leading-[1.25] tracking-[-0.02em] sm:text-[1.45rem]">
            Engineers and designers working side by side with you, from the first sketch to launch day.
          </p>
        </aside> */}
    <aside
      aria-label="DevFox"
      className="relative isolate flex min-h-[380px] flex-col justify-between overflow-hidden rounded-[22px] border border-white/10 bg-[#12141A] p-6 text-white motion-safe:animate-rise-visual sm:min-h-[460px] sm:rounded-[28px] sm:p-8 lg:min-h-130"
    >
      {/* Orange glow behind the fox */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_50%_42%,rgba(255,122,26,0.30),transparent_60%)]"
      />

      {/* Faint dot grid, fading out toward the edges */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1.5px)] bg-[length:22px_22px] [mask-image:radial-gradient(circle_at_50%_42%,black,transparent_75%)]"
      />

      {/* Rotated outline squares (same shapes as the poster) */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[44%] -z-20 aspect-square w-[78%] max-w-96 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[2rem] border border-[#FF7A1A]/25"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[44%] -z-20 aspect-square w-[60%] max-w-76 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[1.5rem] border border-[#FF7A1A]/45"
      />

      {/* Fox logo */}
      <Image
        src={markWhite}
        alt=""
        priority
        className="absolute left-1/2 top-[44%] -z-10 h-auto w-[44%] max-w-56 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_18px_40px_rgba(255,122,26,0.35)]"
      />

      {/* Top pill */}
      <p className="inline-flex items-center gap-[0.6rem]"></p>

      {/* Bottom text */}
      <div>
        <p className="max-w-76 font-head text-[1.2rem] font-semibold leading-[1.25] tracking-[-0.02em] sm:max-w-120 sm:text-[1.45rem] lg:max-w-76">
          Engineers and designers working side by side with you, from the{" "}
          <span className="text-[#FF7A1A]">first sketch to launch day.</span>
        </p>
      </div>
    </aside>
      </Container>
    </section>
  );
}
