import { Nav } from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Add from "./components/Add";
import { About } from "./components/About";
import { useState } from "react";
import Swal from "sweetalert2";

function App() {
  const [todo, setTodo] = useState([]);
  const [willtodo, setWillTodo] = useState("");
  const [finish, setFinish] = useState([]);
  const [pesan, setPesan] = useState(true);
  const [selesai, setSelesai] = useState(true);

  const handleChange = (e) => {
    setWillTodo(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    let tgl = new Date().getDate();
    let bln = new Date().getMonth();
    let thn = new Date().getFullYear();
    const todomasuk = { tanggal: `${tgl}/${bln + 1}/${thn}`, todo: willtodo };
    setTodo((prevtodo) => [...prevtodo, todomasuk]);
    setWillTodo("");
    setPesan(false);
    Swal.fire("Selamat!", "List To-do Sudah ditambahkan", "success");
  };

  const handleFinish = (nama) => {
    const belum = todo.filter((todos) => todos.todo !== nama);
    const sudah = todo.filter((todos) => todos.todo === nama);
    setTodo(belum);
    setFinish((prevFinish) => [...prevFinish, sudah[0]]);
    setSelesai(false);
    Swal.fire("Horee!!", "Tugas mu selesai", "success");
  };

  const handleHapus = (nama) => {
    Swal.fire({
      title: "Yakin ingin menghapus To-do?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yakin dan Hapus!",
    }).then((result) => {
      if (result.isConfirmed) {
        const nothapus = finish.filter((todos) => todos.todo !== nama);
        setFinish(nothapus);
        Swal.fire("Terhapus!", "To-do telah dihapus.", "success");
      }
    });
  };

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                todo={todo}
                finish={finish}
                handleFinish={handleFinish}
                handleHapus={handleHapus}
                pesan={pesan}
                selesai={selesai}
              />
            }
          />
          <Route
            path="/add"
            element={
              <Add
                willtodo={willtodo}
                handleAdd={handleAdd}
                handleChange={handleChange}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
