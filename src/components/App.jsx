import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Menu from "./menu/Menu";

const App = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault(); // Evita que el navegador muestre el cuadro automáticamente.
      setDeferredPrompt(e); // Guarda el evento para usarlo más tarde.
      setShowInstallButton(true); // Muestra el botón de instalación.
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Limpieza del evento
    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Muestra el cuadro de instalación.
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("El usuario aceptó instalar la PWA.");
        } else {
          console.log("El usuario canceló la instalación de la PWA.");
        }
        setDeferredPrompt(null); // Limpia el evento después de usarlo.
        setShowInstallButton(false); // Oculta el botón tras la acción.
      });
    }
  };

  return (
    <>
      <Menu />
      <Outlet />
      {showInstallButton && (
        <button
          onClick={handleInstallClick}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            padding: "10px 20px",
            backgroundColor: "#2EC6FE",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Instalar App
        </button>
      )}
    </>
  );
};

export default App;
