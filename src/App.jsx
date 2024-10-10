import React from "react";
import Header from "./components/header";
import TrendsSection from "./components/trendsec";
import "./assets/fonts.css";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      
      <Header />
      <div className="container mx-auto">
        <TrendsSection />
      </div>
      <Footer currentPage={"Home"}></Footer>
    </div>
  );
}
export default App;
