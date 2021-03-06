import React from "react";
import "./Home.css";
import Header from "../Header/index";
import Body from "../Body/index";
import ScrollToTop from "../Common/ScrollToTop";
import Footer from "../Common/Footer/Footer";

function Home() {
  return (
    <div className="home">
      <Header />
      <Body />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Home;
