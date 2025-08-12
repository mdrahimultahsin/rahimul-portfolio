import React from "react";
import { useParams, Link } from "react-router";
import collabCornerImg from "../assets/collabcorner.png"
import appmazeImg from "../assets/appmaze.png"
import unityWroksImg from "../assets/unityworks.png"
const projectsData = [
  {
    id: 1,
    name: "CollabCorner",
    image: collabCornerImg,
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind"],
    description: "A MERN-based forum platform with user authentication, posts, upvotes/downvotes, comments, and admin controls.",
    liveLink: "https://collabcorner.example.com",
    githubLink: "https://github.com/mdrahimultahsin/collabcorner-client",
    challenges: "Implementing secure authentication and efficient pagination for posts.",
    improvements: "Add real-time chat and AI-powered tag suggestions."
  },
  {
    id: 2,
    name: unityWroksImg,
    image: "https://via.placeholder.com/600x350",
    techStack: ["React", "Express", "MongoDB", "JWT", "Tailwind", "Firebase"],
    description: "A job portal platform with advanced search, filtering, and user-specific dashboards.",
    liveLink: "https://jobsphere.example.com",
    githubLink: "https://github.com/mdrahimultahsin/jobsphere-client",
    challenges: "Designing an intuitive search filter and implementing secure JWT auth.",
    improvements: "Add AI-based job matching and resume parsing."
  },
  {
    id: 3,
    name: appmazeImg,
    image: "https://via.placeholder.com/600x350",
    techStack: ["Next.js", "Node.js", "MongoDB", "Tailwind"],
    description: "A platform for discovering, reviewing, and sharing web applications.",
    liveLink: "https://appmaze.example.com",
    githubLink: "https://github.com/mdrahimultahsin/appmaze-client",
    challenges: "Handling dynamic routing for app details and optimizing SEO.",
    improvements: "Introduce personalized recommendations and app usage analytics."
  }
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) return <p className="text-center py-20">Project not found.</p>;

  return (
    <div className="md:w-8/12 mx-auto py-12 px-6">
      <img src={project.image} alt={project.name} className="rounded-lg shadow-lg mb-6" />
      <h1 className="text-3xl font-bold mb-4">{project.name}</h1>

      <h2 className="text-xl font-semibold">Technology Stack:</h2>
      <ul className="list-disc list-inside mb-4">
        {project.techStack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      <p className="mb-4">{project.description}</p>
      <p className="mb-4"><strong>Challenges Faced:</strong> {project.challenges}</p>
      <p className="mb-4"><strong>Potential Improvements:</strong> {project.improvements}</p>

      <div className="flex gap-4 mt-4">
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-accent transition">Live Project</a>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-black transition">GitHub Client</a>
      </div>

      <Link to="/" className="block mt-8 text-primary hover:underline">← Back to Home</Link>
    </div>
  );
};

export default ProjectDetails;
