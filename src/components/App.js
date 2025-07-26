import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";
import user from "../data/user";
const user = {
  name: "Salma",
  bio: "A passionate front-end developer.",
  github: "https://github.com/salma",
  linkedin: "https://linkedin.com/in/salma"
};

const projects = [
  {
    id: 1,
    name: "Quran LMS",
    about: "A learning management system for Quranic studies.",
    technologies: ["React", "Tailwind", "JSON Server"]
  },
  {
    id: 2,
    name: "Pretty Picks",
    about: "A dynamic beauty product website.",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 3,
    name: "Kaab Printing",
    about: "Business website for printing & packaging.",
    technologies: ["React", "JSON Server", "Shadcn/UI"]
  }
];

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About
        bio={user.bio}
        github={user.github}
        linkedin={user.linkedin}
      />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;

