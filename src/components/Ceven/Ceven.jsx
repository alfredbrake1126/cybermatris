import React from "react";
import CNav from "./CNav";
import CHero from "./CHero";
import CApproach from "./CApproach";
import Services from "./Services";
import CTeam from "./CTeam";
import CAboutUs from "./CAboutUs";
import CEleven from "./CEleven";
import CFooter from "./CFooter";
import { BackgroundBeams } from "../../components/ui/background-beams.jsx";
import CTestimonials from "./CTestimonials.jsx";
import CProjects from "./CProjects.jsx";
import CTraining from "./CTraining.jsx";
// import { CardStackDemo } from "./CTestimonials.jsx";

function Ceven() {
  return (
    <>
      <div className="relative min-h-screen bg-richBlack overflow-x-hidden">
        {/* BackgroundBeams should be positioned absolutely to cover the entire viewport */}
        <BackgroundBeams className="fixed inset-0 z-0 bg-richBlack" />

        {/* Content with a relative position to stack on top of BackgroundBeams */}
        <div className="relative z-10">
          <CNav />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CHero />
            <CApproach />
            <Services />
            {/* <CardStackDemo /> */}
            <CTestimonials />
            <CTraining />
            <CProjects />
            {/* <Carousel/> */}
            <CTeam />
            <CAboutUs/>
            <CEleven />
          </div>
          <CFooter />
        </div>
      </div>
    </>
  );
}

export default Ceven;

//  <>
//    {/* Add the ThreeScene component to render the background */}
//    <ThreeScene />
//    <div className="relative min-h-screen bg-transparent">
//      {" "}
//      {/* Set bg-transparent to allow ThreeScene to show through */}
//      <CNav />
//      <CHero />
//      <CApproach />
//      <Services />
//      <CTeam />
//      <CEleven />
//      <CFooter />
//    </div>
//  </>;
