import HomeHeroSection from "../components/HomeComponents/HomeHeroSection.jsx";
import HomeSection from "../components/HomeComponents/HomeSection.jsx";
import HomeExclusive from "../components/HomeComponents/HomeExclusive.jsx";
import HomeExpertise from "../components/HomeComponents/HomeExpertise.jsx";
import HomeTestimony from "../components/HomeComponents/HomeTestimony.jsx";
import HomeBlog from "../components/HomeComponents/HomeBlog.jsx";
import ContactForm from "../components/ContactForm.jsx";

const Home = () => {

  return (
    <>
      <HomeHeroSection />
      <HomeSection />
      <HomeExclusive />
      <HomeExpertise />
      <HomeTestimony />
      <HomeBlog />
      <ContactForm/>
    </>
  );
};

export default Home;
