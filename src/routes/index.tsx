import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logoAsset from "@/assets/bunian-logo.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { property: "og:image", content: `https://bunian.games${logoAsset.url}` },
      { name: "twitter:image", content: `https://bunian.games${logoAsset.url}` },
    ],
  }),
});

// Skyline silhouette echoing the logo's architectural motif.
function Skyline({ className = "", opacity = 1 }: { className?: string; opacity?: number }) {
  return (
    <svg
      viewBox="0 0 1200 300"
      className={className}
      style={{ opacity }}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <g fill="currentColor">
        {/* Antenna tower */}
        <rect x="358" y="10" width="2" height="55" />
        <rect x="340" y="60" width="40" height="240" />
        <rect x="330" y="90" width="60" height="210" />
        <rect x="349" y="80" width="3" height="8" />
        <rect x="349" y="100" width="3" height="8" />
        <rect x="349" y="120" width="3" height="8" />
        {/* Left mid */}
        <rect x="120" y="140" width="70" height="160" />
        <rect x="180" y="110" width="90" height="190" />
        <rect x="260" y="160" width="50" height="140" />
        {/* Right block */}
        <rect x="440" y="130" width="90" height="170" />
        <rect x="520" y="90" width="70" height="210" />
        <rect x="580" y="150" width="60" height="150" />
        {/* Second tall complex */}
        <rect x="700" y="70" width="55" height="230" />
        <rect x="745" y="130" width="70" height="170" />
        <rect x="805" y="100" width="45" height="200" />
        {/* Far right */}
        <rect x="880" y="160" width="80" height="140" />
        <rect x="950" y="120" width="60" height="180" />
        <rect x="1000" y="180" width="90" height="120" />
        <rect x="1080" y="150" width="50" height="150" />
      </g>
      {/* Window dots */}
      <g fill="var(--background)">
        {[
          [355, 110], [355, 130], [355, 150], [355, 170], [355, 190], [355, 210],
          [200, 150], [220, 150], [200, 180], [220, 180], [200, 210], [220, 210],
          [730, 100], [730, 130], [730, 160], [730, 190], [730, 220], [730, 250],
          [820, 130], [820, 150], [820, 170], [820, 190], [820, 210],
          [970, 150], [970, 175], [970, 200], [970, 225], [970, 250],
          [460, 160], [480, 160], [500, 160], [460, 190], [480, 190], [500, 190],
        ].map(([x, y], i) => (
          <rect key={i} x={x} y={y} width="4" height="4" />
        ))}
      </g>
    </svg>
  );
}

function Tick({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 text-mono text-[10px] uppercase tracking-[0.2em] text-primary/70">
      <span className="h-px w-6 bg-primary/40" />
      {label}
    </div>
  );
}

