import { MessageCircle, ClipboardList, PackageCheck } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { LinkButton } from "@/components/Button";
import { brand } from "@/data/site";

const steps = [
  {
    icon: MessageCircle,
    title: "Escríbenos",
    text: "Cuéntanos por WhatsApp qué sabores quieres y para cuándo los necesitas.",
  },
  {
    icon: ClipboardList,
    title: "Confirmamos tu caja",
    text: "Revisamos disponibilidad del día, cantidad y coordinamos el pago.",
  },
  {
    icon: PackageCheck,
    title: "Recibe tus roles",
    text: "Horneamos y sellamos tu caja para entregarla en la fecha acordada.",
  },
];

export function HowToOrder() {
  return (
    <section id="pedir" className="surface-grain py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Cómo pedir"
          title="Tres pasos y listo"
          description="Trabajamos solo por pedido, así que todo se coordina de forma directa contigo."
        />

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className="relative rounded-2xl border border-border/70 bg-card p-7 transition-shadow duration-300 hover:shadow-soft"
            >
              <span className="font-display absolute top-5 right-6 text-4xl text-sand">
                0{i + 1}
              </span>
              <Icon className="size-6 text-primary" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-semibold text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex justify-center">
          <LinkButton href={brand.whatsappUrl} target="_blank" rel="noreferrer" size="lg">
            Empezar mi pedido
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
