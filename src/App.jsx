import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/header";
import TrendsSection from "./components/trendsec";
import "./assets/fonts.css";
import Footer from "./components/footer";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Header />
//       <div className="container mx-auto">
//         <TrendsSection />
//         {/* Add more sections as needed */}
//       </div>
//     </div>
//   );
// }

// export default App;
function App() {
  return (
    <div className="App">
      
      <Header />
      <div className="container mx-auto">
        <TrendsSection />
      </div>
      <Footer></Footer>
    </div>
  );
}
export default App;
