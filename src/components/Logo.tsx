import { Heart } from "lucide-react";
import { brand } from "@/data/site";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex flex-col leading-none">
      <span className="inline-flex items-center gap-1.5">
        <span className="font-script text-3xl font-bold tracking-tight">{brand.name}</span>
        <Heart className="size-3.5 fill-current" aria-hidden="true" />
      </span>
      {!compact && (
        <span className="mt-0.5 text-[0.6rem] uppercase tracking-[0.32em] opacity-70">
          {brand.tagline}
        </span>
      )}
    </span>
  );
}
