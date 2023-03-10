import Auth from "../../components/Auth/Auth";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navbar/NavBar";

const AuthPage = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Auth />;
      <Footer />
    </>
  );
};

export default AuthPage;
