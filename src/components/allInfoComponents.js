import React from "react";
import InfoComp from "./InfoComp";
import page1Img from "../assets/imgs/page1Img.svg";
import page2Img1 from "../assets/imgs/page2Img1.svg";

const AllInfoComponents = () => {
  return (
    <>
      <InfoComp
        desc={"Design your dream home with Seedtree."}
        smallDesc={
          "Custom interior design packages for single rooms or entire homes with expert consultations."
        }
        isMargin={false}
        img={page1Img}
        mainPage={true}
        isReverse={false}
      />
      <InfoComp
        desc={"Expert consultations."}
        smallDesc={
          "Our experienced interior designers will work with you to create a personalized design plan tailored to your unique needs and style."
        }
        isMargin={false}
        img={page2Img1}
        mainPage={false}
        isReverse={true}
      />
      <InfoComp
        desc={"Customized packages."}
        smallDesc={
          "Choose from a range of custom packages that fit your needs, from single room design services to full house design plans."
        }
        isMargin={true}
        img={page2Img1}
        mainPage={false}
        isReverse={false}
      />
      <InfoComp
        desc={"Online platform."}
        smallDesc={
          "Take advantage of our online platform to collaborate remotely with your designer, share ideas and get real-time feedback on your design project."
        }
        isMargin={true}
        img={page2Img1}
        mainPage={false}
        isReverse={true}
      />
    </>
  );
};

export default AllInfoComponents;
