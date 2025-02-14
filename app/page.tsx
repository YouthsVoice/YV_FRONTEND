import Hero from "@/components/hero/Hero";
import FAWSection from "@/components/nsft/FAWSection";
import NSFTSection from "@/components/nsft/NSFTSection";
import Warmth from "@/components/nsft/Warmth";
import Header from "@/components/Header";
import SignatureEvents from "../components/nsft/SignatureEvents";
import Footer from "@/components/Footer";
import ContactUsSection from "@/components/nsft/ContactUsSection";
export default function Home() {

  //  
  // <Warmth/>

  // <SignatureEvents/>
  // <ContactUsSection/>
  // <Footer/>
{/* 
  
        <NSFTSection />
        
       
        
        

         */}



  return (
    <>
    <Header/>
      <main className="max-w-screen mx-auto">
        <Hero/>
        <NSFTSection />  
        <FAWSection />
        <Warmth />
        <SignatureEvents />
        <ContactUsSection />
      </main>
      <Footer/>
      
    </>
  );
}
