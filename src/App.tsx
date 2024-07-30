import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Expedition from "./components/Expedition/Expedition";
import Gallery from "./components/Gallery/Gallery";
import Team from "./components/Team/Team";
import arrowUp from "./assets/arrowUp.svg";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const scrollAnimation = () => {
      return window.scrollY > 250 ? setShowArrow(true) : setShowArrow(false);
    };
    window.addEventListener("scroll", scrollAnimation);

    return () => {
      window.removeEventListener("scroll", scrollAnimation);
    };
  }, []);

  const handleScroll = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Banner />
      <About />
      <Expedition />
      <Team />
      <Gallery />
      <Footer />
      <div
        className={`fixed right-10 bottom-20 transition-all duration-500 ${
          showArrow ? "translate-x-0" : "translate-x-20"
        }`}
      >
        <button
          className="bg-blue-950 p-2 text-white text-xl cursor-pointer hover:bg-blue-600"
          onClick={handleScroll}
        >
          <img src={arrowUp} alt="arrow Up" className="size-5 invert" />
        </button>
      </div>
    </>
  );
};

export default App;
