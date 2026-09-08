import { SectionTitle } from "@/components/SectionTitle";
import { LinkButton } from "@/components/Button";
import { brand, flavors } from "@/data/site";

export function Flavors() {
  return (
    <section id="sabores" className="surface-grain py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Nuestra carta"
          title={
            <>
              Sabores que encontrarás en <span className="font-script">Rolé</span>
            </>
          }
          description="La disponibilidad varía cada día. Consúltanos por WhatsApp qué sabores salieron del horno."
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {flavors.map((flavor) => (
            <li
              key={flavor.name}
              className="group overflow-hidden rounded-3xl border border-border/70 bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={flavor.image}
                  alt={flavor.alt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary">{flavor.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {flavor.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <LinkButton href={brand.whatsappUrl} target="_blank" rel="noreferrer" size="lg">
            Armar mi caja
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
