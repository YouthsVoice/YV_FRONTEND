import Hero from "@/components/hero/Hero";
import FAWSection from "@/components/nsft/FAWSection";
import NSFTSection from "@/components/nsft/NSFTSection";
import Warmth from "@/components/nsft/Warmth";
import Header from "@/components/Header";
import SignatureEvents from "../components/nsft/SignatureEvents";
import Footer from "@/components/Footer";
import ContactUsSection from "@/components/nsft/ContactUsSection";
import PCPHome from "@/components/nsft/PCPHome";
import MHMSection from "@/components/nsft/MHMSection";
import Form from "@/components/nsft/Form";
import GameAD from "@/components/nsft/GameAD";
import TOTWORKPAGE from "@/components/nsft/TOTWORKPAGE";
import ProjectMayaStory from "@/series/maya/ProjectMayaStory";
export default function Home() {

  //  
  // <Warmth/>

  // <SignatureEvents/>
  // <ContactUsSection/>
  // <Footer/>
{/* 
  
        <NSFTSection />
        
       
        
        

         */}

         const currentMonth = new Date().toLocaleString("default", { month: "long" });

         // Define months for conditional rendering
         const showPCPHOME = ["February", "March"].includes(currentMonth);
         const showFAWSection = ["October", "November", "December", "January"].includes(currentMonth);
  return (
    <>
    <Header/>
      <main className="max-w-screen mx-auto">
        <Hero/>
              {/* Conditionally render PCPHOME or FAWSection */}
              <ProjectMayaStory/>
              <MHMSection/>
              <TOTWORKPAGE/>
              <GameAD/>
              {/*<Form/>*/}
      
      {showPCPHOME && <PCPHome/>}
      {showFAWSection && <FAWSection />}
        <NSFTSection />  
        


        <Warmth />
        <SignatureEvents />
        <ContactUsSection />
      </main>
      <Footer/>
      
    </>
  );
}
