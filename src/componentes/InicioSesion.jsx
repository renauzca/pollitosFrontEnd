import "../css/inicioSesion.css";
import { useForm } from "react-hook-form";
const InicioSesion = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({mode: "onTouched"});
  const onSubmit = (values) => console.log(values);
  console.log(errors);
  
  return (
    <>
      <section
        id="form_inicio_sesion"
        //   className={vista === "login" ? "" : "oculto"}
      >
        <div className="container_inicio_sesion">
          <h2>Iniciar sesion</h2>
          <form action="login" method="POST" onSubmit={handleSubmit(onSubmit)}>
            <div className="campo_inicio_sesion">
              <label htmlFor="login_usuario">Nombre de usuario</label>
              <input
                type="text"
                {...register("nombreUsuario", {
                  required: "Required",
                  validate: {
                    lonMin: (valor)=>
                      valor.length >=3 || "Debe tener al menos 3 caracteres",
                    lonMax: (valor)=>
                      valor.length <=10 || "Debe tener como maximo 10 caracteres",
                     tieneMayus: (valor)=>
                      /[A-Z]/.test(valor) || "Debe incluir al menos una mayuscula",
                     caracterEspecial: (valor)=>
                      /^[A-Za-z]+$/.test(valor) || "Solo letras estan permitidas"
                  },
                })}
              />
              {errors.nombreUsuario && errors.nombreUsuario.message}
            </div>
            <div className="campo_inicio_sesion">
              <label htmlFor="login-password">Contraseña</label>
              <input
                type="password"
                id="inicioSesion-contrasena"
                {...register("contrasenaUsuario",{
                  required: "Ingresa tu contrasena",
                  validate:{
                    lonMin: (valor)=>
                      valor.length >= 4 || "Debe tener al menos 4 caracteres",
                    lonMax: (valor)=>
                      valor.length <= 8 || "No puede tener mas de 8 caracteres",
                    tieneMayus: (valor)=>
                      /[A-Z]/.test(valor) || "Debe incluir al menos una mayuscula",
                    tieneNum: (valor)=>
                      /\d/.test(valor) || "Debe incluir al menos un numero"
                  }
                })}
              />
              {errors.contrasenaUsuario && errors.contrasenaUsuario.message}
            </div>
            <button type="submit" className="btn_enviar" disabled={!isValid}>
              Iniciar sesion
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default InicioSesion;
