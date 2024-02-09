import React from "react";

const Modal = ({handleCloseModal, modalData}) =>{

    return(
        <div className="fixed inset-0 flex items-center justify-center z-50">
        <div
          className="modal-bg fixed inset-0 bg-black opacity-60"
          onClick={handleCloseModal}
        ></div>
        <div className=" absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg">
          <span
            className="close absolute top-0 right-0 p-4 cursor-pointer"
            onClick={handleCloseModal}
          >
            &times;
          </span>
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                  Codigo
                </th>
                <th scope="col" className="px-4 py-3">
                  Descripcion
                </th>
                <th scope="col" className="px-4 py-3">
                  Fecha Ingreso
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  {modalData.nombre}
                </th>
                <td className="px-6 py-4">{modalData.codigo}</td>
                <td className="px-4 py-4">{modalData.descripcion}</td>
                <td className="px-4 py-4">
                  {new Date(modalData.fechaIngreso).toLocaleString('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
}

export default Modal;