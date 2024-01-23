import clsx from "clsx";
import { IProject } from "../data/data";

type IProjectCard = {
  project: IProject;
  css?: string;
};

export default function ProjectCard({
  project: { name, client, duration, technologies },
  css,
}: IProjectCard) {
  return (
    <div
      className={clsx(
        "flex items-center gap-5 px-4 py-5 border rounded-full",
        css
      )}
    >
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm mt-1">
        {client} - {duration}
      </p>
    </div>
  );
}
