import Background from "./components/Background";
import Cursor from "./components/Cursor";
import Eligibility from "./sections/eligibility/Eligibility";

import Header from "./sections/Header/Header";
// import About from "./sections/About/About";
// import Tracks from "./sections/Tracks/Tracks";
// import Timeline from "./sections/Timeline/Timeline";
// import Registration from "./sections/Registration/Registration";
// import Prizes from "./sections/Prizes/Prizes";
// import FAQ from "./sections/FAQ/FAQ";
// import Footer from "./sections/Footer/Footer";
export default function MainLayout() {
  return (
    <>
      {/* Global Effects */}
      <Background />
      <Cursor />

      {/* Sections */}
      
      <Header />
      {/* <About /> */}

      <Eligibility />
 
      {/* <Tracks />
      <Timeline />
      <Registration />
      <Prizes />
      <FAQ />
      <Footer />   */}
    
    </>
  );
}