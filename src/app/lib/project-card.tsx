import clsx from "clsx";
import { IProject } from "../data/data";
import Image from "next/image";

type IProjectCard = {
  project: IProject;
  css?: string;
};

export default function ProjectCard({
  project: { name, client, duration, technologies, attachment, tech },
  css,
}: IProjectCard) {
  return (
    <div
      className={clsx(
        "flex items-start flex-col gap-5 px-4 py-5 border rounded-2xl",
        css
      )}
    >
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm mt-1">
        {client} - {duration}
      </p>

      <div className="grid grid-cols-2 gap-2">
        {attachment.map((attachment) => (
          <Image
            key={attachment}
            src={attachment}
            width="500"
            height="375"
            alt={name}
            className="object-cover"
          />
        ))}
      </div>

      <div className="flex flex-wrap gap-4 flex-1">
        {tech.map((technology) => (
          <Image
            key={technology}
            src={technology}
            width="80"
            height="100"
            alt={technology}
            className="object-contain"
          />
        ))}
      </div>
    </div>
  );
}
