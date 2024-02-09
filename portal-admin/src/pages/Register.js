import React, { useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { getAuth , createUserWithEmailAndPassword } from "firebase/auth";
import bgpawsgreen from "../assets/bg-paws.png";
import { toast } from "react-toastify";

function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [error, setError] = useState("");
  const [IsLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const auth = getAuth();

  const validateEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const register = async () => {
    
    try {
        if (!validateEmail(registerEmail)) {
            setError("Por favor, ingresa un correo electrónico válido.");
            return;
          }
          if (!registerPassword) {
            setError("Por favor, ingresa tu contraseña.");
            return;
          }
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      toast.success("Registro exitoso");
      navigate("/login");
    } catch (error) {
      console.log(error.message);
      toast.error("Error durante el registro: " + error.message);
    }
  };

  return (
    <div className="relative flex justify-center items-center h-screen bg-[#028791]">
      <img
        className="absolute inset-0 object-cover w-full h-full opacity-90"
        src={bgpawsgreen}
        alt="Background Paws"
      />
      <div className="z-10 max-w-md w-full px-[50px] py-[30px] bg-white rounded-md opacity-80">
        <div className="mb-[50px] text-center">
          <h1 className="font-bold text-[30px]">Registrar cuenta</h1>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="my-[20px]">
          <p>Correo electrónico</p>
          <input
            type="text"
            className="h-[40px] w-full px-[10px] bg-white rounded border border-gray-500"
            onChange={(e) => setRegisterEmail(e.target.value)}
          ></input>
        </div>
        <div className="my-[20px]">
          <p>Contraseña</p>
          <input
            type="password"
            className="h-[40px] w-full px-[10px] bg-white rounded border border-gray-500"
            onChange={(e) => setRegisterPassword(e.target.value)}
          ></input>
          <br />
          <Link to="/login" className="text-sm text-[#4299E1]">
            ¿Tienes cuenta?
          </Link>
        </div>
        <div className="my-[30px] text-center">
          {IsLoading ? (
            <div className="bg-[#37B6BD] h-[40px] w-full rounded-md text-white flex justify-center items-center">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <button
              type="submit"
              className="bg-[#37B6BD] h-[40px] w-full rounded-md text-white"
              onClick={register}
            >
              Registrar cuenta
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
