import "../css/registroUsuario.css";
import { useForm } from "react-hook-form";

const RegistroUsuario = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({ mode: "onTouched" });
  const onSubmit = (values) => console.log(values);

  return (
    <>
      <section
        id="form_registro"
        //   className={vista === "registro" ? "" : "oculto"}
      >
        <div className="container_registro">
          <h2>Registro de usuario</h2>
          <form
            action="registro"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="campo_registro">
              <label htmlFor="registro_nombre">Nombre</label>
              <input
                type="text"
                id="registro_nombre"
                {...register("nombre", {
                  required: "Required",
                  validate: {
                    caracterEspecial: (valor) =>
                      /^[A-Za-z]+$/.test(valor) ||
                      "Solo letras estan permitidas",
                    lonMin: (valor) =>
                      valor.length >= 3 || "Debe tener al menos 3 caracteres",
                    lonMax: (valor) =>
                      valor.length <= 10 ||
                      "Debe tener como maximo 10 caracteres",
                  },
                })}
              />
              {errors.nombre && errors.nombre.message}
            </div>
            <div className="campo_registro">
              <label htmlFor="nombre_de_usuario_registro">
                Nombre de usuario
              </label>
              <input
                type="text"
                id="nombre_de_usuario_registro"
                {...register("nombre_usuario", {
                  required: "Required",
                  validate: {
                    lonMin: (valor) =>
                      valor.length >= 3 || "Debe tener al menos 3 caracteres",
                    lonMax: (valor) =>
                      valor.length <= 10 ||
                      "Debe tener como maximo 10 caracteres",
                    tieneMayus: (valor) =>
                      /[A-Z]/.test(valor) ||
                      "Debe incluir al menos una mayuscula",
                    caracterEspecial: (valor) =>
                      /^[A-Za-z]+$/.test(valor) ||
                      "Solo letras estan permitidas",
                  },
                })}
              />
              {errors.nombre_usuario && errors.nombre_usuario.message}
            </div>
            <div className="campo_registro">
              <label htmlFor="registro_email">Email</label>
              <input
                type="email"
                id="registro_email"
                {...register("email", {
                  required: "Requerido",
                  validate: {
                    formatoValido: (valor) =>
                      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor) ||
                      "Ingresá un email válido",
                  },
                })}
              />
              {errors.email && errors.email.message}
            </div>
            <div className="campo_registro">
              <label htmlFor="registro-contrasena">Contraseña</label>
              <input
                type="password"
                id="registro-contrasena"
                {...register("contrasenaUsuario", {
                  required: "Ingresa tu contrasena",
                  validate: {
                    lonMin: (valor) =>
                      valor.length >= 4 || "Debe tener al menos 4 caracteres",
                    lonMax: (valor) =>
                      valor.length <= 8 || "No puede tener mas de 8 caracteres",
                    tieneMayus: (valor) =>
                      /[A-Z]/.test(valor) ||
                      "Debe incluir al menos una mayuscula",
                    tieneNum: (valor) =>
                      /\d/.test(valor) || "Debe incluir al menos un numero",
                  },
                })}
              />
              {errors.contrasenaUsuario && errors.contrasenaUsuario.message}
            </div>
            <button type="submit" className="btn_enviar" disabled={!isValid}>
              Crear cuenta
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default RegistroUsuario;
