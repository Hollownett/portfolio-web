import React from "react";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";

//CSS
const useStyles = makeStyles({
  particleCanva: {
    position: "static",
    width: "100%",
    height: "100%",
    left: "0",
    top: "0",
  },
});

function ParticleComponent() {
  const classes = useStyles();
  return (
    <Particles
      canvasClassName={classes.particleCanva}
      params={{
        particles: {
          number: {
            value: 200,
            densisty: {
              enable: false,
              value_area: 900,
            },
          },
          shape: {
            type: "square",
            stroke: {
              width: 1,
              color: "tomato",
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 0.5,
              size_min: 0.1,
              sync: false,
            },
          },
          move: {
            random: true,
            speed: 0.5,
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
  );
}

export default ParticleComponent;
