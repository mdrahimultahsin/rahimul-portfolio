import React from "react";
import { Link } from "react-router";
import collabCornerImg from "../assets/collabcorner.png"
import appmazeImg from "../assets/appmaze.png"
import unityWroksImg from "../assets/unityworks.png"
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub, FaLaptopCode } from "react-icons/fa";
import GradientText from "../utils/GradientText";
const projects = [
  {
    id: 1,
    name: "CollabCorner",
   image: collabCornerImg,
    description: "CollabCorner is a full-featured MERN stack forum application where users can share ideas, upvote/downvote posts, comment, report content, and more.",
   liveLink: "https://collabcorner-forum.web.app/",
    githubLink: "https://github.com/mdrahimultahsin/collabCorner-client",
  },
  {
    id: 2,
    name: "UnityWorks",
    image: unityWroksImg,
    description: "A job portal platform with advanced search, filtering, and user-specific dashboards.",
     liveLink: "https://unityworks-da908.web.app/",
    githubLink: "https://github.com/mdrahimultahsin/unityWorks-client",
  },
  {
    id: 3,
    name: "AppMaze",
  image: appmazeImg,
    description: "AppMaze is a user-friendly AppStore platform that enables users to explore, install, and review apps. With categorized browsing, trending app sections.",
     liveLink: "https://appmaze-rh.netlify.app/",
    githubLink: "https://github.com/mdrahimultahsin/appmaze",
  }
];

const Projects = () => {
  return (
    <div className="py-20 bg-base-100">
      <div className="md:w-10/12 mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 flex items-center gap-2 justify-center"><FaLaptopCode/>My <GradientText label="Projects"/> </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
  key={project.id}
  className="card bg-base-200 shadow-lg rounded-xl overflow-hidden flex flex-col relative"
>
  <div className="bg-gradient-to-r from-primary to-accent h-3"></div>
  <img
    src={project.image}
    alt={project.name}
    className="h-48 w-full object-cover"
  />
  <div className="p-5 flex flex-col flex-1">
    <h3 className="text-2xl font-semibold">{project.name}</h3>
    <p className="mt-2 flex-1">{project?.description.slice(0, 100) + "..."}</p>

    <div className="flex gap-3 mt-4">
      <a
        href={project.liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-sm"
      >
        Live <GoArrowUpRight />
      </a>
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-accent btn-sm"
      >
        <FaGithub /> GitHub
      </a>
    </div>

    <Link
      to={`/projects/${project.id}`}
      className="btn btn-outline btn-sm mt-4 w-full"
    >
      View More / Details
    </Link>
  </div>
</div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
