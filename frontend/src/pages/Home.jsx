import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Statistics from "../components/Statistics/Statistics";
import BloodDonation from "../components/BloodDonation/BloodDonation";
import Gallery from "../components/Gallery/Gallery";
import Events from "../components/Events/Events";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Statistics />
      <BloodDonation />
      <Gallery />
      <Events /> 
       <Contact />
      <Footer />
    </>
  );
}

export default Home;