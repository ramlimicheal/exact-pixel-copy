import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Studio", href: "#studio" },
];

export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span
        className={`block h-4 w-4 rotate-45 rounded-[4px] ${
          onDark ? "bg-lime" : "bg-foreground"
        }`}
      />
      <span
        className={`text-lg font-semibold tracking-tight ${
          onDark ? "text-dark-foreground" : "text-foreground"
        }`}
      >
        Novara
      </span>
    </a>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden h-10 items-center rounded-full bg-lime px-5 text-sm font-semibold text-lime-foreground transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            Book a call
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 items-center justify-center rounded-full bg-lime px-5 text-sm font-semibold text-lime-foreground"
            >
              Book a call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
