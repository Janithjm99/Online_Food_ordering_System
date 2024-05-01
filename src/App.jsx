import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import AppStore from "./componenets/AppStore/AppStore";
import Banner from "./componenets/Banner/Banner";
import Feedback from "./componenets/Feedback/Feedback";
import Footer from "./componenets/Footer/Footer";
import Navbar from "./componenets/Navbar/Navbar";
import Products from "./componenets/Products/Products";
import Welcome from "./componenets/Welcome/Welcome";

const App = () => {

  React.useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  });
  return (
    <div>
      <Navbar />
      <Welcome />
      <Products />
      <Banner />
      <AppStore />
      <Feedback />
      <Footer />
    </div>
  ); 
};

export default App;