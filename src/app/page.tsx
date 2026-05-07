import { Hero } from "@/components/Hero";
import { Sensorial } from "@/components/Sensorial";
import { Experiencias } from "@/components/Experiencias";
import { Publico } from "@/components/Publico";
import { Ingressos } from "@/components/Ingressos";
import { Construcao } from "@/components/Construcao";
import { Posicionamento } from "@/components/Posicionamento";
import { Fechamento } from "@/components/Fechamento";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Hero />
      <Sensorial />
      <Experiencias />
      <Publico />
      <Ingressos />
      <Construcao />
      <Posicionamento />
      <Fechamento />
      <Faq />
      <Footer />
    </main>
  );
}
