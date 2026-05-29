import Image from "next/image";
import { hero } from "../content";

export function Hero() {
  return (
    <section id="top" className="px-6 py-24 md:py-32">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            {hero.eyebrow}
          </p>
          <h1 className="mt-4 text-5xl md:text-6xl font-bold tracking-tight max-w-3xl">
            {hero.heading}
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-ink/70 max-w-2xl leading-relaxed">
            {hero.subheading}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={hero.ctaPrimary.href}
              className="inline-block px-6 py-3 bg-accent text-white rounded-full font-medium hover:opacity-90 transition"
            >
              {hero.ctaPrimary.label}
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="inline-block px-6 py-3 border border-ink/15 rounded-full font-medium hover:bg-ink/5 transition"
            >
              {hero.ctaSecondary.label}
            </a>
          </div>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/pictures/Johannes Bittel.jpeg"
            alt="Johannes Bittel"
            width={320}
            height={320}
            className="rounded-2xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
