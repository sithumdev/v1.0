import Image from "next/image";
import { IExperience } from "../data/data";
import clsx from "clsx";

type IExperienceCard = {
  experience: IExperience;
  css?: string;
};

export default function ExperienceCard({
  experience: { role, organization, url, skills, duration, image },
  css,
}: IExperienceCard) {
  return (
    <div
      className={clsx(
        "flex items-center gap-2 px-8 py-4 rounded-full border",
        css
      )}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-5">
          <Image
            src={image}
            width="50"
            height="50"
            alt={organization}
            className="object-cover"
          />
          <div className="text-left min-w-[100px]">
            <h5 className="text-lg">{role}</h5>
            <h6 className="font-semibold mt-2">{organization}</h6>
            <p className="text-sm lg:hidden">{duration}</p>
          </div>
        </div>
        <p className="text-sm hidden lg:block">{duration}</p>
      </div>
    </div>
  );
}
