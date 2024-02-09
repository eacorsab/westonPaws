import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Modal from "../components/Modal";
import LoadSpinner from "../components/LoadSpinner";

const Products = () => {
  const [IsLoading, setIsLoading] = useState(false);
  const [IsAdding, setIsAdding] = useState(false);
  const [codigo, setCodigo] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState(null);
  const [precio, setPrecio] = useState(0.0);
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState("");
  const [eliminarModalOpen, setEliminarModalOpen] = useState(false);
  const [productoAEliminar, setProductoAEliminar] = useState(null);

  const handleOpenEliminarModal = (idProducto) => {
    const productoAEliminar = data.find((producto) => producto.id === idProducto);
    setProductoAEliminar(productoAEliminar);
    setEliminarModalOpen(true);
  };

  const handleCloseEliminarModal = () => {
    setEliminarModalOpen(false);
    setProductoAEliminar(null);
  };

  const handleOpenModal = (data) => {
    setModalData(data);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const Endpoint = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${Endpoint}/obtener_datos/producto/`)
      .then((response) => {
        setTimeout(() => {
          setData(response.data);
          setIsLoading(false);
        }, 2000);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, [IsAdding, productoAEliminar]);

  const handleEliminarProducto = async () => {
    try {
      if (!productoAEliminar || !productoAEliminar.codigo) {
        toast.error("No se encontró el producto a eliminar");
        return;
      }
  
      const response = await axios.get(`${Endpoint}/obtener_archivos/`);
      const apiData = response.data;
  
      if (!apiData || !apiData.collections || !apiData.collections.producto) {
        toast.error("Error en la estructura de la respuesta del servidor");
        return;
      }
  
      const productoKey = Object.keys(apiData.collections.producto).find(
        (key) => apiData.collections.producto[key].codigo === productoAEliminar.codigo
      );
  
      if (!productoKey) {
        toast.error("No se encontró el producto a eliminar");
        return;
      }
  
      await axios.delete(`${Endpoint}/delete_item/producto/${productoKey}/`);
  
      toast.success("Producto eliminado con éxito");
      setProductoAEliminar(null); 
      handleCloseEliminarModal();
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
      toast.error("Error al eliminar el producto");
    }
  };
  
  

  const handleSubmit = async () => {
    if (!codigo || !descripcion || !nombre || !precio || !imagen) {
      toast.error("Todos los campos son requeridos");
      return;
    }

    const codigoExiste = data.some(producto => producto.codigo === codigo);
    if (codigoExiste) {
      toast.error("El código ingresado ya existe. Por favor, usa un código único.");
      return;
    }

    const formData = new FormData();
    formData.append("file", imagen);
    formData.append("codigo", codigo);
    formData.append("descripcion", descripcion);
    formData.append("nombre", nombre);
    formData.append("precio", precio);

    try {
      await axios.post(`${Endpoint}/guardar_producto/`, formData);
      setIsAdding(false);
    } catch (error) {
      console.log(error);
      setIsAdding(false);
      if (error.response) {
        toast.error(
          "Error en la respuesta del servidor: " + error.response.data.message
        );
      } else if (error.request) {
        toast.error("Error de red: No se pudo conectar al servidor");
      } else {
        toast.error("Error de configuración de Axios: " + error.message);
      }
    }
  };

  const handleCodigoChange = (e) => {
    setCodigo(e.target.value);
  };

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleDescripcionChange = (e) => {
    setDescripcion(e.target.value);
  };

  const handlePrecioChange = (e) => {
    var value = e.target.value
    setPrecio(Math.abs(value));
  };

  const handleImagenChange = (e) => {
    setImagen(e.target.files[0]);
  };

  return (
    <div>
      <div className="p-4 sm:ml-64 ">
        <div className="flex items-center justify-between p-4 mt-10">
          <p className="text-[#6B28A0] text-2xl font-bold">Productos</p>
          {!IsAdding && (
            <button
              onClick={() => setIsAdding(true)}
              className="bg-[#6B28A0] text-white w-fit m-4 p-3 rounded"
            >
              Agregar producto
            </button>
          )}
        </div>
        {IsAdding ? (
          <div className="flex justify-center items-center">
            <div className="p-4 border-2 border-gray-200 rounded-lg w-[500px] mx-10">
              <p className="text-[#6B28A0] text-center text-2xl font-bold">
                Agregar productos
              </p>
              <div className="max-w-md mx-auto">
                <div className="mb-4">
                  <label
                    htmlFor="codigo"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Código
                  </label>
                  <input
                    onChange={handleCodigoChange}
                    type="text"
                    id="codigo"
                    name="codigo"
                    placeholder="Ingresa código"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="nombre"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Nombre
                  </label>
                  <input
                    onChange={handleNombreChange}
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Ingresa nombre"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="descripcion"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Descripción
                  </label>
                  <textarea
                    onChange={handleDescripcionChange}
                    id="descripcion"
                    name="descripcion"
                    placeholder="Ingresa descripción"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y"
                  />
                </div>

                <div className="grid grid-cols-2">
                  <div className="mb-4">
                    <label
                      htmlFor="precio"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Precio
                    </label>
                    <input
                      onChange={handlePrecioChange}
                      type="number"
                      min="0"
                      step="0.01"
                      id="precio"
                      name="precio"
                      placeholder="0.00"
                      className="shadow appearance-none border rounded w-[100px] h-[40px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="imagen"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Imagen
                    </label>
                    <input
                      onChange={handleImagenChange}
                      type="file"
                      id="imagen"
                      name="imagen"
                      accept="image/*"
                      className="shadow appearance-none border rounded w-full h-[40px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                  <button
                    onClick={() => {
                      handleSubmit();
                    }}
                    className="bg-[#6B28A0] text-white w-fit m-4 p-3 rounded"
                  >
                    Guardar
                  </button>
                  <button
                    onClick={() => {
                      setIsAdding(false);
                    }}
                    className="bg-red-500 text-white w-fit m-4 p-3 rounded"
                  >
                    Cancelar
                  </button>
                </div>
            </div>
          </div>
        ) :IsLoading ? ( <div className="flex  justify-center ">
        <LoadSpinner/>
      </div>): data.length > 0 ? (
          <>
            <div className="grid grid-cols-4 gap-4">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="border-2 border-gray-200 rounded flex flex-col items-center p-4 relative h-[400px]"
                >
                  <div className="absolute top-0 right-0 mt-2 mr-2">
                    <button
                      onClick={() => handleOpenEliminarModal(item.id)}
                      className="text-red-500 flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="14"
                        viewBox="0 0 448 512"
                        className="mr-2 hover:fill-red-500"
                      >
                        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                      </svg>
                    </button>
                  </div>
                  <div className="h-[200px] w-full flex items-center justify-center mb-4">
                    <img
                      className="max-h-full max-w-full"
                      src={item.multimedia}
                      alt="Product"
                    />
                  </div>
                  <div className="absolute bottom-0 text-center m-4">
                    <p className="text-blue-500 text-lg">{item.nombre}</p>
                    <p className="font-bold py-2">${item.precio}</p>
                    <button
                      onClick={() => handleOpenModal(item)}
                      className="bg-[#6B28A0] text-white p-3 rounded"
                    >
                      Detalles
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal */}
            {modalOpen && (
              <Modal
                handleCloseModal={handleCloseModal}
                modalData={modalData}
              />
            )}

            {/* Modal de eliminación */}
            {eliminarModalOpen && (
              <div className="fixed inset-1 flex items-center justify-center bg-gray-500 bg-opacity-75">
                <div className="bg-white p-4 rounded">
                  <p className="text-lg font-bold mb-4">
                    ¿Seguro que quieres eliminar este producto?
                  </p>
                  <div className="flex justify-between">
                    <button
                      onClick={() => handleEliminarProducto(productoAEliminar)}
                      className="bg-red-500 text-white p-2 rounded"
                    >
                      Eliminar
                    </button>
                    <button
                      onClick={handleCloseEliminarModal}
                      className="bg-gray-400 text-white p-2 rounded"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                className="fill-yellow-500 h-10 w-10"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
              </svg>
              <p> No existen anuncios disponibles </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
