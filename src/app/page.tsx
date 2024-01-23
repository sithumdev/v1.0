import Image from "next/image";
import { Certificates, Header, Hero, Projects } from "./lib";

export default function Home() {
  return (
    <main className="min-h-screen p-10 container mx-auto">
      <Header />
      <Hero />
      <Projects />
      <Certificates />
    </main>
  );
}
