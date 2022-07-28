import React from "react";

/* IMPORT COMPONENTS */
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Carousel from "./components/carousel/carousel";
import Cover from "./components/cover/cover";

function App() {
  return (
    <>
    <Navbar />
    <Cover />
    <Carousel />
      
    <Footer />
    </>
  );
}

export default App;
