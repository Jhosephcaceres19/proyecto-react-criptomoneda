import { useEffect, useState } from "react";
import axios from "axios";
import "./Cuadricula.css";
import Cripto from "./cripto/Cripto";

function Cuadricula() {
  const [criptos, setCriptos] = useState();
  const API_URL = "https://api.coincap.io/v2/assets";

  useEffect(() => {
    axios(API_URL)
      .then((data) => {
        console.log(data);
        setCriptos(data.data.data);
      })
      .catch((e) => {
        console.log(e);
        console.error("la peticion fallo");
      });
  }, []);

  if (!criptos) return <span>Cargando...</span>;

  return (
    <div className="app-container">
      <h1 className="titulo">LISTA DE CRIPTOMONEDAS</h1>
      <div className="cripto-container">
        {criptos.map(
          ({ id, name, priceUsd, symbol, rank, changePercent24Hr }) => (
            <Cripto
              key={id}
              name={name}
              priceUsd={priceUsd}
              symbol={symbol}
              rank={rank}
              changePercent24Hr={changePercent24Hr}
              id={id}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Cuadricula;
