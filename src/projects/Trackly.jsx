import React from "react";
import Footer from "../Footer";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal, { SLIDE_FROM } from "../Reveal";

export default function Trackly() {
  return (
    <>
      <main className="flex flex-col mx-5 md:mx-25 xl:mx-50 gap-10 m-10">
        <Reveal>
          <div className="flex flex-col gap-5 ">
            <Link
              to="/projects"
              className="flex flex-row text-[#b9b9c4] hover:text-blue-400"
            >
              <ChevronLeftIcon />
              All Projects
            </Link>
            <h1 className="text-5xl">Trackly</h1>
            <p className="text-[#b9b9c4]">
              An asset management web app that helps Digital NEST keep track of
              computers, cameras, monitors, and more.
            </p>
            <div className="flex flex-row gap-5">
              <label className="border border-zinc-700 rounded-2xl py-2 px-4">
                React
              </label>
              <label className="border border-zinc-700 rounded-2xl py-2 px-4">
                TypeScript
              </label>
              <label className="border border-zinc-700 rounded-2xl py-2 px-4">
                Papa Parse
              </label>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="video-container">
            <video
              src="/project-demos/Trackly-Bulk-Import-Demo.mp4"
              className="rounded-2xl"
              controls
            />
          </div>
        </Reveal>

        <Reveal direction={SLIDE_FROM.right}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="border-t-2 pt-5 border-t-blue-500 ">
              <h2 className="text-2xl">Problem</h2>
              <p className="pt-2 text-[#b9b9c4]">
                Uploading multiple assets one at a time was slow and
                time-consuming.
              </p>
            </div>
            <div className="border-t-2 pt-5 gap-5 border-t-(--brand-purple) ">
              <h2 className="text-2xl">Goal</h2>
              <p className="pt-2 text-[#b9b9c4]">
                Build a bulk import feature so users can upload a CSV with many
                assets at once.
              </p>
            </div>
            <div className="border-t-2 pt-5 gap-5 border-t-(--brand-red) ">
              <h2 className="text-2xl">Solution</h2>
              <p className="pt-2 text-[#b9b9c4]">
                A step-by-step import wizard: upload the CSV, map columns to
                asset properties, validate the data, and import straight into
                the database.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal direction={SLIDE_FROM.right}>
          <div className="grid grid-cols-1 md:grid-cols-2 p-8 gap-6 md:gap-5 justify-center items-center border border-zinc-800 bg-(--brand-charcol) rounded-2xl">
            <div>
              <h2 className="text-2xl">Result</h2>
              <p className="pt-2 text-[#b9b9c4]">
                Uploading assets that used to take up to 30 minutes now takes
                about 5, making asset management far more efficient for staff.
              </p>
            </div>
            <div className="flex justify-center">
              <p className="inline-block text-3xl md:text-4xl xl:text-5xl text-center bg-linear-to-r from-[#627AF8] via-[#A567C7] to-[#f33232] bg-clip-text font-bold text-transparent">
                30 min → 5 min
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl">My Contributions</h2>
            <Reveal direction={SLIDE_FROM.right}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 border border-zinc-800 bg-(--brand-charcol) rounded-2xl">
                  <h3>Backend</h3>
                  <p className="pt-2 text-[#b9b9c4]">
                    Wrote the logic that parses CSV data, maps and validates it,
                    and creates asset entities for database storage.
                  </p>
                </div>
                <div className="p-5 border border-zinc-800 bg-(--brand-charcol) rounded-2xl">
                  <h3>Frontend</h3>
                  <p className="pt-2 text-[#b9b9c4]">
                    Built the bulk import wizard UI: upload a CSV, map columns
                    to asset fields, and save assets to Supabase.
                  </p>
                </div>
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
            Previous
          </Link>

          <Link
            to="/projects"
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
