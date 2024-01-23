"use client";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { IExperience } from "../data/data";
import Skill from "../components/skill";
import { useState } from "react";

type IExperienceCard = {
  experience: IExperience;
  css?: string;
};

export default function ExperienceCard({
  experience: { role, organization, url, skills, duration },
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
    <motion.div
      className={clsx(
        "flex items-center justify-between gap-2 px-8 py-4 rounded-full border",
        css
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Default Content */}
      {!isHovered && (
        <>
          <div>
            <h5 className="text-lg">{role}</h5>
            <h6 className="font-semibold mt-2">{organization}</h6>
          </div>
          <p className="text-sm">{duration}</p>
        </>
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
    </motion.div>
  );
}
