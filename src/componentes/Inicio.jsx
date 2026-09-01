import { useState } from "react";
import "../css/inicio.css";
import InicioSesion from "./InicioSesion";
import RegistroUsuario from "./RegistroUsuario";

const Inicio = () => {
  const [vista, setVista] = useState("login");

  return (
    <>
      <header>
        <h1>Bienvenido</h1>
      </header>
      <main>
        <section id="btn_seleccionar_accion">
          <div className="container_barra_seleccion" data-vista={vista}>
            <div className="btn_opcion">
              <button
                type="button"
                className={vista === "login" ? "activo" : ""}
                onClick={() => setVista("login")}
              >
                <span>Inicia sesion</span>
              </button>
            </div>
            <div className="btn_opcion">
              <button
                type="button"
                className={vista === "registro" ? "activo" : ""}
                onClick={() => setVista("registro")}
              >
                <span>Registrate</span>
              </button>
            </div>
          </div>
        </section>
            {vista === "login"? <InicioSesion/> : <RegistroUsuario/>}


  
      </main>
    </>
  );
};

export default Inicio;
