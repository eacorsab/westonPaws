import { useState, useEffect } from "react";
import GeneralInfo from "../components/Home/GeneralInfo";
import Info from "../components/Home/Info";
import backgroundImage from "../assets/bg-pet-purple.png";
import axios from "axios";

const Home = () => {
  const [showGeneralInfo, setShowGeneralInfo] = useState(true);
  const [products, setProducts] = useState([]);

  const handleArrowClick = () => {
    setShowGeneralInfo(!showGeneralInfo);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    axios
      .get("http://localhost:8000/obtener_archivos/")
      .then((response) => {
        const data = response.data;
        const firstFourProducts = Object.values(data.collections.anuncio).slice(
          0,
          4
        );
        setProducts(firstFourProducts);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="relative">
        <div className="flex justify-between items-center absolute top-[50%] left-0 right-0 z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="10"
            viewBox="0 0 320 512"
            className="fill-white cursor-pointer w-10 h-10 bg-black px-2 py-2 bg-opacity-75"
            onClick={handleArrowClick}
            style={{ zIndex: 1 }}
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="10"
            viewBox="0 0 320 512"
            className="fill-white cursor-pointer w-10 h-10 bg-black px-2 py-2 bg-opacity-75"
            onClick={handleArrowClick}
            style={{ zIndex: 1 }}
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </div>
        {showGeneralInfo ? <GeneralInfo /> : <Info />}
      </div>
      <div className="grid grid-cols-6">
        <div className="bg-[#0099b0] h-[250px] flex justify-center items-center">
          <h1 className="text-white uppercase font-bold">Pet toys</h1>
        </div>
        <div className="bg-[#0099b0] h-[250px] flex justify-center items-center">
          <h1 className="text-white uppercase font-bold">Dog beds</h1>
        </div>
        <div className="bg-[#0099b0] h-[250px] flex justify-center items-center">
          <h1 className="text-white uppercase font-bold">Dow sweater</h1>
        </div>
        <div className="bg-[#0099b0] h-[250px] flex justify-center items-center">
          <h1 className="text-white uppercase font-bold">Pet leash</h1>
        </div>
        <div className="bg-[#0099b0] h-[250px] flex justify-center items-center">
          <h1 className="text-white uppercase font-bold">Dog collar</h1>
        </div>
        <div className="bg-[#0099b0] h-[250px] flex justify-center items-center">
          <h1 className="text-white uppercase font-bold">Pet brush</h1>
        </div>
      </div>

      <div
        className="bg-cover bg-center  h-fit w-full flex items-center justify-center relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
        }}
      >
        <div className="block">
          {products.length >= 4 && (
            <>
              <h1 className="uppercase text-[#ecb42b] font-bold text-2xl my-10 flex justify-center items-center">
                Featured Products
              </h1>

              <div className="grid grid-cols-4 gap-10 mb-10">
                {products.map((product) => (
                  <div
                    key={product.codigo}
                    className="flex flex-col items-center text-center"
                  >
                    <img
                      src={product.multimedia}
                      alt={product.nombre}
                      className="h-[300px] w-[250px]"
                    />
                    <div className="bg-[#0099b0] flex justify-center items-center h-10 w-fit text-white m-4 px-5 rounded">
                      View Product
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="bg-black bg-opacity-20 h-[300px] flex flex-col items-center justify-center px-4 my-4">
            <h1 className="uppercase text-yellow-400 text-4xl">
              Attention Schedule
            </h1>
            <h1 className="uppercase text-white text-3xl font-light">
              mon 09h00 - 16h00
            </h1>
            <h1 className="uppercase text-white text-3xl font-light">
              tues-sat 08h30 - 17h00
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
