import React from "react";
import "./App.css";
import Nav from "./navbar";
import Banner from "./row";
import Jumbotron from "./jumbotron";
import Footer from "./footer";

function App() {
  return (
    <>
      <Nav />
      <Jumbotron />
      <Banner />
      <Footer />
    </>
  );
}

export default App;
