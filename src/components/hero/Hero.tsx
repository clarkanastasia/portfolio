import './Hero.scss';

const Hero: React.FC = () => {

    return(
        <div className="heroContainer">
            <h1> Hello, I'm Anastasia 👋 </h1>
            <p> A full-stack software developer based in London </p>
            <div className="buttonContainer">
                <a href="https://www.linkedin.com/in/clarkanastasia"><button className="buttonDark">LinkedIn</button></a>
                <a href="https://github.com/clarkanastasia"><button className="buttonLight">GitHub</button></a>
            </div>
        </div>

    );
}

export default Hero;