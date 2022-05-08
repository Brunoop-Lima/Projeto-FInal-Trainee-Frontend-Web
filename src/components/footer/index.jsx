import React from "react";
import lg from "../../assets/logo.jpg";
import "../footer/style.css";
import pullCommit from "../../assets/pull.jpg";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Coluna 1*/}
          <div className="col">
            <img src={pullCommit} alt="pull" style={{ height: 150 }} />
          </div>

          {/* Coluna 2*/}
          <div className="col">
            <h4>PRODUZIDO POR BRUNO LIMA</h4>
            <p className="list-unstyled">
              <li>LICENSE</li>
            </p>
          </div>
          {/* Coluna 3*/}
          <div className="col">
            <img src={lg} alt="logo" style={{ height: 150 }} />
          </div>
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear} Bruno Lima | By Commit Jr | Terms
              Of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
