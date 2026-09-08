import { MessageCircle, Mail, Clock } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { LinkButton } from "@/components/Button";
import { brand } from "@/data/site";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M16.5 3c.3 2.1 1.6 3.7 3.9 4v2.7c-1.4.1-2.8-.3-4-1v6.1c0 3.7-2.7 6.2-6 6.2A5.9 5.9 0 0 1 4.5 15c0-3.3 2.6-5.9 5.9-5.9.4 0 .7 0 1.1.1v2.9c-.3-.1-.7-.2-1.1-.2a3 3 0 0 0 0 6.1c1.7 0 3-1.2 3-3.1V3h3.1Z" />
    </svg>
  );
}

const channels = [
  { icon: MessageCircle, label: "WhatsApp", value: brand.whatsappNumber, href: brand.whatsappUrl },
  { icon: TikTokIcon, label: "TikTok", value: brand.tiktokHandle, href: brand.tiktok },
];

export function Contact() {
  return (
    <section id="contacto" className="pb-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="rounded-3xl bg-primary px-6 py-14 text-primary-foreground shadow-lift sm:px-12">
          <SectionTitle
            eyebrow="Haz tu pedido"
            title={
              <span className="text-primary-foreground">
                ¿Se te antojó un <span className="font-script">Rolé</span>?
              </span>
            }
            className="[&_p]:text-primary-foreground/75"
            description="Escríbenos por WhatsApp y coordinamos tu caja. No tenemos local: todo se hornea por pedido y se entrega contigo."
          />

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <LinkButton
              href={brand.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              size="lg"
              className="bg-cream text-primary hover:bg-cream/90"
            >
              Pedir por WhatsApp
            </LinkButton>
            <LinkButton
              href={brand.tiktok}
              target="_blank"
              rel="noreferrer"
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Síguenos en TikTok
            </LinkButton>
          </div>

          <dl className="mt-14 flex flex-wrap justify-center gap-8 border-t border-primary-foreground/15 pt-10 sm:gap-16">
            {channels.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon className="size-5 text-primary-foreground/70 shrink-0" />
                <div>
                  <dt className="text-xs uppercase tracking-[0.22em] text-primary-foreground/60">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm">
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="underline-offset-4 hover:underline"
                      >
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
