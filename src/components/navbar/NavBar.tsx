import './NavBar.scss';

const NavBar: React.FC = () => {

    return(
    <nav className="navContainer">
        <a id="pageTitle" href="/">Anastasia Clark</a>

        <div className="linksContainer">
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="#techStack">Skills</a>
            <a href="#projects">Projects</a>
        </div>
    </nav>
    )
}

export default NavBar;