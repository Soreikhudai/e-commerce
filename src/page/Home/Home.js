import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import MusicButton from "../../components/Home/MusicButton";
import Section from "../../components/Home/Section";
import NavBar from "../../components/Navbar/NavBar";
function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <MusicButton />
      <Section />
      <Footer />
    </>
  );
}

export default Home;
