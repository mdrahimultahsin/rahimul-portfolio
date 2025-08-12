import React from "react";
import {useParams, Link} from "react-router";
import collabCornerImg from "../assets/collabcorner.png";
import appmazeImg from "../assets/appmaze.png";
import unityWroksImg from "../assets/unityworks.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
const projectsData = [
  {
    id: 1,
    name: "CollabCorner",
    image: collabCornerImg,
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind"],
    description:
      "CollabCorner is a full-featured MERN stack forum application where users can share ideas, upvote/downvote posts, comment, report content, and more. This repository contains the frontend built using React and modern web development libraries.",
    liveLink: "https://collabcorner-forum.web.app/",
    githubLink: "https://github.com/mdrahimultahsin/collabCorner-client",
    challenges:
      "Implementing secure authentication and efficient pagination for posts.",
    improvements: "Add real-time chat and AI-powered tag suggestions.",
  },
  {
    id: 2,
    name: "UnityWorks",
    image: unityWroksImg,
    techStack: ["React", "Express", "MongoDB", "JWT", "Tailwind", "Firebase"],
    description:
      "UnityWorks is a community-driven platform where users can discover, create, and participate in local social development events such as road cleaning and tree plantation drives.",
    liveLink: "https://unityworks-da908.web.app/",
    githubLink: "https://github.com/mdrahimultahsin/unityWorks-client",
    challenges:
      " Creating an efficient search and filtering system, and ensuring secure user authentication and authorization using JWT.",
    improvements:
      "Implement AI-based event recommendations and introduce an advanced event management dashboard for organizers.",
  },
  {
    id: 3,
    name: "AppMaze",
    image: appmazeImg,
    techStack: [
      "React",
      "Node.js",
      "Firebase",
      "Tailwind",
      "React Router",
      "Swiper",
    ],
    description:
      "AppMaze is a user-friendly AppStore platform that enables users to explore, install, and review apps. With categorized browsing, trending app sections, and dynamic app detail pages, it focuses on delivering a seamless user experience for app discovery and feedback.",
    liveLink: "https://appmaze-rh.netlify.app/",
    githubLink: "https://github.com/mdrahimultahsin/appmaze",
    challenges: "Handling dynamic routing for app details and optimizing SEO.",
    improvements:
      "Introduce personalized recommendations and app usage analytics, Installing Apps",
  },
];

const ProjectDetails = () => {
  const {id} = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) return <p className="text-center py-20">Project not found.</p>;

  return (
    <>
      <Navbar />
      <Link
        to="/"
        className="px-6 md:w-10/12 mx-auto block mt-8 text-primary hover:underline"
      >
        ← Back to Home
      </Link>
      <div className="md:w-10/12 mx-auto py-12 px-6">
        <img
          src={project.image}
          alt={project.name}
          className="rounded-lg shadow-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
        <p className="mb-4">{project.description}</p>

        <h2 className="text-xl font-semibold">Technology Stack:</h2>
        <ul className="list-disc list-inside mb-4">
          {project.techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>

        <p className="mb-4">
          <strong>Challenges Faced:</strong> {project.challenges}
        </p>
        <p className="mb-4">
          <strong>Potential Improvements:</strong> {project.improvements}
        </p>

        <div className="flex gap-4 mt-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-accent transition"
          >
            Live Project
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-black transition"
          >
            GitHub Client
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetails;
