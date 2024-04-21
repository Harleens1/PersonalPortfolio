import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyProjects from "../MyPortfolio";
import MySkills from "../MySkills";


export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <MyProjects />
      <ContactMe />
      <Footer />
    </>
  );
}
