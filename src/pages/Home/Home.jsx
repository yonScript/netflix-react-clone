// Components
import NavBar from "../../components/Header/NavBar";
import Hero from "../../components/Hero/Hero";
import MovieGrid from "../../components/Movies/MovieGrid/MovieGrid";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <MovieGrid />
            <Footer />
        </>
    );
};

export default Home;
