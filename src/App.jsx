import { useEffect, useState } from "react"
import { url } from "./utils/constans";

function App() {

  const[criptos,setCriptos]=useState()
  
  useEffect(()=>{
    console.log(url)
    fetch(`${url}assets`)
    .then((resp) => resp.json())
    .then((data)=> {
      console.log(data)
      setCriptos(data.data)
    })
    .catch((e) =>{
      console.log(e)
      console.error("la peticion fallo")
    })
  },[])

  if (!criptos) return <span>Cargando...</span>

  return (
    <>
      <h1>CRIPTOMONEDAS</h1>
      <ol>
        {
          criptos.map(({name, priceUsd})=>(
            <li>
              Nombre:{name}
              Precio:{priceUsd}
            </li>
          ))
        }
      </ol>
    </>
  )
}

export default App
