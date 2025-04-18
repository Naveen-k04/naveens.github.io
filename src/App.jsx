import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">

        {/* Hero section with background image */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* Portfolio content sections */}
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />

        {/* Contact section with stars background */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        
      </div>
    </BrowserRouter>
  );
};

export default App;
