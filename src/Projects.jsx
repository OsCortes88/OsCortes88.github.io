import Footer from "./Footer";
import ProjectCard from "./ProjectCard";
import Reveal, { SLIDE_FROM } from "./Reveal";

export const projects = {
  node: [
    {
      title: "LIBSC Better Maps App",
      description:
        "The Lithium-Ion Battery Supply Chain Better Maps web application was my senior capstone project at CSUMB.\n In this project, I worked closely with the National Renewable Energy Laboratory (NREL) to create a tooling application that generated graphical data on their production facilities.\nUsers could filter the data by state, products, status, and production capacity. In addition, the web application provides an export feature that allows users to download images of the map and table data.",
      link: "https://github.com/OsCortes88/LIBSC-Better-Maps",
      image: "/img/projects/LIBSC.png",
      date: "May 13, 2024",
    },
    {
      title: "Mixify App",
      description:
        "This web application is for music enthusiasts, people who are eager to explore new music.\nWith Mixify, you can create an account and see the latest releases of singles, albums, and compilations on Spotify. You can also search for songs and add them to a community playlist where people can discover new music. You can visit the community playlist and preview songs if you are feeling adventurous. In addition, you can search for the top tracks of an artist.",
      link: "https://github.com/OsCortes88/Mixify",
      image: "/img/projects/mixify.png",
      date: "May 19, 2023",
    },
  ],
  cAndPython: [
    {
      title: "Panther Casino",
      description:
        "Are you looking for a way to gamble without losing any money? If so, then look no more, the Panther casino is ideal for you.\nWe have games such as roulette, blackjack, and even a number-guessing game. No real money is at stake in this casino simulator, so feel free to play as long as you wish and have fun!",
      link: "https://github.com/OsCortes88/Panther-Casino",
      image: "/img/projects/Casino.jpg",
      date: "May 14, 2022",
    },
    {
      title: "Image Filtering",
      description:
        "Have you ever wanted to apply a filter to an image? Well, now you can do it easily with a click of a button.\nThis Flask app lets users upload an image and apply filters like Grayscale, Negative, or Sepia. The edited image is saved to their computer and previewed on the webpage. It also includes a weather‑based filter that uses a weather API and a ZIP code to apply an effect that matches local conditions. Additional features include generating a collage from a single image and converting any image into ASCII art saved as a text file.",
      link: "https://github.com/OsCortes88/CST-205-Final-Project",
      image: "/img/projects/CSTProject.jpg",
      date: "May 20, 2022",
    },
  ],
  HTMLANdJS: [
    {
      title: "Google Feud Simulator",
      description:
        "Have you ever wanted to play Family Feud? Well, today is your day to play something similar with Google Feud.\nSelect one of 4 categories and attempt to get the top 10 things that Google users search for. Keep in mind that 3 strikes and you are out.",
      link: "https://github.com/OsCortes88/Google-Feud-Simulator",
      image: "/img/projects/google-project.jpg",
      date: "December 10, 2022",
    },
    {
      title: "Base Conversion",
      description:
        "Looking to learn something new? Come over and visit the Binary/Hex Website.\nThis website serves for educational purposes. Viewers can read about the different numerical systems there are, primarily the binary and hexadecimal systems. This site goes in depth as to what they are and how to make the necessary conversions.",
      link: "https://github.com/OsCortes88/Base-Converter",
      image: "/img/projects/baseconverter.png",
      date: "May 15, 2019",
    },
  ],
  java: [
    {
      title: "Battleship",
      description:
        "Want to play a game but don't have any friends? Then why not play battleship?\nThis program simulates a single-player game of Battleship in the console. Players have 20 attempts to find all of the enemy’s ships, or they will lose.",
      link: "https://github.com/OsCortes88/Battle-Ship",
      image: "/img/projects/battleship.png",
      date: "November 18, 2018",
    },
    {
      title: "Bingo",
      description:
        "Feeling bored? Come ahead and play some Bingo! This program simulates a game of bingo against the computer in a console.\nLocate the values in your ballot and clear a line before the computer does!",
      link: "https://github.com/OsCortes88/Bingo",
      image: "/img/projects/bingo.jpg",
      date: "October 10, 2018",
    },
  ],
};

