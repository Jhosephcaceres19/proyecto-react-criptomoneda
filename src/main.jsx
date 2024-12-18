import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pagina404 from "./components/404.jsx";
import Cuadricula from "./components/Cuadricula.jsx"
import  Home  from "./Home.jsx";
import { CriptoPage } from "./components/cripto/CriptoPage.jsx";
import { register } from './registerServiceWorker';
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/criptomonedas" element={<App/>}>
            <Route index element={<Cuadricula/>}/>
            <Route path=":id" element={<CriptoPage/>}/>
        </Route>
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  </>
  
);
register();

