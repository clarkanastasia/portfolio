import './Toolbox.scss';
import c from "../../assets/c.svg"
import html from "../../assets/html.svg"
import javascript from "../../assets/javascript.svg"
import react from "../../assets/react.svg"
import sass from "../../assets/sass.svg"
import typescript from "../../assets/typescript.svg"

const Toolbox: React.FC = () => {

    return(
    <div className="toolboxContainer" id="techStack">
        <h1>My Toolbox</h1>
        <div className ="iconsContainer">
            <img src={c} alt="c sharp logo" />
            <img src={html} alt="html logo" />
            <img src={javascript} alt="javascript logo" />
            <img src={react} alt="react logo" />
            <img src={sass} alt="sass logo" />
            <img src={typescript} alt="typescript logo" />
        </div>
    </div>
    )
}

export default Toolbox;