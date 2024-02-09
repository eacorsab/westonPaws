import { useEffect, useState } from "react";
import title from "../../assets/services/SERV.jpeg";
import backgroundImage from "../../assets/bg-pet-purple.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Partial = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dogsname: "",
    phone: "",
    options: "Partial Grooming",
    message: "",
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (const key in formData) {
      if (formData[key] === "") {
        toast.error("Por favor, llene todos los campos del formulario.");
        return;
      }
    }

    try {
      const response = await fetch("http://localhost:8000/send-email/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setFormData({
        name: "",
        email: "",
        dogsname: "",
        phone: "",
        options: "Partial Grooming",
        message: "",
      });

      openModal();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <>
      <div className="relative h-full">
        <img src={title} alt="SERVICES" className="w-full h-full object-cover" />
        <div className="absolute bottom-1/2 left-[150px] transform -translate-y-1/2 text-white">
          <h1 className="text-4xl font-bold">SERVICES</h1>
        </div>
      </div>
      <div className="w-full grid grid-cols-2">
        <div
          className="bg-cover bg-center w-full h-full flex flex-col justify-around items-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <h1 className="text-yellow-500 text-4xl">PARTIAL GROMMING INCLUDES:</h1>
          <p1 className="text-white text-2xl">bath</p1>
          <p1 className="text-white text-2xl">shave parts</p1>
          <p1 className="text-white text-2xl">nail cut</p1>
          <p1 className="text-white text-2xl">trim around the face</p1>
          <p1 className="text-white text-2xl">clean ears</p1>
          <p1 className="text-white text-2xl">anal gland extraction</p1>
          <div className="text-3xl">
            <h1 className="text-yellow-500">VALUE RANGE:</h1>
            <h1 className="text-white">$30.00 – $55.00</h1>
          </div>
        </div>
        <div className="bg-[#28123f] h-full justify-around px-4 py-4">
          <div className="py-2">
            <h1 className="text-yellow-500 text-2xl">MAKE AN APPOINTMENT</h1>
            <p className="text-white">
              For Partial Gromming information, please contact us.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-row-6 gap-4">
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="bg-[#451760] border border-[#451760] h-[50px] text-white px-4  rounded placeholder-white"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="text"
                id="email"
                placeholder="Your Email"
                className="bg-[#451760] border border-[#451760] h-[50px] text-white px-4  rounded placeholder-white"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                id="dogsname"
                placeholder="Your dog's name"
                className="bg-[#451760] border border-[#451760] h-[50px] text-white px-4  rounded placeholder-white"
                value={formData.dogsname}
                onChange={handleChange}
              />
              <input
                type="text"
                id="phone"
                placeholder="Your phone"
                className="bg-[#451760] border border-[#451760] h-[50px] text-white px-4  rounded placeholder-white"
                value={formData.phone}
                onChange={handleChange}
              />
              <select
                id="options"
                className="bg-[#451760] text-white px-4  h-[50px] rounded placeholder-white"
                value={formData.options}
                onChange={handleChange}
              >
                <option value="Partial Grooming">Partial Grooming</option>
                <option value="Full Grooming">Full Grooming</option>
                <option value="Other">Other</option>
              </select>
              <textarea
                id="message"
                placeholder="Your message here..."
                className="bg-[#451760] border border-[#451760] text-white p-4 rounded h-[150px] placeholder-white resize-vertical"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="bg-gray-200 my-4 px-10 py-2 rounded mx-auto block"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Toastify container para mostrar notificaciones */}
      <ToastContainer />

      {modalIsOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="h-6 w-6 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      Correo electrónico enviado con éxito
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Tu correo electrónico ha sido enviado con éxito.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Aceptar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Partial;
