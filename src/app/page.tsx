import { AboutMe, Certificates, Header, Hero, Projects, Services } from "./lib";

export default function Home() {
  return (
    <main className="min-h-screen p-10 container mx-auto">
      <Header />
      <Hero />
      <Projects />
      <Services />
      <Certificates />
      <AboutMe />
    </main>
  );
}
