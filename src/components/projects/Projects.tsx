import './Projects.scss';
import projects from './ProjectsInfo.tsx';
import ProjectCard from './projectCard/ProjectCard.tsx';

const Projects: React.FC = () => {

    return(
        <div className="projectsContainer" id="projects">
        
        <h1>Selected Projects</h1>

        <div className = "projectCardsContainer">
            {projects.map(project => 
                <ProjectCard
                imgSrc={project.imgSrc}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                repo={project.repo}
                />
            )}
        </div>
        </div>
    )
}

export default Projects;