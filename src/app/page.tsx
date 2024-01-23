import Image from "next/image";
import { AboutMe, Certificates, Header, Hero, Projects } from "./lib";

export default function Home() {
  return (
    <main className="min-h-screen p-10 container mx-auto">
      <Header />
      <Hero />
      <Projects />
      <Certificates />
      <AboutMe />
    </main>
  );
}
