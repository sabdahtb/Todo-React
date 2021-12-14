import React from "react";

export default function Add({ willtodo, handleAdd, handleChange }) {
  return (
    <div className="add p-5 w-max">
      <h1 className="judul text-xl font-semibold">Tambah To-do</h1>
      <form onSubmit={(e) => handleAdd(e)}>
        <input
          type="text"
          className="inp p-2 bg-gray-200 border-0 outline-none mt-5 rounded-sm font-semibold"
          onChange={(e) => handleChange(e)}
          value={willtodo}
        />
        <button className="tbh bg-blue-500 border-0 outline-none rounded-sm font-semibold text-yellow-50 p-2 mx-2 hover:bg-blue-700">
          Tambah
        </button>
      </form>
    </div>
  );
}
