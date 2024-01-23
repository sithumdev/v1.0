"use client";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { IExperience } from "../data/data";
import Skill from "../components/skill";
import { useState } from "react";
import Image from "next/image";

type IExperienceCard = {
  experience: IExperience;
  css?: string;
};

export default function ExperienceCard({
  experience: { role, organization, url, skills, duration, image },
  css,
}: IExperienceCard) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.a
      href={url}
      className={clsx(
        "flex items-center gap-2 px-8 py-4 rounded-full border",
        css
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Default Content */}
      {!isHovered && (
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
            </div>
          </div>
          <p className="text-sm">{duration}</p>
        </div>
      )}

      {/* End Default Content */}

      {/* Hovered Content */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            layoutId="skills"
          >
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Skill skill={skill} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* End Hovered Content */}
    </motion.a>
  );
}