const scrollToSelection = (id) => {
  document
    .getElementById(id)
    .scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Projects() {
  return (
    <>
      <header>
        <div className="flex flex=col justify-center items-center relative bg-[url('/img/backgrounds/blur.jpg')] bg-cover bg-center min-h-[60vh] md:min-h-[75vh] w-full">
          <div className="absolute inset-0 bg-black/50"></div>

          <Reveal direction={SLIDE_FROM.right}>
            <div className="flex flex-col gap-10 relative z-10 p-8 justify-center items-center min-h-[60vh]">
              <h1 className="text-white text-4xl font-bold text-center">
                Computer Projects
              </h1>

              <div className="flex flex-wrap justify-center gap-3 text-white">
                <a
                  href="#/projects"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSelection("node");
                  }}
                  className="bg-blue-500/50 px-6 py-3 rounded hover:bg-blue-600 hover:scale-105 transition"
                >
                  Node.js
                </a>
                <a
                  href="#/projects"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSelection("c");
                  }}
                  className="bg-blue-500/50 px-6 py-3 rounded hover:bg-blue-600 hover:scale-105 transition"
                >
                  C++ & Python
                </a>
                <a
                  href="#/projects"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSelection("html");
                  }}
                  className="bg-blue-500/50 px-6 py-3 rounded hover:bg-blue-600 hover:scale-105 transition"
                >
                  HTML & JS
                </a>
                <a
                  href="#/projects"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSelection("java");
                  }}
                  className="bg-blue-500/50 px-6 py-3 rounded hover:bg-blue-600 hover:scale-105 transition"
                >
                  Java
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      <main className="flex flex-col items-center pb-10 gap-10">
        <Reveal className="w-full max-w-4xl mx-auto flex flex-col items-center">
          <section
            id="node"
            className="flex flex-col items-center justify-center"
          >
            <div className="flex items-center justify-center my-8 w-full">
              <div className="grow border-(--brand-red) border-t "></div>

              <h2 className="px-6 sm:px-12 md:px-20  text-2xl sm:text-3xl uppercase text-center">
                Node.js
              </h2>
              <div className="grow border-(--brand-blue) border-t "></div>
            </div>

            <div className="flex flex-col md:flex-row gap-10 w-full">
              <Reveal direction={SLIDE_FROM.left}>
                <ProjectCard
                  title={projects.node[0].title}
                  description={projects.node[0].description}
                  link={projects.node[0].link}
                  image={projects.node[0].image}
                  date={projects.node[0].date}
                />
              </Reveal>
              <Reveal direction={SLIDE_FROM.right}>
                <ProjectCard
                  title={projects.node[1].title}
                  description={projects.node[1].description}
                  link={projects.node[1].link}
                  image={projects.node[1].image}
                  date={projects.node[1].date}
                />
              </Reveal>
            </div>
          </section>
        </Reveal>

        <Reveal className="w-full max-w-4xl mx-auto flex flex-col items-center">
          <section
            id="c"
            className=" flex flex-col items-center justify-center "
          >
            <div className="flex items-center justify-center my-8 w-full">
              <div className="grow border-(--brand-blue) border-t "></div>
              <h2 className="px-6 sm:px-12 md:px-20  text-2xl sm:text-3xl uppercase text-center">
                C++ & Python
              </h2>
              <div className="grow border-(--brand-red) border-t "></div>
            </div>

            <div className="flex flex-col md:flex-row gap-10 w-full">
              <Reveal direction={SLIDE_FROM.left}>
                <ProjectCard
                  title={projects.cAndPython[0].title}
                  description={projects.cAndPython[0].description}
                  link={projects.cAndPython[0].link}
                  image={projects.cAndPython[0].image}
                  date={projects.cAndPython[0].date}
                />
              </Reveal>

              <Reveal direction={SLIDE_FROM.right}>
                <ProjectCard
                  title={projects.cAndPython[1].title}
                  description={projects.cAndPython[1].description}
                  link={projects.cAndPython[1].link}
                  image={projects.cAndPython[1].image}
                  date={projects.cAndPython[1].date}
                />
              </Reveal>
            </div>
          </section>
        </Reveal>

        <Reveal className="w-full max-w-4xl mx-auto flex flex-col items-center">
          <section
            id="html"
            className=" flex flex-col items-center justify-center"
          >
            <div className="flex items-center justify-center my-8 w-full">
              <div className="grow border-(--brand-red) border-t "></div>

              <h2 className="px-6 sm:px-12 md:px-20  text-2xl sm:text-3xl uppercase text-center">
                HTML & JS
              </h2>
              <div className="grow border-(--brand-blue) border-t "></div>
            </div>

            <div className="flex flex-col md:flex-row gap-10 w-full">
              <Reveal direction={SLIDE_FROM.left}>
                <ProjectCard
                  title={projects.HTMLANdJS[0].title}
                  description={projects.HTMLANdJS[0].description}
                  link={projects.HTMLANdJS[0].link}
                  image={projects.HTMLANdJS[0].image}
                  date={projects.HTMLANdJS[0].date}
                />
              </Reveal>
              <Reveal direction={SLIDE_FROM.right}>
                <ProjectCard
                  title={projects.HTMLANdJS[1].title}
                  description={projects.HTMLANdJS[1].description}
                  link={projects.HTMLANdJS[1].link}
                  image={projects.HTMLANdJS[1].image}
                  date={projects.HTMLANdJS[1].date}
                />
              </Reveal>
            </div>
          </section>
        </Reveal>

        <Reveal className="w-full max-w-4xl mx-auto flex flex-col items-center">
          <section
            id="java"
            className=" flex flex-col items-center justify-center"
          >
            <div className="flex items-center justify-center my-8 w-full">
              <div className="grow border-(--brand-blue) border-t "></div>

              <h2 className="px-6 sm:px-12 md:px-20  text-2xl sm:text-3xl uppercase text-center">
                Java
              </h2>
              <div className="grow border-(--brand-red) border-t "></div>
            </div>

            <div className="flex flex-col md:flex-row gap-10 w-full">
              <Reveal direction={SLIDE_FROM.left}>
                <ProjectCard
                  title={projects.java[0].title}
                  description={projects.java[0].description}
                  link={projects.java[0].link}
                  image={projects.java[0].image}
                  date={projects.java[0].date}
                />
              </Reveal>

              <Reveal direction={SLIDE_FROM.right}>
                <ProjectCard
                  title={projects.java[1].title}
                  description={projects.java[1].description}
                  link={projects.java[1].link}
                  image={projects.java[1].image}
                  date={projects.java[1].date}
                />
              </Reveal>
            </div>
          </section>
        </Reveal>
      </main>

      <Footer />
    </>
  );
}
