import { CakeSlice, Gift, Clock, Sparkles } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";

const benefits = [
  {
    icon: CakeSlice,
    title: "Masa suave de verdad",
    text: "Horneamos en lotes pequeños para que muerdas un rol esponjoso, nunca seco ni recalentado.",
  },
  {
    icon: Sparkles,
    title: "Coberturas para cada antojo",
    text: "Desde el clásico tres leches hasta maracuyá o Kit Kat: eliges el sabor según tu día.",
  },
  {
    icon: Gift,
    title: "Llega listo para regalar",
    text: "Cada caja va sellada con nuestra cinta Rolé, así que puedes enviarla tal cual a quien quieras sorprender.",
  },
  {
    icon: Clock,
    title: "Pedido simple por WhatsApp",
    text: "Escribes, eliges tu sabor y coordinamos la entrega. Sin apps, sin registros, sin vueltas.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Por qué Rolé"
          title="Un rol pensado en cada detalle"
          description="No hacemos cientos de roles al día. Hacemos los que podemos hornear bien."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
