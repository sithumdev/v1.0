import Image from "next/image";
import { Button } from "../components";
import { ExperienceCard } from ".";
import { EXPERIENCES } from "../data/data";

export default function Hero() {
  return (
    <section className="grid grid-cols-2 mt-10 place-items-center">
      <div className="col-span-2 lg:col-span-1 relative">
        <div className="overflow-hidden rounded-full border w-72 h-72 object-fit">
          <Image
            src="/me.jpeg"
            width="500"
            height="500"
            alt="Sithum Basnayaka"
            className="object-cover"
          />

          <Image
            src="/docker.png"
            width="50"
            height="50"
            alt="Docker"
            className="object-cover absolute -top-10 left-0 lg:-left-14 z-50"
          />

          <Image
            src="/typescript.png"
            width="30"
            height="30"
            alt="Docker"
            className="object-cover absolute -top-10 right-0 z-50"
          />

          <Image
            src="/github.png"
            width="60"
            height="60"
            alt="Docker"
            className="object-cover absolute top-56 lg:top-20 -left-10 lg:-left-28 z-50 scale-75 lg:scale-100"
          />
        </div>
        <h2 className="text-2xl mt-2">I&apos;m Sithum Basnayaka</h2>
        <p className="mt-1">Full stack developer, Based in Sri Lanka</p>
      </div>

      <div className="col-span-2 lg:col-span-1 text-center mt-5">
        <h3 className="text-2xl lg:text-4xl">
          Transforming Challenges into Code: Unleashing the Power of Full Stack
          Development
        </h3>
        <Button css="mt-5" isActive>
          Let&apos;s Talk
        </Button>

        <hr className="my-5" />

        <div>
          <h4 className="text-2xl">Working Experience</h4>
          {EXPERIENCES.map((experience) => (
            <ExperienceCard
              experience={experience}
              key={experience.organization}
              css="mt-4"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
