import AdvantageSection from "./component/AdvantageSection";
import Companies from "./component/Companies";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Info from "./component/Info";
import Testimony from "./component/Testimony";
import Faq from "./component/questions/Faq";

const Landing = () => {
  return (
    <>
      <Header />
      <Hero />
      <Companies />
      <AdvantageSection />
      <Testimony />
      <Faq />
      <Info />
      <Footer />
    </>
  );
};
export default Landing;
