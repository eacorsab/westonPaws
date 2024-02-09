import React, { useState, useEffect } from "react";
import axios from "axios";
import backgroundImage from "../assets/bg-pet-purple.png";
import bgyellow from "../assets/bgyellow.png";
import "../index.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [anuncios, setAnuncios] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentAnuncioIndex, setCurrentAnuncioIndex] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8000/obtener_archivos/")
      .then((response) => {
        setProducts(Object.values(response.data.collections.producto));
        setAnuncios(Object.values(response.data.collections.anuncio));
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, [products, anuncios]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentAnuncioIndex((prevIndex) => (prevIndex + 1) % anuncios.length);
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, [anuncios]);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains("modal-background")) {
      closeModal();
    }
  };

  return (
    <>
      {anuncios.length > 0 && (
        <div
          className="bg-cover bg-center w-full h-[200px] flex flex-col justify-center items-center relative"
          style={{
            backgroundImage: `url(${bgyellow})`,
            transition: "opacity 1s ease-in-out",
          }}
        >
          {anuncios.map((anuncio, index) => (
            <div
              key={anuncio.codigo}
              className={`flex flex-col items-center text-center absolute w-full h-full p-2 ${
                index === currentAnuncioIndex ? "visible" : "invisible"
              }`}
            >
              <img
                src={anuncio.multimedia}
                className="mx-auto max-h-full max-w-full"
                alt={anuncio.descripcion}
              />
            </div>
          ))}
        </div>
      )}

      <div
        className="bg-cover bg-center w-full h-fit flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {loading ? (
          <div className="flex items-center justify-center h-full mx-4 my-4">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-blue-500 border-t-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-10 p-6">
            {products.map((product) => (
              <div
                key={product.codigo}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={product.multimedia}
                  className="h-[300px]"
                  alt={product.nombre}
                />
                <div
                  className="bg-[#0099b0] flex justify-center items-center h-10 w-fit text-white m-4 px-5 rounded cursor-pointer"
                  onClick={() => openModal(product)}
                >
                  View Product
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedProduct && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 modal-background"
          onClick={handleModalClick}
        >
          <div className="bg-[#28123F] p-8 rounded rounded-2xl shadow-lg max-w-screen-md w-full flex flex-col items-center">
            <img
              src={selectedProduct.multimedia}
              alt={selectedProduct.nombre}
              className="h-[300px] rounded"
            />
            <p className="font-bold text-xl text-yellow-500 py-4">
              {selectedProduct.nombre}
            </p>
            <p className="text-white text-xl"> ${selectedProduct.precio}</p>
            <p className="text-gray-400 py-6 text-center">
              {selectedProduct.descripcion}
            </p>
            <button
              className="bg-[#0099b0] text-white px-4 py-2 rounded mt-4"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
