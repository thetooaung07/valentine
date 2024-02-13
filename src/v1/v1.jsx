import React, { useEffect, useState } from "react";
import TypewriterComponent from "typewriter-effect";
import "./V1.css";

function V1() {
  const [oneTouch, setOneTouch] = useState(false);
  return (
    <>
      {oneTouch ? (
        <div className="card-wrapper">
          <div className="backdrop-blur"></div>
          <div className="layout">
            <div className="glass">
              <div className="fade-in-image">
                <img src="/valentines-day-concept-card.jpg" />
              </div>

              <div className="typewriter_text">
                <div>
                  <div className="Type1">
                    <TypewriterComponent
                      onInit={(typewriter) => {
                        typewriter
                          .changeDelay(50)
                          .typeString("To My baby girl")
                          .start();
                      }}
                    />
                  </div>
                  <div className="Type2">
                    <TypewriterComponent
                      onInit={(typewriter) => {
                        typewriter
                          .changeDelay(40)
                          .pauseFor(1500)
                          .typeString(
                            "Having you as my love is one of the blessings I've ever had in my life. I can never get tired of loving you, caring you and seeing you every single day. I would like to say this valentine's day is just a milestone of our beautiful journey. "
                          )
                          .typeString(
                            " Happy Valentine's Day to the most wonderful girl I’ve ever met."
                          )
                          .start();
                      }}
                    />
                  </div>
                </div>

                <div className="Type3">
                  <div style={{ flex: 1 }}></div>
                  <TypewriterComponent
                    onInit={(typewriter) => {
                      typewriter
                        .changeDelay(60)
                        .pauseFor(18000)
                        .typeString("From TOA")
                        .start();
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <FloatingEnvelope setOneTouch={setOneTouch}></FloatingEnvelope>
      )}
    </>
  );
}

export default V1;

/*   */

const FloatingEnvelope = ({ setOneTouch }) => {
  const [hover, setHover] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className="App">
      <div
        className="container"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="valentines" onClick={() => setOneTouch(true)}>
          <div className="envelope" />
          <div className="front" />
          <div className={`card ${hover ? "hover" : "unhover"}`}>
            <div className="text">
              Happy
              <br />
              Valentine's
              <br />
              Day
            </div>
            <div className="heart"></div>
          </div>
          <div className="hearts">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
            <div className="four"></div>
            <div className="five"></div>
          </div>
        </div>
        <div className="shadow"></div>
      </div>
    </div>
  );
};
