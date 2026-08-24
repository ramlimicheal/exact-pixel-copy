import { Logo } from "./nav";

const menu = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "LinkedIn", href: "#top" },
  { label: "X / Twitter", href: "#top" },
  { label: "Instagram", href: "#top" },
  { label: "Dribbble", href: "#top" },
];

export function Footer() {
  return (
    <footer className="noise relative overflow-hidden bg-dark text-dark-foreground">
      <div
        aria-hidden="true"
        className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-lime opacity-35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-sun opacity-40 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Logo onDark />
            <p className="mt-5 max-w-56 text-sm leading-relaxed text-dark-muted">
              A digital studio for brands that want design, code, and AI working
              as one.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest text-dark-muted uppercase">
              Menu
            </p>
            <ul className="mt-5 space-y-3">
              {menu.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-dark-foreground/85 transition-colors hover:text-lime"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest text-dark-muted uppercase">
              Socials
            </p>
            <ul className="mt-5 space-y-3">
              {socials.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-dark-foreground/85 transition-colors hover:text-lime"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest text-dark-muted uppercase">
              Contact
            </p>
            <ul className="mt-5 space-y-3 text-sm text-dark-foreground/85">
              <li>
                <a
                  href="mailto:hello@novara.studio"
                  className="transition-colors hover:text-lime"
                >
                  hello@novara.studio
                </a>
              </li>
              <li>+1 (415) 555-0132</li>
              <li>
                San Francisco
                <br />
                &amp; remote worldwide
              </li>
            </ul>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="mt-20 text-center font-display text-[16.5vw] leading-[0.85] tracking-tight text-dark-foreground select-none lg:text-[13rem]"
        >
          Novara<span className="align-super text-[0.35em]">®</span>
        </p>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-dark-border pt-7 text-xs text-dark-muted sm:flex-row">
          <p>© 2026 Novara Studio. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#top" className="transition-colors hover:text-lime">
              Privacy Policy
            </a>
            <a href="#top" className="transition-colors hover:text-lime">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
