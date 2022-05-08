import "./styleProject.css";
import React from "react";
import { Carousel } from "react-bootstrap";
import Vid1 from "../videos/DoctorStrangeSemSom.mp4";
import Vid2 from "../videos/sonic2SemSom.mp4";
import Vid3 from "../videos/dumbledoreDubladoSemSom.mp4";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";

const VideoCarousel = () => {
  const vieoProperties = [
    {
      id: 1,
      tittle: "Doctor Strange",
      src: Vid1,
      credit: "Video by MARVEL",
    },

    {
      id: 2,
      tittle: "Sonic 2",
      src: Vid2,
      credit: "Video by CAPCON",
    },

    {
      id: 3,
      tittle: "Dumbledore",
      src: Vid3,
      credit: "Video by Warner Bros. ",
    },
  ];

  return (
    <div className="Home">
      <br />
      <Carousel>
        {vieoProperties.map((videoObj) => {
          return (
            <Carousel.Item key={videoObj.id}>
              <ReactPlayer
                url={videoObj.src}
                pip={true}
                controls={true}
                playing={true}
              />
              <Carousel.Caption>
                <h3>{videoObj.tittle}</h3>
                <p>{videoObj.credit}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default VideoCarousel;
