import React from "react";
import "./Home.css";
import Header from "../Header/index";
import Footer from "../Footer/index";
import ScrollToTop from "../Common/ScrollToTop";
import Body from "../../Body";

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
