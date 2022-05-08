import docStr from "../../assets/poster_doctor2.jpg";
import dumBled from "../../assets/poster_dumbledore.jpg";
import sonic from "../../assets/Poster_Sonic2.jpg";
import morbius from "../../assets/poster_morbius.jpg";
import "../cards/style.css";
import React from "react";

const Cards = () => {
  return (
    <div className="card-posters">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card-doctor">
              <img src={docStr} className="card-img-top" alt="doctor" />
              <div className="card-body">
                <h5 className="card-title">Doctor Strange 2</h5>

                <p className="card-sinopse">This is a wider</p>
                <h6 className="data">Estreia:</h6>
                <h6 className="duracao">Duração:</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-dumbled">
              <img src={dumBled} className="card-img-top" alt="dumbledore" />
              <div className="card-body">
                <h5 className="card-title">Os Segredos de Dumbledore</h5>

                <p className="card-sinopse">This is a wider</p>
                <h6 className="data">Estreia:</h6>
                <h6 className="duracao">Duração:</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-sonic">
              <img src={sonic} className="card-img-top" alt="sonic" />
              <div className="card-body">
                <h5 className="card-title">Sonic 2</h5>

                <p className="card-sinopse">This is a wider</p>
                <h6 className="data">Estreia:</h6>
                <h6 className="duracao">Duração:</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-doctor">
              <img
                src={morbius}
                className="card-img-top"
                alt="morb"
                style={{ height: 377, width: 250 }}
              />
              <div className="card-body">
                <h5 className="card-title">Morbius</h5>

                <p className="card-sinopse">This is a wider</p>
                <h6 className="data">Estreia:</h6>
                <h6 className="duracao">Duração:</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
