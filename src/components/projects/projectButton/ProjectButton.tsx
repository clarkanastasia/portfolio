import './ProjectButton.scss';

interface ProjectButtonProps{
    buttonName: string;
}

const ProjectButton: React.FC<ProjectButtonProps> = ({buttonName}) => {

    return(
        <button className="projectButton">
        {buttonName}
        </button>
    )
}

export default ProjectButton;