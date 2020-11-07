import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>

      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />

    </>
  )
}

export default App;