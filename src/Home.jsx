import { ExternalLink, MapPin } from "lucide-react";
import Footer from "./Footer";
import ProjectCard from "./ProjectCard";
import { projects } from "./Projects";
import Reveal, { SLIDE_FROM } from "./Reveal";
import SectionHeading from "./SectionHeader";
import Skills from "./Skills";

export default function Home() {
  return (
    <>
      {/* Page Banner */}

      <header>
        <div className="flex flex=col justify-center items-center relative bg-[url('/img/backgrounds/blue2.jpg')] bg-cover bg-center min-h-[60vh] md:min-h-[75vh] w-full">
          <div className="absolute inset-0 bg-black/40"></div>
          <Reveal direction={SLIDE_FROM.right}>
            <div className="flex flex-col gap-5 relative z-10 p-8 justify-center items-center text-white">
              <img
                src="/img/profile.JPG"
                className="rounded-full h-45 w-auto"
              />
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
                Oswaldo Cortes-TInoco
              </h1>
              <p className="text-sm sm:text-base">Software Engineer</p>
              <div className="flex">
                <MapPin />
                <p className="text-sm sm:text-base">Salinas, CA</p>
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      <main className="flex flex-col items-center mx-4 sm:mx-10 md:mx-24 lg:mx-48 pb-10 ">
        {/* ABOUT SECTION */}
        <Reveal>
          <section
            id="about"
            className="flex flex-col items-center justify-center"
          >
            <div className="flex items-center justify-center my-8 w-full">
              <div className="grow border-t border-(--brand-red)"></div>

              <h2 className="px-4 sm:px-10 md:px-20 text-xl sm:text-2xl md:text-3xl uppercase text-center">
                About Me
              </h2>
              <div className="grow border-t border-(--brand-purple)"></div>
            </div>

            <p className="text-sm sm:text-base leading-relaxed">
              I work at Digital NEST focused on full stack development. My
              curiosity has led to some amazing opportunities: interning at
              Uber, and contributing to a bulk-import feature for an asset
              manager app this past summer. Right now I'm learning WordPress on
              the side. I'm looking for a team where I can keep growing as an
              engineer while making a positive social impact.
            </p>
            <br />
          </section>
        </Reveal>

        <Reveal className="w-full ">
          <SectionHeading
            leftColor="border-(--brand-purple)"
            rightColor="border-(--brand-red)"
          >
            Featured Projects
          </SectionHeading>
          <a
            href="https://oscortes88.github.io/#/projects"
            className="flex tm-home-box-2-link gap-2 justify-center items-center my-8"
          >
            View Projects
            <ExternalLink />
          </a>
        </Reveal>

        <Reveal>
          <section
            id="Featured Projects"
            className="flex flex-col items-center justify-center mb-8 w-full"
          >
            <div className="flex flex-col md:flex-row gap-10 w-full">
              <Reveal direction={SLIDE_FROM.right}>
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

        <Reveal className="w-full">
          <SectionHeading>Skills</SectionHeading>
        </Reveal>

        <Reveal className="w-full" direction={SLIDE_FROM.right}>
          <section
            id="Skills"
            className="flex flex-col items-center justify-center w-full"
          >
            <Skills />
          </section>
        </Reveal>

        <Reveal className="w-full">
          <SectionHeading
            leftColor="border-(--brand-purple)"
            rightColor="border-(--brand-red)"
          >
            Experience
          </SectionHeading>
        </Reveal>

        <Reveal className="w-full" direction={SLIDE_FROM.right}>
          <section
            id="Skills"
            className="flex flex-col gap-8 items-center justify-center w-full"
          >
            <div className="flex p-5 items-center rounded-2xl border-2 border-gray-500 gap-5">
              <img
                src="/img/icons/digital-nest-inc-logo.jpg"
                className="rounded-2xl h-15 w-15"
              />
              <div className="flex flex-col">
                <h2 className="text-2xl">Digital NEST</h2>
                <p className="text-sm sm:text-base">September 2026 - Present</p>
              </div>
            </div>

            <div className="flex p-5 items-center rounded-2xl border-2 border-gray-500 gap-5">
              <img
                src="/img/icons/uber.png"
                className="rounded-2xl h-15 w-15"
              />
              <div className="flex flex-col">
                <h2 className="text-2xl">Uber</h2>
                <p className="text-sm sm:text-base">May 2023 - August 2023</p>
              </div>
            </div>
            <a
              href="https://docs.google.com/document/d/1ot_hIcSndYVe4vVYqQdZgg8NTJPuTOY_PhlAhl9MUIo/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex tm-home-box-2-link gap-2 justify-center items-center"
            >
              View Resume
              <ExternalLink />
            </a>
          </section>
        </Reveal>
      </main>

      <Footer />
    </>
  );
}
