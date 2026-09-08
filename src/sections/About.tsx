import { Check } from "lucide-react";
import limeña from "@/assets/limeña.jpg";
import maracuya from "@/assets/maracuya.jpg";
import { SectionTitle } from "@/components/SectionTitle";

const points = [
  "Recetas propias con toques peruanos como el suspiro a la limeña.",
  "Horneado por pedido: nada se queda en vitrina.",
  "Empaque biodegradable sellado con nuestra cinta Rolé.",
];

export function About() {
  return (
    <section id="nosotros" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          <img
            src={limeña}
            alt="Rol de canela con suspiro a la limeña flameado"
            loading="lazy"
            className="mt-8 w-full rounded-3xl object-cover shadow-soft"
          />
          <img
            src={maracuya}
            alt="Rol de canela con crema de maracuyá en su empaque Rolé"
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-soft"
          />
        </div>

        <div>
          <SectionTitle
            align="left"
            eyebrow="Nosotros"
            title="Nacimos en TikTok, crecimos con cada antojo"
            description="Rolé empezó como un proyecto casero de roles de canela que se volvió comunidad. Hoy seguimos horneando igual: en tandas pequeñas, con ingredientes que se notan y coberturas que se preparan el mismo día."
          />

          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>

          <blockquote className="mt-10 rounded-2xl border border-border/70 bg-card p-6">
            <p className="font-script text-2xl text-primary">
              “Un rol tibio, cremoso y compartido sabe mejor.”
            </p>
            <footer className="mt-2 text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Equipo Rolé
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
