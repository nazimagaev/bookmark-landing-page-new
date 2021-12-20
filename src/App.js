import React from "react";
import Browser from "./components/browser/Browser";
import Contact from "./components/contact/Contact";
import Feature from "./components/feature/Feature";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Tab from "./components/tab/Tab";
import Accordion from "./components/accordion/Accordion";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Feature />
      <Tab />
      <Browser />
      <Accordion />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
