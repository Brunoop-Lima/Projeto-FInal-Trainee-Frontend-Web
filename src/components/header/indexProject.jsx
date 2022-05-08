import lg from "../../assets/logo.jpg";
import "./styles.css";
import React from "react";
import { FiSearch } from "react-icons/fi";
const HeaderProject = () => {
  return (
    <header>
      <img src={lg} alt="Logo" style={{ height: 150 }} />
      <center>
        <h4 className="title">Laçamentos | Destaques</h4>
      </center>
      <div className="form">
        <form>
          <input placeholder="  Pesquisar filme..." type="text" />
          <button className="buttonSearch">
            <FiSearch size={18} color="#FFF" />
          </button>
        </form>
      </div>
    </header>
  );
};

export default HeaderProject;
