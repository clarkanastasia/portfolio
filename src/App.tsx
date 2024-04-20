import './styles/App.scss';
import NavBar from './components/navbar/NavBar.tsx';
import Hero from './components/hero/Hero.tsx';
import About from './components/about/About.tsx';
import Toolbox from './components/toolbox/Toolbox.tsx';
import Projects from './components/projects/Projects.tsx';
import Footer from './components/footer/Footer.tsx';

const App: React.FC = () => {

  return (
    <div>
        <NavBar />
    <div className = "mainContainer">
            <Hero />
        <About />
        <Toolbox />
        <Projects />
    </div>
    <Footer />
    </div>
  )
}

export default App;
