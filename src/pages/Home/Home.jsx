import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Quiz from "../../components/Quiz";
import Footer from "../../components/Footer/Footer"

const Home = () => {
  return (
    <>
      <Navbar />
      <Quiz />
      <Footer />
    </>
  );
};

export default Home;
