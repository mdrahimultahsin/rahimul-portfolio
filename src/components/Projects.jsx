import React from "react";
import { Link } from "react-router";
import collabCornerImg from "../assets/collabcorner.png"
import appmazeImg from "../assets/appmaze.png"
import unityWroksImg from "../assets/unityworks.png"
const projects = [
  {
    id: 1,
    name: "CollabCorner",
   image: collabCornerImg,
    description: "A MERN-based forum platform with user authentication, posts, upvotes/downvotes, comments, and admin controls.",
    liveLink:"https://livelink.com",
    githubLink:"https://github.com/"
  },
  {
    id: 2,
    name: "UnityWorks",
    image: unityWroksImg,
    description: "A job portal platform with advanced search, filtering, and user-specific dashboards.",
    liveLink:"https://livelink.com",
    githubLink:"https://github.com/"
  },
  {
    id: 3,
    name: "AppMaze",
  image: appmazeImg,
    description: "A platform for discovering, reviewing, and sharing web applications.",
    liveLink:"https://livelink.com",
    githubLink:"https://github.com/"
  }
];

const Projects = () => {
  return (
    <div className="py-20 bg-base-100">
      <div className="md:w-10/12 mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card bg-base-200 shadow-lg rounded-xl overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-5 flex flex-col gap-4">
                <h3 className="text-2xl font-semibold">{project.name}</h3>

                <div className="flex gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Live
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    GitHub
                  </a>
                </div>

                <Link
                  to={`/projects/${project.id}`}
                  className="btn btn-outline btn-sm mt-auto"
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
