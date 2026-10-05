import Reveal, { SLIDE_FROM } from "./Reveal";

const badgeUrl = ({ name, logo, logoColor, labelColor }) =>
  `https://img.shields.io/badge/-${encodeURIComponent(name)}-1a1b27` +
  `?style=flat&logo=${logo}&logoColor=${logoColor}&labelColor=${labelColor}`;

const groups = [
  {
    title: "Languages",
    badges: [
      {
        name: "JavaScript",
        logo: "javascript",
        logoColor: "black",
        labelColor: "F7DF1E",
      },
      {
        name: "TypeScript",
        logo: "typescript",
        logoColor: "white",
        labelColor: "3178C6",
      },
      {
        name: "Java",
        logo: "openjdk",
        logoColor: "white",
        labelColor: "ED8B00",
      },
      { name: "Go", logo: "go", logoColor: "white", labelColor: "00ADD8" },
    ],
  },
  {
    title: "Frontend",
    badges: [
      {
        name: "React",
        logo: "react",
        logoColor: "61DAFB",
        labelColor: "20232a",
      },
      {
        name: "Next.js",
        logo: "next.js",
        logoColor: "white",
        labelColor: "000000",
      },
      {
        name: "HTML5",
        logo: "html5",
        logoColor: "white",
        labelColor: "E34F26",
      },
      {
        name: "Tailwind CSS",
        logo: "tailwind-css",
        logoColor: "white",
        labelColor: "38B2AC",
      },
    ],
  },
  {
    title: "Backend",
    badges: [
      {
        name: "Node.js",
        logo: "node.js",
        logoColor: "white",
        labelColor: "339933",
      },
      {
        name: "Express",
        logo: "express",
        logoColor: "white",
        labelColor: "000000",
      },
      {
        name: "Spring Boot",
        logo: "spring-boot",
        logoColor: "white",
        labelColor: "6DB33F",
      },
    ],
  },
  {
    title: "Databases",
    badges: [
      {
        name: "MySQL",
        logo: "mysql",
        logoColor: "white",
        labelColor: "4479A1",
      },
      {
        name: "MongoDB",
        logo: "mongodb",
        logoColor: "white",
        labelColor: "47A248",
      },
    ],
  },
  {
    title: "Tools",
    badges: [
      { name: "Git", logo: "git", logoColor: "white", labelColor: "F05033" },
      {
        name: "GitHub",
        logo: "github",
        logoColor: "white",
        labelColor: "181717",
      },
      { name: "Jest", logo: "jest", logoColor: "white", labelColor: "C21325" },
      {
        name: "Cloudflare Workers",
        logo: "cloudflare",
        logoColor: "white",
        labelColor: "F38020",
      },
    ],
  },
];

export default function Skills() {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-6 md:gap-8">
      {groups.map((group) => (
        <div
          key={group.title}
          className="flex flex-col items-center gap-3 md:flex-row md:items-center md:gap-0 skills-group"
        >
          <div className="w-full md:w-1/3 text-center md:text-left md:ml-30">
            <h2 className="text-xl md:text-2xl">{group.title}:</h2>
          </div>

          <div className="w-full md:w-3/4 flex flex-wrap justify-center md:justify-start gap-5">
            {group.badges.map((badge) => (
              <Reveal direction={SLIDE_FROM.right}>
                <label key={badge.name}>
                  <img
                    src={badgeUrl(badge)}
                    alt={badge.name}
                    height={28}
                    loading="lazy"
                    className="block h-7 w-auto"
                  />
                </label>
              </Reveal>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
