import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { Hero } from "@/sections/Hero";
import { Benefits } from "@/sections/Benefits";
import { Flavors } from "@/sections/Flavors";
import { About } from "@/sections/About";
import { HowToOrder } from "@/sections/HowToOrder";
import { FAQ } from "@/sections/FAQ";
import { Contact } from "@/sections/Contact";

const title = "Rolé | Roles de canela artesanales por pedido en Perú";
const description =
  "Roles de canela suaves y recién horneados: tres leches, maracuyá, suspiro a la limeña, Kit Kat y más. Pide tu caja por WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Flavors />
        <About />
        <HowToOrder />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
