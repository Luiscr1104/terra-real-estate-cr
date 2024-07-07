// components/ContactForm.js
import React from "react";

export default function ContactForm({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-600"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl mb-4">Contáctanos</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Nombre</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Correo electrónico</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mensaje</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded mt-1"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-verdePrimario text-white py-2 rounded"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
