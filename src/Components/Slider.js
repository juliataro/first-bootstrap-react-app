import Carousel from "react-bootstrap/Carousel";
import React from "react";
import aaronsebastian from "../aaronsebastian.jpg";
import jannislucas from "../jannislucas.jpg";
import davidnieto from "../davidnieto.jpg";

// ne zabivat propisivat  "export default"
export default function Slider() {
  // ne zabivat stavit "return"
  return (
    <Carousel>
      <Carousel.Item style={{ height: "650px" }}>
        <img className="d-block w-100" src={aaronsebastian} alt="First slide" />
        <Carousel.Caption>
          <h1
            style={{
              color: "#ff6600",
              fontSize: "14rem",
              textShadow: " 4px 4px 10px #242424",
              fontWeight: "bold",
              lineHeight: "250px",
            }}
          >
            Loving <br></br>New York
          </h1>
          <p
            style={{
              color: "white",
              fontSize: "21px",
              backgroundColor: "#313336",
            }}
          >
            “The true New Yorker secretly believes that people living anywhere
            else have to be, in some sense, kidding.” ― John Updike
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "650px" }}>
        <img className="d-block w-100" src={jannislucas} alt="Second slide" />

        <Carousel.Caption>
          <h1
            style={{
              color: "white",
              fontSize: "14rem",
              textShadow: " 4px 4px 10px #242424",
              fontWeight: "bold",
              lineHeight: "250px",
            }}
          >
            Amazing New York
          </h1>
          <p
            style={{
              color: "white",
              fontSize: "21px",
              backgroundColor: "#313336",
            }}
          >
            “The city seen from the Queensboro Bridge is always the city seen
            for the first time, in its first wild promise of all the mystery and
            the beauty in the world.” ― F. Scott Fitzgerald, The Great Gatsby
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "650px" }}>
        <img className="d-block w-100" src={davidnieto} alt="Third slide" />

        <Carousel.Caption>
          <h1
            style={{
              color: "white",
              fontSize: "14rem",
              textShadow: " 4px 4px 10px #242424",
              fontWeight: "bold",
              lineHeight: "250px",
            }}
          >
            Just Strange NYC
          </h1>
          <p
            style={{
              color: "white",
              fontSize: "21px",
              backgroundColor: "#313336",
            }}
          >
            “New York was a city where you could be frozen to death in the midst
            of a busy street and nobody would notice.” ― Bob Dylan, Chronicles:
            Volume One
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
