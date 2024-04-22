import './NavBar.scss';

const NavBar: React.FC = () => {

    return(
    <nav className="navContainer">
        <a id="pageTitle" href="/portfolio">Anastasia Clark</a>

        <div className="linksContainer">
            <a href="/portfolio">Home</a>
            <a href="#about">About</a>
            <a href="#techStack">Skills</a>
            <a href="#projects">Projects</a>
        </div>
    </nav>
    )
}

export default NavBar;