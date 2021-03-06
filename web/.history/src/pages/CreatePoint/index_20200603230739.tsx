import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Map, TileLayer, Marker } from "react-leaflet";

import "./styles.css";

import logo from "../../assets/logo.svg";

const CreatePoint = () => {
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta" />
        <Link to="/">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>
      <form action="">
        <h1>
          Cadastro do <br /> ponto de coleta
        </h1>
        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Nome da entidade</label>
            <input type="text" id="name" name="name"></input>
          </div>
          <div className="field-group">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email"></input>
            </div>
            <div className="field">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input type="text" id="whatsapp" name="whatsapp"></input>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>
          <Map center={[-25.427968, -49.3256704]} zoom={15}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            ></TileLayer>
            <Marker position={[-25.427968, -49.3256704]}></Marker>
          </Map>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select id="uf" name="uf">
                <option value="0">Selecione uma UF</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="cidade">Cidade</label>
              <select id="cidade" name="cidade">
                <option value="0">Selecione uma Cidade</option>
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Itens de coleta</h2>
            <span>Selecione um ou mais itens abaixo</span>
          </legend>
          <ul className="items-grid">
            <li>
              <img
                src="http://localhost:3333/uploads/lampadas.svg"
                alt="teste"
              />
              <span>Lampâdas</span>
            </li>
            <li className="selected">
              <img
                src="http://localhost:3333/uploads/lampadas.svg"
                alt="teste"
              />
              <span>Lampâdas</span>
            </li>
            <li>
              <img
                src="http://localhost:3333/uploads/lampadas.svg"
                alt="teste"
              />
              <span>Lampâdas</span>
            </li>
            <li>
              <img
                src="http://localhost:3333/uploads/lampadas.svg"
                alt="teste"
              />
              <span>Lampâdas</span>
            </li>
            <li>
              <img
                src="http://localhost:3333/uploads/lampadas.svg"
                alt="teste"
              />
              <span>Lampâdas</span>
            </li>
            <li>
              <img
                src="http://localhost:3333/uploads/lampadas.svg"
                alt="teste"
              />
              <span>Lampâdas</span>
            </li>
          </ul>
        </fieldset>
        <button type="submit">Cadastrar ponto de coleta</button>
      </form>
    </div>
  );
};

export default CreatePoint;
