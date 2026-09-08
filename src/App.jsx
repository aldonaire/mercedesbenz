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
      <Interior id="interior" />
      <Technology id="technology" />
      <Performance id="performance" />
      <Gallery id="gallery" />
      <CTA id="cta" />
      <Footer id="footer" />
    </>
  );
}

export default App;