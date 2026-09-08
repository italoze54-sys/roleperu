import { MessageCircle } from "lucide-react";
import { brand } from "@/data/site";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M16.5 3c.3 2.1 1.6 3.7 3.9 4v2.7c-1.4.1-2.8-.3-4-1v6.1c0 3.7-2.7 6.2-6 6.2A5.9 5.9 0 0 1 4.5 15c0-3.3 2.6-5.9 5.9-5.9.4 0 .7 0 1.1.1v2.9c-.3-.1-.7-.2-1.1-.2a3 3 0 0 0 0 6.1c1.7 0 3-1.2 3-3.1V3h3.1Z" />
    </svg>
  );
}

export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <a
        href={brand.tiktok}
        target="_blank"
        rel="noreferrer"
        aria-label="Ver Rolé en TikTok"
        className="group flex size-13 items-center justify-center rounded-full bg-card text-primary shadow-lift ring-1 ring-border transition-transform duration-300 hover:-translate-y-1"
      >
        <TikTokIcon className="size-6 transition-transform duration-300 group-hover:scale-110" />
      </a>
      <a
        href={brand.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Pedir por WhatsApp"
        className="group flex items-center gap-2 rounded-full bg-primary px-4 py-3.5 text-primary-foreground shadow-lift transition-transform duration-300 hover:-translate-y-1"
      >
        <MessageCircle className="size-6" aria-hidden="true" />
        <span className="hidden text-sm font-medium sm:inline">Pedir por WhatsApp</span>
      </a>
    </div>
  );
}
