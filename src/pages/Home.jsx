import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Github from "../components/Github";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = ({
    darkMode,
    setDarkMode,
}) => {
    return (
        <div className="bg-white text-slate-900">
            <Navbar
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />

            <main>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Github />
                <Education />
                <Contact />
            </main>

            <Footer />
        </div>
    );
};

export default Home;