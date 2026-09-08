import { Logo } from "@/components/Logo";
import { brand } from "@/data/site";

const links = [
  { label: "Sabores", href: "#sabores" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Cómo pedir", href: "#pedir" },
  { label: "Preguntas", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm text-primary">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Roles de canela artesanales hechos por pedido en Perú. Sin local, solo antojos bien
            horneados.
          </p>
        </div>

        <nav aria-label="Pie de página" className="flex flex-col gap-2.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
          <a
            href={brand.tiktok}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-primary"
          >
            TikTok {brand.tiktokHandle}
          </a>
          <a
            href={brand.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-primary"
          >
            WhatsApp {brand.whatsappNumber}
          </a>
        </div>
      </div>

      <div className="border-t border-border/70 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Rolé · Roles de canela. Todos los derechos reservados.
      </div>
    </footer>
  );
}
