import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/Header";
import Footer from "components/Footer";
import FAQ from "components/FAQs";
import ApplicationStatus from "components/ApplicationStatus";
import Events from "components/Events";
import RecommendedJobs from "components/RecommendedJobs";

export default () => {

  return (
    <AnimationRevealPage>
      <Header />
      <div id="application">
        <ApplicationStatus />
      </div>
      <div id="events">
        <Events />
      </div>
      <div id="jobs">
        <RecommendedJobs />
      </div>
      <div id="faqs">
        <FAQ />
      </div>
      <Footer />
    </AnimationRevealPage>
  );
};
