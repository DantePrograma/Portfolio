import { useState } from "react";

const skills = [
  {
    name: "HTML",
    icon: "https://svgl.app/library/html5.svg",
    filterColor: "#e34c26",
  },
  {
    name: "CSS",
    icon: "https://svgl.app/library/css.svg",
    filterColor: "#9826e4",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    filterColor: "#f1e05a",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    filterColor: "#3178c6",
  },
  {
    name: "React",
    icon: "https://svgl.app/library/react_dark.svg",
    filterColor: "#61dbfb",
  },
  {
    name: "Tailwind CSS",
    icon: "https://svgl.app/library/tailwindcss.svg",
    filterColor: "#38bdf8",
  },
  {
    name: "GitHub",
    icon: "https://svgl.app/library/github-dark.svg",
    filterColor: "#bebdbd",
  },
];

export const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="mb-6">
      <h2 className="flex mt-6 items-center mb-6 text-4xl font-bold gap-x-2 text-black/80 dark:text-white">
        Skills
      </h2>
      <div className="flex justify-between">
        {skills.map(({ name, icon, filterColor }, index) => (
          <picture className="flex flex-col items-center gap-2" key={name}>
            <img
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`w-16 h-16 transition-all ease-in-out duration-150`}
              style={
                hoveredIndex === index
                  ? { filter: `drop-shadow(0 0 1.75rem ${filterColor})` }
                  : {}
              }
              src={icon}
              alt={name}
            />
            <span className="font-semibold tracking-wider">{name}</span>
          </picture>
        ))}
      </div>
    </div>
  );
};
