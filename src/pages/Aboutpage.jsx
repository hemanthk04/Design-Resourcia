import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import hemanth from "../assets/Images/hemanth.png"
import insta from "../assets/Images/instagram.svg"

function About() {
  return (
    <div className="bg-grid-pattern flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow flex justify-center items-center">
        <div className="flex items-center border border-gray-300 rounded-lg shadow-lg w-[60%] max-w-4xl p-6">
          {/* Left Side (Text) */}
          <div className="flex-1 pr-6">
            <div className="flex justify-between items-center w-full max-w-lg mx-auto mb-4">
              {/* Name aligned to the left */}
              <h2 className="text-2xl font-SB">Hemanth Kapalavai</h2>
              <a
                href="https://www.instagram.com/hemanthseye/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500" // Instagram color
              >
                <img
                  src={insta}
                  className="w-6 h-6 mr-3 "
                />
              </a>
            </div>
            <p className="text-base font-Reg text-black">
              Hello! I'm Hemanth Kapalavai, currently in my final year of B.Tech
              at{" "}
              <span className="bg-yellow-400 px-0.5  rounded-[2]">
                KIIT University
              </span>
              , Bhubaneswar, India. Originally from Vijayawada, Andhra Pradesh,
              I’m passionate about design and development, with a strong focus
              on{" "}
              <span className="bg-yellow-400 px-0.5  rounded-[2]">
                UI/UX and web development.
              </span>{" "}
              I enjoy building user-centric solutions and continuously exploring
              new challenges. Let’s connect and collaborate on{" "}
              <span className="bg-yellow-400 px-0.5  rounded-[2]">
                creative
              </span>
              ventures!
            </p>
          </div>

          {/* Right Side (Image Card) */}
          <div className="w-[220px] h-[240px] bg-gray-200">
            <img
              src={hemanth}
              alt="Placeholder Image"
              className="w-full h-full object-cover rounded-lg"
              style={{ imageRendering: "smooth" }}
            />
          </div>
        </div>
      </div>

      <Footer currentPage={"About"} />
    </div>
  );
}

export default About;
