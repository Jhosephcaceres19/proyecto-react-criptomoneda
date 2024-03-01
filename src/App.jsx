import { useEffect, useState } from "react"
import axios from "axios"
import "./App.css"
import Cripto from "./Cripto"

function App() {
  const[criptos,setCriptos]=useState()
  const API_URL="https://api.coincap.io/v2/assets"
  
  
  useEffect(()=>{
    axios(API_URL)
    .then((data)=> {
      console.log(data)
      setCriptos(data.data.data)
    })
    .catch((e) =>{
      console.log(e)
      console.error("la peticion fallo")
    })
  },[])

  if (!criptos) return <span>Cargando...</span>

  return (
    <div className="app-container">
      <h1 className="titulo">LISTA DE CRIPTOMONEDAS</h1>
      <div className="cripto-container">
          {
          criptos.map(({id, name, priceUsd, symbol,rank})=>(
            <Cripto key={id} name={name} priceUsd={priceUsd} symbol={symbol} rank={rank}/>
          ))
          }
      </div>
    </div>
  )
}

export default App
