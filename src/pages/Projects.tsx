import PianoFrame from "../component/PianoFrame";
import "./Projects.css";
import { Link } from "react-router-dom";

export interface Project {
  id: number;
  img: string;
  title: string;
  brief: string;
  link: string;
}

interface ProjectProps {
  projects: Project[];
}

const Projects: React.FC<ProjectProps> = ({ projects }) => {
  return (
    <PianoFrame title="Projects" id="proj_frame">
      <div className="project-container">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={project.link}
            target={project.link.startsWith("http") ? "_blank" : undefined}
            rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
            className="project-card"
          >
            <img src={project.img} alt="" loading="lazy" />
            <div className="project-card-content">
              <h2>{project.title}</h2>
              <p>{project.brief}</p>
              <span aria-hidden="true">↗</span>
            </div>
          </Link>
        ))}
      </div>
    </PianoFrame>
  );
};

export default Projects;
