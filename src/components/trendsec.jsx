import React from "react";
import TrendCard from "./trendcard";
import image1 from "../assets/images/1img.png";
import image2 from "../assets/images/2img.png";
import image3 from "../assets/images/3img.png";
import image4 from "../assets/images/4img.jpg"; 

const TrendsSection = () => {
  const trends = [
    { imageSrc: image1, title: "Neomorphism" },
    { imageSrc: image2, title: "Glassmorphism" },
    { imageSrc: image3, title: "3D Websites" },
    { imageSrc: image4, title: "Minimalism" },
  ];

  return (
    <section className="py-12">
      <h2 className="text-2xl font-mid mb-4">Latest Trends</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {trends.map((trend, index) => (
          <TrendCard
            key={index}
            imageSrc={trend.imageSrc}
            title={trend.title}
          />
        ))}
      </div>
    </section>
  );
};

export default TrendsSection;
