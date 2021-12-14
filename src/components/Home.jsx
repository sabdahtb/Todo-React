import React from "react";

export default function Home({
  todo,
  finish,
  handleFinish,
  handleHapus,
  pesan,
  selesai,
}) {
  return (
    <div className="home p-5 w-max">
      <h1 className="judul font-semibold text-xl mb-3">My To-do List</h1>

      {pesan && (
        <div className="lis p-1 font-semibold text-gray-500 flex justify-between w-80 items-center cursor-pointer mb-1 rounded-sm hover:bg-gray-100">
          <p>Anda belum menambahkan To-do</p>
        </div>
      )}

      {todo &&
        todo.map((todos, index) => (
          <div
            className="lis p-1 font-semibold text-gray-800 flex justify-between w-80 items-center cursor-pointer mb-1 rounded-sm hover:bg-gray-100 "
            key={index}
          >
            <p>{todos.todo}</p>
            <button
              className="tbl p-2 rounded-sm font-semibold bg-green-600 text-zinc-100"
              onClick={() => handleFinish(todos.todo)}
            >
              Selesai
            </button>
          </div>
        ))}
      <div className="selesai mt-10">
        <h1 className="judul font-semibold text-xl mb-3">Finished</h1>

        {selesai && (
          <div className="lis p-1 font-semibold text-gray-500 flex justify-between w-80 items-center cursor-pointer mb-1 rounded-sm hover:bg-gray-100">
            <p>Anda belum menyelesaikan apapun</p>
          </div>
        )}

        {finish &&
          finish.map((todos, index) => (
            <div
              className="lis p-1 font-semibold text-gray-800 flex justify-between w-80 items-center cursor-pointer mb-1 rounded-sm hover:bg-gray-100 "
              key={index}
            >
              <p>{todos.todo}</p>
              <button
                className="tbl p-2 rounded-sm font-semibold bg-red-600 text-zinc-100"
                onClick={() => handleHapus(todos.todo)}
              >
                Hapus
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
