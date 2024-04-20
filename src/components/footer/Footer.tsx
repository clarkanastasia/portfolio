import './Footer.scss';

const Footer: React.FC = () => {
return (
    <footer className="footerContainer">
        <div><p>© {new Date().getFullYear()} Anastasia Clark</p></div>
        </footer>
    )
}

export default Footer;