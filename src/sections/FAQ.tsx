import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { faqs } from "@/data/site";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <SectionTitle eyebrow="Preguntas frecuentes" title="Lo que más nos consultan" />

        <div className="mt-12 divide-y divide-border rounded-3xl border border-border/70 bg-card px-6">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium text-primary"
                  >
                    {item.q}
                    <Plus
                      aria-hidden="true"
                      className={cn(
                        "size-5 shrink-0 text-muted-foreground transition-transform duration-300",
                        isOpen && "rotate-45",
                      )}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  hidden={!isOpen}
                  className="pb-5 text-sm leading-relaxed text-muted-foreground"
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
