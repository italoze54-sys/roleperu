import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { LinkButton } from "@/components/Button";
import { brand } from "@/data/site";
import { cn } from "@/lib/utils";

const links = [
  { label: "Sabores", href: "#sabores" },
  { label: "Por qué Rolé", href: "#beneficios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Cómo pedir", href: "#pedir" },
  { label: "Preguntas", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled ? "bg-background/85 shadow-soft backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#inicio" className="text-primary" aria-label="Rolé, inicio">
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-muted-foreground transition-colors hover:text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LinkButton
            href={brand.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex"
          >
            Pedir ahora
          </LinkButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="flex size-11 items-center justify-center rounded-full text-primary transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="menu-movil" className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Móvil" className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3.5 text-base text-primary last:border-0"
              >
                {l.label}
              </a>
            ))}
            <LinkButton
              href={brand.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              size="lg"
              className="mt-4 mb-2"
            >
              Pedir por WhatsApp
            </LinkButton>
          </nav>
        </div>
      )}
    </header>
  );
}
