
import Hero from "@/components/Website/Hero/Hero";
import Features from "@/components/Website/Features/Features";
import Solutions from "@/components/Website/Solutions/Solutions";
import Events from "@/components/Website/Events/Events";
import Stories from "@/components/Website/Stories/Stories";
import Discover from "@/components/Website/Discover/Discover";
import Partners from "@/components/Website/Partners/Partners";
import Stats from "@/components/Website/StatsSection/Stats";

const Home = () => {
  return <div className="">
       <Hero />  
      <div className="w-screen">
        <Features />
        <Solutions />
        <Events />
        <Stories />
        <Discover />
        <Partners />
        <Stats />
      </div>
    
  </div>;
};

export default Home;