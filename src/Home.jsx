
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
    <h1>Hola Bienvenido a EDmarker</h1>
    <p>Conoce las 100 criptos mas usadas</p>
    <Link to ="./criptomonedas">Ver criptomonedas</Link>
    </>
  )
}
export default Home
