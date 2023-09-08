import React from "react";
import customerPoster from "../assets/imgs/customerPoster.svg";
import "./index.css";

const InfoComp = ({ desc, smallDesc, img, mainPage, isReverse, isMargin }) => {
  return (
    <div
      style={{
        justifyContent: "space-evenly",
        flexDirection: isReverse ? "row-reverse" : "",
        marginTop: isMargin ? "182px" : "0px",
      }}
      className="mainContainer"
    >
      <div className="textInnerDiv">
        <div className="desc">{desc}</div>
        <div className="smallDesc">{smallDesc}</div>
        {mainPage ? (
          <>
            <div>
              <button className="bookButton">Book a call</button>
            </div>
            <div className="customerFeedback">
              <div>
                <img className="customerImg" src={customerPoster} />
              </div>
              <div className="customerDesc">
                “Seedtree made my home renovation project enjoyable and
                stress-free. I highly recommend their interior design services
                to anyone looking for an expert design plan.” David Greene
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <div>
        <img
          style={{ marginTop: mainPage ? -200 : "" }}
          className="page1Img"
          src={img}
        />
      </div>
    </div>
  );
};

export default InfoComp;
