import './ProjectCard.scss';
import ProjectButton from '../projectButton/ProjectButton.tsx';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface ProjectCardProps{
    imgSrc: string;
    title: string;
    description: string;
    techStack: string[];
    repo: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({title, description, techStack, imgSrc, repo}) => {


    return(
        <div className="projectCard">
            <div className="imgContainer">
                <img 
                    src={imgSrc}
                    alt={`screenshot of ${title} project`}
                />
                <div>
                    <p>{description}</p>
                </div>
                
            </div>
            <a href={repo}><h2>{title}<ArrowForwardIcon/></h2></a>
            <div className="projectButtonsContainer">
                {techStack.map((t, index)=>
                    <ProjectButton 
                        key ={index} 
                        buttonName={t} 
                    />
                )}
            </div>
        </div>
    )
}

export default ProjectCard;