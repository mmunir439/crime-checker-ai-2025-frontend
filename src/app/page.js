import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Heorsection";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero/>
     <Footer/>
    </div>
  );
}