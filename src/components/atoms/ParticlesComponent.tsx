import React, { useEffect } from "react";
import ThemeElement from "./ThemeElement";

const ParticlesComponent = (props: { colour: string }) => {
  useEffect(() => {
    // Load particles.js after the component mounts
    window.particlesJS.load(
      "particles-js",
      "/particlesjs-config.json",
      function () {
        console.log("callback - particles.js config loaded");
      }
    );
  }, []);

  return (
    <ThemeElement
      children={
        <div
          id="particles-js"
          style={{
            backgroundColor: props.colour,
            width: "100%",
            height: "100%",
            margin: 0,
            padding: 0,
          }}
        ></div>
      }
    />
  );
};

export default ParticlesComponent;
