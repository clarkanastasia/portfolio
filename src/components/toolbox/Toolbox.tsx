import './Toolbox.scss';

const Toolbox: React.FC = () => {

    return(
    <div className="toolboxContainer" id="techStack">
        <h1>My Toolbox</h1>
        <div className ="iconsContainer">
            <img src="src\assets\c.svg" alt="c sharp logo" />
            <img src="src\assets\html.svg" alt="html logo" />
            <img src="src\assets\javascript.svg" alt="javascript logo" />
            <img src="src\assets\react.svg" alt="react logo" />
            <img src="src\assets\sass.svg" alt="sass logo" />
            <img src="src\assets\typescript.svg" alt="typescript logo" />
        </div>
    </div>
    )
}

export default Toolbox;