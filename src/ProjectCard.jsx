import { ExternalLinkIcon } from "lucide-react";

export default function ProjectCard({ title, description, link, image, date }) {
  const descriptionParagraphs = description
    .split("\n")
    .filter((paragraph) => paragraph.trim() !== "")
    .map((paragraph, i) => (
      <p key={i} className="text-sm">
        {paragraph}
      </p>
    ));

  return (
    <div className="flex flex-col p-5 gap-4 rounded-2xl shadow-gray-400 shadow-sm hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out w-xs h-full">
      {/* Title: fixed min height so wrapped titles don't shift things below */}
      <div className="flex flex-col justify-center items-center gap-2">
        <a
          href={link}
          className="tm-home-box-2-link gap-4 text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/img/icons/github.svg"
            className="invert brightness-0"
            alt="github logo"
            width={25}
            height={25}
          />
          <h2>{title}</h2>
        </a>
        <p className="uppercase text-gray-400 text-center">{date}</p>
      </div>

      {/* Image: fixed aspect ratio, cropped to fit */}
      <img
        src={image}
        className="w-full aspect-video object-cover rounded-2xl"
        alt={`${title} Demo`}
      />

      {/* Description grows to fill available space, pushing the button down */}
      <div className="flex flex-col gap-4 grow">{descriptionParagraphs}</div>

      <div className="flex justify-center mt-auto pt-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 px-6 py-3 rounded-lg text-white font-semibold bg-brand-purple hover:bg-[#6d2ad8] transition-all duration-300 shadow-md hover:shadow-lg"
        >
          View Project
          <ExternalLinkIcon />
        </a>
      </div>
    </div>
  );
}
