import { Heart, Sparkles } from "lucide-react";
import { LinkButton } from "@/components/Button";
import { brand, heroImage } from "@/data/site";
import roles from  "@/assets/roles4.jpg"
const stats = [
  { value: "7", label: "sabores de rol" },
  { value: "100%", label: "hecho por pedido" },
  { value: brand.tiktokHandle, label: "en TikTok" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden surface-grain pt-28 pb-16 md:pt-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_1fr]">
        <div className="reveal">
          <p className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs uppercase tracking-[0.24em] text-secondary-foreground">
            <Sparkles className="size-3.5" aria-hidden="true" />
            Roles de canela artesanales
          </p>

          <h1 className="mt-6 text-4xl leading-[1.05] font-semibold text-primary sm:text-5xl md:text-6xl">
            Roles de canela recién horneados,
            <span className="font-script block text-accent-foreground/90">
              hechos para antojarte
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Masa suave, relleno generoso y coberturas que cambian según tu antojo. Cada caja se
            prepara por pedido y llega sellada con nuestra cinta Rolé, lista para compartir o
            regalar.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href={brand.whatsappUrl} target="_blank" rel="noreferrer" size="lg">
              <Heart className="size-4 fill-current" aria-hidden="true" />
              Pedir por WhatsApp
            </LinkButton>
            <LinkButton href="#sabores" variant="outline" size="lg">
              Ver sabores
            </LinkButton>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-semibold text-primary">{s.value}</dd>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal relative [animation-delay:120ms]">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-sand/60 blur-2xl" aria-hidden="true" />
          <img
            src={roles}
            alt="Cuatro roles de canela Rolé con distintas coberturas sobre una tabla de mármol"
            className="w-full rounded-3xl object-cover shadow-lift"
            width={1200}
            height={1600}
            loading="eager"
          />
          <div className="absolute -bottom-5 left-4 rounded-2xl bg-card/95 px-5 py-3 shadow-soft backdrop-blur sm:left-8">
            <p className="font-script text-xl text-primary">Sabores que enamoran</p>
            <p className="text-xs tracking-wide text-muted-foreground">
              Horneado del día · Perú
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
