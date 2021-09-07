import React from "react";
import "../index.css";

import { ParallaxProvider } from "react-scroll-parallax";
import Parallaximg from "./Parallaximg";
import aaronsebastian from "../aaronsebastian.jpg";
import davidnieto from "../davidnieto.jpg";

const Parallax = () => {
  // Parallax background image ja tekstid
  return (
    <ParallaxProvider>
      <Parallaximg
        imgsrc={aaronsebastian}
        height="100vh"
        opacity="0.5"
      ></Parallaximg>
      <p style={{ padding: "50px" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <Parallaximg
        imgsrc={davidnieto}
        height="100vh"
        opacity="0.9"
      ></Parallaximg>
      <p style={{ padding: "50px" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </ParallaxProvider>
  );
};

export default Parallax;
