import React from "react";
import Footer from "../Footer";
import {
  AlertTriangle,
  ChevronLeftIcon,
  ChevronRightIcon,
  Clock,
  Flag,
  HammerIcon,
  Puzzle,
  TrendingUp,
  Users2Icon,
} from "lucide-react";
import { Link } from "react-router-dom";
import Reveal, { SLIDE_FROM } from "../Reveal";
import { badgeUrl, groups } from "../Skills";

export default function Connect() {
  return (
    <>
      <main className="flex flex-col mx-5 md:mx-25 xl:mx-50 gap-10 m-10">
        <Reveal>
          <div className="flex flex-col gap-5 items-start">
            <Link
              to="/projects"
              className="flex flex-row text-[#b9b9c4] hover:text-blue-400"
            >
              <ChevronLeftIcon />
              All Projects
            </Link>

            <h1 className="text-5xl">Connect</h1>
            <p className="text-[#b9b9c4]">
              Digital NEST runs multiple programs that help members explore tech
              and build themselves professionally. One thing nearly every
              instructor has in common is their 10-to-15-minute connection
              activities. Sometimes these tie to the day’s subject, and
              sometimes they’re just a way to get to know members better.
            </p>
            <div className="flex flex-row flex-wrap gap-5">
              <label>
                <img
                  src={badgeUrl(groups[1].badges[0])}
                  alt={groups[1].badges[0].name}
                  height={28}
                  loading="lazy"
                  className="block h-7 w-auto"
                />
              </label>
              <label>
                <img
                  src={badgeUrl(groups[1].badges[1])}
                  alt={groups[0].badges[1].name}
                  height={28}
                  loading="lazy"
                  className="block h-7 w-auto"
                />
              </label>
              <label>
                <img
                  src={badgeUrl(groups[1].badges[2])}
                  alt={groups[1].badges[3].name}
                  height={28}
                  loading="lazy"
                  className="block h-7 w-auto"
                />
              </label>
              <label>
                <img
                  src={badgeUrl(groups[0].badges[1])}
                  alt={groups[0].badges[1].name}
                  height={28}
                  loading="lazy"
                  className="block h-7 w-auto"
                />
              </label>
              <label>
                <img
                  src={badgeUrl(groups[1].badges[3])}
                  alt={groups[1].badges[3].name}
                  height={28}
                  loading="lazy"
                  className="block h-7 w-auto"
                />
              </label>
              <label>
                <img
                  src={badgeUrl(groups[1].badges[5])}
                  alt={groups[1].badges[3].name}
                  height={28}
                  loading="lazy"
                  className="block h-7 w-auto"
                />
              </label>
              <label>
                <img
                  src={badgeUrl(groups[4].badges[3])}
                  alt={groups[4].badges[3].name}
                  height={28}
                  loading="lazy"
                  className="block h-7 w-auto"
                />
              </label>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="video-container overflow-hidden rounded-2xl">
            <iframe
              src="https://www.youtube.com/embed/bFzD2TDcFJk"
              title="YouTube video player"
              className="w-full aspect-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Reveal>

        <Reveal direction={SLIDE_FROM.right}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Reveal direction={SLIDE_FROM.right}>
              <div className="flex flex-col border-t-2 pt-5 border-t-blue-500 gap-2">
                <h2 className="flex items-center gap-2 text-2xl">
                  Problem
                  <AlertTriangle />
                </h2>
                <p className=" text-[#b9b9c4]">
                  Across different courses, student engagement at the beginning
                  of class is low, which makes sessions feel low-energy and
                  boring.
                </p>
                <p className=" text-[#b9b9c4]">
                  In addition, instructors noted that it was frustrating to
                  spend extra time brainstorming activities that didn’t work.
                </p>
              </div>
            </Reveal>
            <Reveal direction={SLIDE_FROM.right}>
              <div className="border-t-2 pt-5 gap-5 border-t-(--brand-purple) ">
                <h2 className="flex items-center gap-2 text-2xl">
                  Goal
                  <Flag />
                </h2>
                <p className="pt-2 text-[#b9b9c4]">
                  Ship a working tool that improves student engagement in the
                  first 10 to 15 minutes of class, grounded in how instructors
                  actually run their rooms. The tool must also help instructors
                  brainstorm activities.
                </p>
              </div>
            </Reveal>
            <Reveal direction={SLIDE_FROM.right}>
              <div className="border-t-2 pt-5 gap-5 border-t-(--brand-red) ">
                <h2 className="flex items-center gap-2 text-2xl">
                  Solution
                  <Puzzle />
                </h2>
                <p className="pt-2 text-[#b9b9c4]">
                  An AI tool where an instructor enters today’s topic, chooses
                  whether the warm-up should tie into that topic or build
                  community in the room, and sets how much time they have. The
                  tool generates an activity, and the instructor can regenerate
                  it or mark it as recommended, which helps the model learn what
                  does and doesn’t work.
                </p>
              </div>
            </Reveal>
          </div>
        </Reveal>

        <Reveal direction={SLIDE_FROM.right}>
          <div className="grid grid-cols-1 md:grid-cols-2 p-8 gap-6 md:gap-5 justify-center items-center border border-zinc-800 bg-(--brand-charcol) rounded-2xl">
            <div>
              <h2 className="flex items-center gap-2 text-2xl">
                Result
                <TrendingUp />
              </h2>
              <ul className="pt-2 list-disc pl-5 marker:text-blue-500 text-[#b9b9c4]">
                <li>
                  Instructors spend less time planning activities and can focus
                  more on class planning.
                </li>
                <li>
                  Students transitioned into class more focused, and
                  collaboration among them increased.
                </li>
              </ul>
              <p></p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 -center gap-5">
              <Reveal direction={SLIDE_FROM.right}>
                <div className="flex flex-col items-start gap-5 p-8 bg-[#101012] border border-zinc-800 rounded-2xl">
                  <div className="inline-flex  bg-linear-to-r from-[#346fee] via-[#A567C7] to-[#f33232] rounded-2xl p-3  text-black">
                    <Clock />
                  </div>
                  <h3 className="text-2xl text-[#b9b9c4]">Instructor</h3>
                  <p className="inline-block text-2xl bg-linear-to-r from-[#346fee] via-[#A567C7] to-[#f33232] bg-clip-text text-transparent">
                    More time for class planning
                  </p>
                </div>
              </Reveal>
              <Reveal direction={SLIDE_FROM.right}>
                <div className="flex flex-col items-start gap-5 p-8 bg-[#101012] border border-zinc-800 rounded-2xl">
                  <div className="inline-flex  bg-linear-to-r from-[#346fee] via-[#A567C7] to-[#f33232] rounded-2xl p-3  text-black">
                    <Users2Icon />
                  </div>
                  <h3 className="text-2xl text-[#b9b9c4]">Student</h3>
                  <p className="inline-block text-2xl bg-linear-to-r from-[#346fee] via-[#A567C7] to-[#f33232] bg-clip-text text-transparent">
                    Focused starts, more collaboration
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-col gap-5">
            <h2 className="flex items-center gap-2 text-2xl">
              My Contributions <HammerIcon />
            </h2>
            <Reveal direction={SLIDE_FROM.right}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Reveal direction={SLIDE_FROM.right}>
                  <div className="p-5 border border-zinc-800 bg-(--brand-charcol) rounded-2xl">
                    <h3>Backend</h3>
                    <ul className="pt-2 list-disc pl-5 marker:text-blue-500 text-[#b9b9c4]">
                      <li>
                        Engineered client-side storage logic that saves each
                        instructor’s prompt and activity history in the
                        browser’s localStorage.
                      </li>
                      <li>
                        Implemented a bookmarking feature so instructors can
                        save and reuse prompts and activities they plan to use
                        again.
                      </li>
                    </ul>
                  </div>
                </Reveal>

                <Reveal direction={SLIDE_FROM.right}>
                  <div className="p-5 border border-zinc-800 bg-(--brand-charcol) rounded-2xl">
                    <h3>Frontend</h3>
                    <ul className="pt-2 list-disc pl-5 marker:text-blue-500 text-[#b9b9c4]">
                      <li>
                        Built the prompt form components to take in user input
                        and send it to the backend for.
                      </li>
                      <li>
                        incorporated Shadcn components to create a mini bookmark
                        and history menus.
                      </li>
                    </ul>
                  </div>
                </Reveal>
              </div>
            </Reveal>
          </div>
        </Reveal>

        <div className="pt-5 border-t border-t-zinc-700 flex justify-between items-center">
          <Link
            to="/projects"
            className="flex flex-row items-center gap-2 text-[#b9b9c4] hover:text-blue-400 transition-colors"
          >
            <ChevronLeftIcon className="w-5 h-5" />
            Back
          </Link>

          <Link
            to="/projects/trackly"
            className="flex flex-row items-center gap-2 text-[#b9b9c4] hover:text-blue-400 transition-colors"
          >
            Next
            <ChevronRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
