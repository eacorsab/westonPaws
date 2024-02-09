import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import bgpawsgreen from "../assets/bg-paws.png";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [IsSent, setIsSent] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSubmit = async () => {
    sendPasswordResetEmail(auth, email)
      .then((data) => {
        setIsSent(true);
        // setTimeout(() => {
        //   navigate("/");
        // }, 3000);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Existe un problema al enviar correo.");
      });
  };
  return (
    <div className="relative flex justify-center items-center h-screen bg-[#028791]">
      <img
        className="absolute inset-0 object-cover w-full h-full opacity-90"
        src={bgpawsgreen}
        alt="Background Paws"
      />
      {IsSent ? (
        <div className="z-10 max-w-md w-full px-[50px] py-[30px] bg-white rounded-md opacity-80">
          <div className="mb-[50px] text-center">
            <h1 className="font-bold text-[30px]">Correo enviado con éxito</h1>
          </div>
          <div className="my-[30px] text-center">
            <button
              type="submit"
              className="bg-[#37B6BD] h-[40px] w-full rounded-md text-white"
              onClick={() => navigate("/login")}
            >
              Iniciar sesión
            </button>
          </div>
        </div>
      ) : (
        <div className="z-10 max-w-md w-full px-[50px] py-[30px] bg-white rounded-md opacity-80">
            <h1 className="font-bold text-[30px]">Recuperar contraseña</h1>
          <div className="my-[10px]">
            <p>Correo electrónico</p>
            <input
              type="text"
              className="h-[40px] w-full px-[10px] bg-white rounded border border-gray-500 "
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="my-[30px] text-center">
            <button
              type="submit"
              className="bg-[#37B6BD] h-[40px] w-full rounded-md text-white"
              onClick={handleSubmit}
            >
              Enviar correo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default ForgotPassword;
