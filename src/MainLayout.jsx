import Background from "./components/Background";
import Cursor from "./components/Cursor";
import Eligibility from "./sections/eligibility/Eligibility";

import Header from "./sections/Header/Header";
import About from "./sections/About/About";
import Hero from "./sections/Hero/Hero";
import Tracks from "./sections/Tracks/Tracks";
import Timeline from "./sections/Timeline/Timeline";
import StarField from "./components/StarField";
// import Timeline from "./sections/Timeline/Timeline";
// import Registration from "./sections/Registration/Registration";
import Prizes from "./sections/Prizes/Prizes";
import Sponsors from "./sections/Sponsors/Sponsors";
import FAQ from "./sections/FAQ/FAQ";
import Footer from "./sections/Footer/Footer";
export default function MainLayout() {
  return (
    <>
      {/* Global Effects */}
      {/* <Background /> */}
      <StarField /> 
      <Cursor />

      {/* Sections */}
      
      <Header />
      <Hero />
      <About />
      <Tracks />
      <Timeline />
      <Eligibility />
      <Prizes />
      <Sponsors/>
      <FAQ />
      <Footer /> 

  
      {/*
      <Registration />
      <Prizes />   */}
    
    </>
  );
}