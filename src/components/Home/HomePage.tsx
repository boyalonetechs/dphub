import Hero from "./Hero";
import Services from "./Services";
import FAQ from "./FAQ";

import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import WhoWeAre from "./WhoWeAre";
import TeamSection from "./Team";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#171717] font-sans selection:bg-[#00D05A] selection:text-white">
      <div className=" bg-white shadow-2xl overflow-hidden relative">
        <Hero />
        <WhoWeAre />
        <Services />
        <FAQ />
        <TeamSection />
        {/* <Awards /> */}
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