function Section({
  id,
  code,
  title,
  children,
}: {
  id: string;
  code: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative border-t border-primary/20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <div className="text-mono mb-3 text-xs uppercase tracking-[0.3em] text-primary/60">
              [ {code} ]
            </div>
            <h2 className="text-display text-4xl md:text-6xl">{title}</h2>
          </div>
          <div className="text-mono hidden text-[10px] uppercase tracking-[0.3em] text-primary/40 md:block">
            SEC / {code}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

function Index() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <main className="relative min-h-screen overflow-hidden text-primary">
      {/* Top rail */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-primary/20 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Bunian Games" className="h-9 w-auto" />
            <div className="hidden flex-col leading-tight sm:flex">
              <span className="text-display text-sm">Bunian Games</span>
              <span className="text-mono text-[9px] uppercase tracking-[0.25em] text-primary/50">
                EST · Amman, Jordan
              </span>
            </div>
          </a>
          <nav className="text-mono hidden gap-8 text-xs uppercase tracking-[0.2em] md:flex">
            <a href="#about" className="hover:text-primary/70">01·About</a>
            <a href="#game" className="hover:text-primary/70">02·Game</a>
            <a href="#team" className="hover:text-primary/70">03·Team</a>
            <a href="#contact" className="hover:text-primary/70">04·Contact</a>
          </nav>
          <a
            href="#subscribe"
            className="text-mono rounded-none border border-primary bg-primary px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
          >
            Get Notified
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-32 pb-0">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-7">
              <Tick label="Independent Studio · EST 2024" />
              <h1 className="text-display mt-6 text-[clamp(3rem,10vw,7.5rem)] leading-[0.85]">
                We build
                <br />
                puzzles like
                <br />
                <span className="relative inline-block">
                  architecture
                  <span className="cursor-blink text-primary">_</span>
                </span>
              </h1>
              <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
                <span className="text-mono text-primary">Bunian</span>{" "}
                <span className="text-mono text-primary/50">/boon-yaan/</span> — Arabic for{" "}
                <em className="text-primary/80">architecture</em>. A two-person independent game
                studio in Jordan, drafting logic and programming puzzles the way others draft
                skylines.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#game"
                  className="text-mono group inline-flex items-center gap-3 rounded-none bg-primary px-6 py-4 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  <span>See the game</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="#subscribe"
                  className="text-mono inline-flex items-center gap-3 border border-primary px-6 py-4 text-xs uppercase tracking-[0.2em] hover:bg-primary/10"
                >
                  Join mailing list
                </a>
              </div>
            </div>

            {/* Logo scaffold panel */}
            <div className="col-span-12 md:col-span-5">
              <div className="corner-ticks blueprint-panel relative aspect-square p-8">
                <div className="text-mono absolute top-3 left-3 text-[10px] uppercase tracking-[0.3em] text-primary/50">
                  BG · 001
                </div>
                <div className="text-mono absolute top-3 right-3 text-[10px] uppercase tracking-[0.3em] text-primary/50">
                  ⌐ SCALE 1:1
                </div>
                <div className="flex h-full items-center justify-center">
                  <img
                    src={logoAsset.url}
                    alt="Bunian Games logo"
                    className="max-h-[80%] w-auto drop-shadow-[0_0_40px_oklch(0.94_0.19_104/0.35)]"
                  />
                </div>
                <div className="text-mono absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.3em] text-primary/50">
                  IDENT MARK
                </div>
                <div className="text-mono absolute bottom-3 right-3 text-[10px] uppercase tracking-[0.3em] text-primary/50">
                  © 2026
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skyline base */}
        <div className="relative mt-20 h-[220px] w-full overflow-hidden md:h-[300px]">
          <Skyline className="absolute inset-x-0 bottom-0 h-full w-full text-primary" opacity={0.15} />
          <Skyline
            className="absolute inset-x-0 bottom-0 h-[85%] w-full text-primary"
            opacity={0.35}
          />
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y border-primary/30 bg-primary text-primary-foreground">
        <div className="relative flex overflow-hidden py-4">
          <div className="marquee-track flex shrink-0 gap-12 pr-12 whitespace-nowrap">
            {Array.from({ length: 2 }).flatMap((_, dup) =>
              [
                "Logic Puzzles",
                "◆",
                "Programming Games",
                "◆",
                "Amman · Jordan",
                "◆",
                "Two Humans, One Studio",
                "◆",
                "CPU: Computing Potatoes Unlimited",
                "◆",
                "Coming Soon",
                "◆",
              ].map((t, i) => (
                <span key={`${dup}-${i}`} className="text-mono text-sm uppercase tracking-[0.3em]">
                  {t}
                </span>
              )),
            )}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <Section id="about" code="01/ABOUT" title="Small studio. Big drafting table.">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-7">
            <p className="text-xl leading-relaxed text-primary/90 md:text-2xl">
              Bunian is Arabic for <em>architecture</em>. We are a two-person independent game
              development studio based in Jordan, specializing in{" "}
              <span className="bg-primary px-2 text-primary-foreground">programming</span> and{" "}
              <span className="bg-primary px-2 text-primary-foreground">logic-puzzle</span> video
              games.
            </p>
          </div>
          <div className="col-span-12 grid grid-cols-2 gap-4 md:col-span-5">
            {[
              { k: "TEAM", v: "02" },
              { k: "BASED", v: "JOR" },
              { k: "FIELD", v: "PZL" },
              { k: "SHIPS", v: "SOON" },
            ].map((s) => (
              <div key={s.k} className="corner-ticks blueprint-panel flex flex-col p-5">
                <span className="text-mono text-[10px] uppercase tracking-[0.3em] text-primary/50">
                  {s.k}
                </span>
                <span className="text-display mt-4 text-4xl">{s.v}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* GAME */}
      <Section id="game" code="02/GAME" title="CPU: Computing Potatoes Unlimited">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5">
            <div className="corner-ticks blueprint-panel relative overflow-hidden p-8">
              <div className="text-mono mb-6 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-primary/50">
                <span>PROJECT · CPU</span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse bg-primary" />
                  IN DEV
                </span>
              </div>
              {/* ASCII-ish factory diagram */}
              <pre className="text-mono text-[10px] leading-tight text-primary/70 md:text-xs">
{`  ┌──────┐   ┌──────┐   ┌──────┐
  │ IN   │──▶│ CPU  │──▶│ OUT  │
  └──────┘   └──┬───┘   └──────┘
                 │
              ┌──▼───┐
              │ 🥔🥔  │  potato
              │ 🥔🥔  │  workers
              └──────┘

  > MOV  potato, slot_A
  > ADD  potato, +1
  > JMP  loop_start
  > OUT  potato
`}
              </pre>
              <div className="text-mono mt-6 flex justify-between border-t border-primary/20 pt-4 text-[10px] uppercase tracking-[0.3em] text-primary/50">
                <span>V0.1 · PROTOTYPE</span>
                <span>ETA · TBA</span>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <div className="text-mono mb-4 inline-block bg-primary px-3 py-1 text-xs uppercase tracking-[0.3em] text-primary-foreground">
              Coming Soon
            </div>
            <p className="text-xl leading-relaxed text-primary/90">
              Process numbers in a factory that mimics a processor. Punch in simple instructions to
              command <em>potato workers</em>. Optimize solutions for challenging, open-ended
              puzzles.
            </p>
            <p className="text-mono mt-6 text-sm uppercase tracking-[0.2em] text-primary/60">
              No prior experience required.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {["Punch.", "Observe.", "Learn.", "Repeat."].map((word, i) => (
                <div
                  key={word}
                  className="border border-primary/30 px-4 py-6"
                >
                  <div className="text-mono text-[10px] uppercase tracking-[0.3em] text-primary/40">
                    STEP {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="text-display mt-2 text-2xl">{word}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* TEAM */}
      <Section id="team" code="03/TEAM" title="Two architects.">
        <div className="grid grid-cols-12 gap-6">
          {[
            {
              name: "Sufian Diraneyya",
              role: "Game Design & Programming",
              tag: "S · D",
              disciplines: ["Design", "Systems", "Programming"],
            },
            {
              name: "Kinan Diraneyya",
              role: "Art, Animation, Programming & Level Design",
              tag: "K · D",
              disciplines: ["Art", "Animation", "Programming", "Levels"],
            },
          ].map((p) => (
            <div
              key={p.name}
              className="corner-ticks blueprint-panel group col-span-12 flex flex-col p-8 md:col-span-6 md:p-10"
            >
              <div className="flex items-start justify-between">
                <div className="text-display flex h-24 w-24 items-center justify-center border-2 border-primary text-3xl">
                  {p.tag}
                </div>
                <div className="text-mono text-[10px] uppercase tracking-[0.3em] text-primary/50">
                  MEMBER {p.name === "Sufian Diraneyya" ? "01" : "02"}/02
                </div>
              </div>
              <h3 className="text-display mt-8 text-3xl md:text-4xl">{p.name}</h3>
              <p className="mt-3 text-lg text-primary/80">{p.role}</p>
              <div className="mt-8 flex flex-wrap gap-2 border-t border-primary/20 pt-6">
                {p.disciplines.map((d) => (
                  <span
                    key={d}
                    className="text-mono border border-primary/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em]"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SUBSCRIBE */}
      <section
        id="subscribe"
        className="relative border-t border-primary/20 bg-primary py-24 text-primary-foreground md:py-32"
      >
        <Skyline
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] w-full text-primary-foreground"
          opacity={0.06}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="text-mono text-xs uppercase tracking-[0.3em] opacity-70">
            [ 04/TRANSMISSION ]
          </div>
          <h2 className="text-display mt-6 text-5xl leading-[0.9] md:text-7xl">
            Be first on the
            <br />
            blueprint.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg opacity-80">
            Join our mailing list to be the first to know when{" "}
            <em>CPU: Computing Potatoes Unlimited</em> is officially announced.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@architect.io"
              className="text-mono flex-1 border-2 border-primary-foreground bg-transparent px-5 py-4 text-sm uppercase tracking-[0.15em] placeholder:text-primary-foreground/40 focus:outline-none"
            />
            <button
              type="submit"
              className="text-mono border-2 border-primary-foreground bg-primary-foreground px-6 py-4 text-xs uppercase tracking-[0.2em] text-primary hover:bg-transparent hover:text-primary-foreground"
            >
              {subscribed ? "✓ On the list" : "Subscribe"}
            </button>
          </form>
          {subscribed && (
            <p className="text-mono mt-4 text-xs uppercase tracking-[0.3em] opacity-70">
              Transmission received. Stand by.
            </p>
          )}
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer id="contact" className="relative border-t border-primary/20 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-6">
              <Tick label="05/CONTACT" />
              <h2 className="text-display mt-6 text-4xl md:text-5xl">Say hello.</h2>
              <p className="mt-4 max-w-md text-primary/80">
                For press inquiries, feedback, or just to say hello, drop us a line.
              </p>
              <a
                href="mailto:info@bunian.games"
                className="text-display mt-8 inline-block border-b-2 border-primary text-2xl hover:opacity-70 md:text-4xl"
              >
                info@bunian.games
              </a>
            </div>

            <div className="col-span-12 md:col-span-6">
              <Tick label="Follow the build" />
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { name: "X / Twitter", handle: "@buniangames", href: "#" },
                  { name: "Discord", handle: "join server", href: "#" },
                  { name: "YouTube", handle: "@buniangames", href: "#" },
                  { name: "LinkedIn", handle: "bunian-games", href: "#" },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    className="corner-ticks blueprint-panel group flex flex-col p-5 transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <span className="text-mono text-[10px] uppercase tracking-[0.3em] opacity-60">
                      {s.name}
                    </span>
                    <span className="text-display mt-2 text-lg">{s.handle} →</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="text-mono mt-16 flex flex-col items-start justify-between gap-4 border-t border-primary/20 pt-6 text-[10px] uppercase tracking-[0.3em] text-primary/50 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <img src={logoAsset.url} alt="" className="h-6 w-auto" />
              <span>Bunian Games · Amman, Jordan</span>
            </div>
            <span>© 2026 · Drafted with grid paper &amp; caffeine</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
