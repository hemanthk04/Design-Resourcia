import React, { useState } from "react"; // Add useState here
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import micon from "../assets/images/mailicon.svg"; 

const ContactPage = () => {
  const [message, setMessage] = useState("");

  const handleSendEmail = () => {
    const mailtoLink = `mailto:hemanthseye@gmail.com?subject=Contact%20Form%20Message&body=${encodeURIComponent(
      message
    )}`;

    // Open a new blank tab
    const newTab = window.open("", "_blank");

    // Assign the mailto link to the new tab's location
    if (newTab) {
      newTab.location.href = mailtoLink;
    }
  };

  return (
    <div className="bg-grid-pattern flex flex-col min-h-screen">
      <Navbar />
      <h2 className="text-2xl font-SB mt-6 flex flex-col items-center">
        <span
          className="bg-yellow-400 px-2 py-1 rounded-[2] -rotate-2"
        >
          Contact Me
        </span>
      </h2>
      <div className="flex-grow flex flex-col items-center justify-center">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what’s on your mind, we’d love to connect"
          rows="10"
          cols="70"
          className="border border-black rounded-[2px] py-4 px-4 font-Reg text-sm mt-4 resize-none focus:outline-none"
          style={{ minHeight: "150px" }} // Set a minimum height
        />

        <button
          onClick={handleSendEmail}
          className="flex items-center rounded-[2px] bg-white text-[#222222] font-Reg py-2 px-4 border border-black mb-8 mt-2"
          style={{
            boxShadow: "2px 2px 0 rgba(2, 2, 2, 1)", // Shadow 2px down and 2px left in complete black
          }}
        >
          Send Mail{" "}
          <img src={micon} className="w-6 h-6 ml-1" alt="Mail Icon"></img>
        </button>
      </div>
      <Footer currentPage={"Contact"} />
    </div>
  );
};

export default ContactPage;
