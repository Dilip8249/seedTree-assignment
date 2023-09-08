import React from "react";
import customerPoster from "../assets/imgs/customerPoster.svg";
import card1 from "../assets/imgs/card1.svg";
import card2 from "../assets/imgs/card2.svg";
import card3 from "../assets/imgs/card3.svg";
import people1 from "../assets/imgs/people1.svg";
import people2 from "../assets/imgs/people2.svg";
import people3 from "../assets/imgs/people3.svg";
import people4 from "../assets/imgs/people4.svg";
import people5 from "../assets/imgs/people5.svg";
import people6 from "../assets/imgs/people6.svg";
import people7 from "../assets/imgs/people7.svg";
import people8 from "../assets/imgs/people8.svg";

const CustomerFeedbackComp = () => {
  return (
    <>
      <div className="cust-review">
        <p className="content">
          "The customized package from Seedtree was exactly what I needed to
          bring my vision to life. I'm thrilled with my new home design!
        </p>
        <div className="innerDiv">
          <div className="img-div">
            <img className="img" src={customerPoster}></img>
          </div>
          <div>
            <p className="customer-content">Alessio Belcastro</p>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card1-container">
          <button className="btn-1">plaining package</button>
          <div className="card-img">
            <img className="main-img" src={card1}></img>
          </div>
        </div>

        <div className="card1-container">
          <button className="btn-1">plaining package</button>
          <div className="card-img">
            <img className="main-img" src={card2}></img>
          </div>
        </div>

        <div className="card1-container">
          <button className="btn-1">plaining package</button>
          <div className="card-img">
            <img className="main-img" src={card3}></img>
          </div>
        </div>
      </div>
    <div className="people-container">
      <div className="people-main-container">
        <div className="people-div">
          <img className="p-img" src={people1}></img>
          <img className="p-img" src={people2}></img>
          <img className="p-img" src={people3}></img>
          <img className="p-img" src={people4}></img>
          <img className="p-img" src={people5}></img>
          <img className="p-img" src={people6}></img>
        </div>
        <div className="people-div">
          <img className="p-img" src={people7}></img>
          <img className="p-img" src={people8}></img>
        </div>

        <div className="text-div">
            <p className="inner-text">Start designing your dream home today.</p>
        </div>
        <div className="call-btn-div">
            <button className="call-btn">
                Book a call
            </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default CustomerFeedbackComp;
