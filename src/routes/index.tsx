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

// Architectural skyline echoing the logo motif — used as an ambient
// background layer across sections.
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
        <rect x="358" y="10" width="2" height="55" />
        <rect x="340" y="60" width="40" height="240" />
        <rect x="330" y="90" width="60" height="210" />
        <rect x="120" y="140" width="70" height="160" />
        <rect x="180" y="110" width="90" height="190" />
        <rect x="260" y="160" width="50" height="140" />
        <rect x="440" y="130" width="90" height="170" />
        <rect x="520" y="90" width="70" height="210" />
        <rect x="580" y="150" width="60" height="150" />
        <rect x="700" y="70" width="55" height="230" />
        <rect x="745" y="130" width="70" height="170" />
        <rect x="805" y="100" width="45" height="200" />
        <rect x="880" y="160" width="80" height="140" />
        <rect x="950" y="120" width="60" height="180" />
        <rect x="1000" y="180" width="90" height="120" />
        <rect x="1080" y="150" width="50" height="150" />
      </g>
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

function Index() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <main className="relative min-h-screen overflow-hidden text-primary">
      {/* Persistent skyline backdrop — ties every section to the logo motif */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-[55vh]">
        <Skyline
          className="absolute inset-x-0 bottom-0 h-full w-full text-primary"
          opacity={0.06}
        />
        <Skyline
          className="absolute inset-x-0 bottom-0 h-[80%] w-full text-primary"
          opacity={0.09}
        />
      </div>

      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-primary/15 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Bunian Games" className="h-8 w-auto" />
            <span className="text-display text-sm">Bunian Games</span>
          </a>
          <nav className="text-mono hidden gap-8 text-xs uppercase tracking-[0.2em] md:flex">
            <a href="#about" className="hover:text-primary/70">About</a>
            <a href="#game" className="hover:text-primary/70">Game</a>
            <a href="#team" className="hover:text-primary/70">Team</a>
            <a href="#contact" className="hover:text-primary/70">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative z-10 pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <img
            src={logoAsset.url}
            alt="Bunian Games logo"
            className="mx-auto h-28 w-auto md:h-36"
          />
          <h1 className="text-display mt-10 text-5xl leading-[0.95] md:text-7xl">
            Bunian Games
          </h1>
          <p className="text-mono mt-4 text-xs uppercase tracking-[0.35em] text-primary/60">
            boon-yaan · Arabic for architecture
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative z-10 border-t border-primary/15 py-24 md:py-28">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-mono mb-8 text-xs uppercase tracking-[0.35em] text-primary/60">
            About
          </h2>
          <p className="text-xl leading-relaxed text-primary/90 md:text-2xl">
            Bunian (pronounced <em>boon-yaan</em>) is Arabic for architecture.
            We are a two-person independent game development studio based in
            Jordan, specializing in programming and logic-puzzle video games.
          </p>
        </div>
      </section>

      {/* GAME */}
      <section id="game" className="relative z-10 border-t border-primary/15 py-24 md:py-28">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-mono mb-8 text-xs uppercase tracking-[0.35em] text-primary/60">
            Current Project
          </h2>
          <h3 className="text-display text-3xl md:text-5xl">
            CPU: Computing Potatoes Unlimited
          </h3>
          <p className="mt-8 text-lg leading-relaxed text-primary/85 md:text-xl">
            Process numbers in a factory that mimics a processor. Punch in
            simple instructions to command potato workers. Optimize solutions
            for challenging, open-ended puzzles. No prior experience required.
            Punch, observe, learn, repeat.
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="relative z-10 border-t border-primary/15 py-24 md:py-28">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-mono mb-8 text-xs uppercase tracking-[0.35em] text-primary/60">
            Our Team
          </h2>
          <ul className="divide-y divide-primary/15 border-y border-primary/15">
            <li className="py-6">
              <div className="text-display text-2xl md:text-3xl">Sufian Diraneyya</div>
              <div className="mt-1 text-primary/70">Game Design & Programming</div>
            </li>
            <li className="py-6">
              <div className="text-display text-2xl md:text-3xl">Kinan Diraneyya</div>
              <div className="mt-1 text-primary/70">
                Art, Animation, Programming, and Level Design
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section
        id="subscribe"
        className="relative z-10 border-t border-primary/15 py-24 md:py-28"
      >
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-mono mb-6 text-xs uppercase tracking-[0.35em] text-primary/60">
            Stay Updated
          </h2>
          <p className="mx-auto max-w-lg text-lg text-primary/85">
            Join our mailing list to be the first to know when{" "}
            <em>CPU: Computing Potatoes Unlimited</em> is officially announced.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="text-mono flex-1 border border-primary/40 bg-transparent px-4 py-3 text-sm focus:border-primary focus:outline-none"
            />
            <button
              type="submit"
              className="text-mono border border-primary bg-primary px-6 py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground hover:bg-transparent hover:text-primary"
            >
              {subscribed ? "Subscribed" : "Subscribe"}
            </button>
          </form>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer
        id="contact"
        className="relative z-10 border-t border-primary/15 py-20"
      >
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-mono mb-6 text-xs uppercase tracking-[0.35em] text-primary/60">
            Contact Us
          </h2>
          <p className="text-primary/80">
            For press inquiries, feedback, or just to say hello:
          </p>
          <a
            href="mailto:info@bunian.games"
            className="text-display mt-4 inline-block border-b border-primary text-2xl hover:opacity-70 md:text-3xl"
          >
            info@bunian.games
          </a>

          <div className="text-mono mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-primary/60">X / Twitter</a>
            <a href="#" className="hover:text-primary/60">Discord</a>
            <a href="#" className="hover:text-primary/60">YouTube</a>
            <a href="#" className="hover:text-primary/60">LinkedIn</a>
          </div>

          <div className="text-mono mt-16 text-[10px] uppercase tracking-[0.3em] text-primary/40">
            © 2026 Bunian Games
          </div>
        </div>
      </footer>
    </main>
  );
}
