import Image from "next/image";
import { GALLERY } from "../data/data";

export default function AboutMe() {
  return (
    <div className="mt-10" id="aboutme">
      <hr className="my-5" />

      <div>
        <h4 className="text-2xl mb-5">About Me</h4>
        <p className="mt-5">
          Hola!, I&apos;m Sithum Basnayaka, a jet-setting Full Stack Developer
          from Sri Lanka. Coding maestro by day, wanderer by choice. From
          front-end finesse to back-end brilliance, I craft digital wonders.
          Whether conquering code or exploring new realms, I&apos;m your go-to
          guy. Let&apos;s turn challenges into victories, all while chasing
          horizons in cozy coding spaces. Join me on this journey – one line of
          code at a time! 👨‍💻✈️🌍
        </p>

        <div className="grid grid-cols-3 gap-2 mt-12">
          {GALLERY.map(({ image, title, description }) => (
            <Image
              key={title}
              src={image}
              width="400"
              height="400"
              alt={title}
              className="object-cover rounded-2xl"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
