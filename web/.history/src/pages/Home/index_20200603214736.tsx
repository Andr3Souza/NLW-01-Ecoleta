import React from "react";

import "./styles.css";

import logo from "../../assets/logo.svg";

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta"></img>
        </header>
        <main>
          <h1>Seu marketplace de coleta de resíduos.</h1>
        </main>
      </div>
    </div>
  );
};

export default Home;
