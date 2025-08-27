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
                <Home/>
                <About/>
                <Skils/>
                <Experience/>
                <Project/>
            </div>
        </>
    );
}

export default IndexPage;