import avellana from "@/assets/avellana.jpg";
import frutosRojos from "@/assets/frutosrojos.jpg";
import kitkat from "@/assets/kitkat.jpg";
import maracuya from "@/assets/maracuya.jpg";
import surtido from "@/assets/surtido.jpeg.asset.json";
import limeña from "@/assets/limeña.jpg";
import tresLeches from "@/assets/tresleches.jpg";

export const brand = {
  name: "Rolé",
  tagline: "roles de canela",
  tiktok: "https://www.tiktok.com/@roleperu",
  tiktokHandle: "@roleperu",
  instagram: "https://www.instagram.com/roleperu",
  // Reemplazar por el número real de WhatsApp del negocio
  whatsappNumber: "+51 935691619",
  whatsappUrl:
    "https://wa.me/51935691619?text=" +
    encodeURIComponent("¡Hola Rolé! Quiero hacer un pedido de roles de canela 🤎"),
};

export const heroImage = surtido;

export type Flavor = {
  name: string;
  description: string;
  image: string;
  alt: string;
};

export const flavors: Flavor[] = [
  {
    name: "Crema de avellana",
    description: "Suave, cremoso y con el sabor irresistible de avellanas.",
    image: avellana,
    alt: "Rol de canela cubierto con crema de avellana en su caja Rolé",
  },
  {
    name: "Tres leches",
    description:
      "Esponjoso, bañado en una deliciosa mezcla de tres leches y coronado con su cereza.",
    image: tresLeches,
    alt: "Rol de canela tres leches con canela espolvoreada y cereza",
  },
  {
    name: "Suspiro a la limeña",
    description:
      "Relleno de manjar de leche y cubierto con nuestro suspiro flameado.",
    image: limeña,
    alt: "Rol de canela con manjar y suspiro a la limeña flameado",
  },
  {
    name: "Maracuyá",
    description:
      "Crema de maracuyá natural con frosting de queso crema. Refrescante y dulce.",
    image: maracuya,
    alt: "Rol de canela decorado en forma de flor con crema de maracuyá",
  },
  {
    name: "Frutos rojos",
    description:
      "Suave, cremoso y con el toque perfecto de frutos rojos. Una combinación que enamora.",
    image: frutosRojos,
    alt: "Rol de canela con frosting y frutos rojos coronado con fresa",
  },
  {
    name: "Kit Kat",
    description: "Suave, cremoso y con trocitos crujientes de Kit Kat.",
    image: kitkat,
    alt: "Rol de canela con cobertura de chocolate y trozos de Kit Kat",
  },
  
];

export const faqs = [
  {
    q: "¿Cómo hago mi pedido?",
    a: "Escríbenos por WhatsApp con el sabor, la cantidad y la fecha en la que lo necesitas. Te confirmamos disponibilidad y el detalle de tu pedido al momento.",
  },
  {
    q: "¿Con cuánta anticipación debo pedir?",
    a: "Trabajamos por pedido y horneamos en lotes pequeños, por eso recomendamos reservar con anticipación. Consulta la disponibilidad del día por WhatsApp.",
  },
  {
    q: "¿Tienen local o tienda física?",
    a: "No contamos con local. Rolé nació en TikTok y trabajamos 100% por pedido, con entrega coordinada directamente contigo.",
  },
  {
    q: "¿Puedo pedir una caja con sabores surtidos?",
    a: "Sí. Puedes armar tu caja combinando los sabores disponibles del día; ideal para compartir o regalar.",
  },
  {
    q: "¿Hacen pedidos para cumpleaños o regalos?",
    a: "Sí. Cada caja va sellada con nuestra cinta Rolé, así que llega lista para regalar. Cuéntanos la ocasión al momento de pedir.",
  },
  {
    q: "¿Qué métodos de pago aceptan?",
    a: "Coordinamos el pago al confirmar tu pedido por WhatsApp. [Métodos de pago disponibles]",
  },
];
