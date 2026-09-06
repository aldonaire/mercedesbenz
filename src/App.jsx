import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Performance from "./components/Performance";
import Gallery from "./components/Gallery";
import Design from "./components/Design";
import Technology from "./components/Technology";
import Interior from "./components/Interior";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero id="home" />
      <Introduction id="introduction" />
      <Design id="design" />
      <Performance id="performance" />
      <Technology id="technology" />
      <Interior id="interior" />
      <Gallery id="gallery" />
      <CTA id="cta" />
      <Footer id="footer" />
    </>
  );
}

export default App;