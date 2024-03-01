import { useEffect, useState } from "react"
import axios from "axios"
import "./App.css"

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
    <>
      <h1>LISTA DE CRIPTOMONEDAS</h1>
      <ol>
        {
          criptos.map(({id, name, priceUsd, symbol})=>(
            <lu key={id}>
              Nombre:{name}
              <br />
              Precio:{priceUsd}
              <br />
              Simbolo:{symbol}
              <p></p>
            </lu>
          ))
        }
      </ol>
    </>
  )
}

export default App
