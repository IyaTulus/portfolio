import Header from "../components/header/header";
import About from "../features/about/about";
import Experience from "../features/experience/experience";
import Home from "../features/home/home";
import Project from "../features/project/project";
import Skils from "../features/sklis/skil";

const IndexPage: React.FC = () => {
    return (
        <>
            <Header />
            <div>
                <div id="home">
                    <Home />
                </div>
                <div id="about">
                    <About />
                </div>
                {/* ID di sini HARUS sama persis dengan link di atas */}
                <div id="skills">
                    <Skils />
                </div>
                <div id="experience">
                    <Experience />
                </div>
                <div id="project">
                    <Project />
                </div>
            </div>
        </>
    );
}

export default IndexPage;