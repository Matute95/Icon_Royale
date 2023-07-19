import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "./Vistas/Inicio";
import Seleccion from "./Vistas/Seleccion";
import Desicion from "./Vistas/Desicion";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio/>} />
      <Route path="/Seleccion" element={<Seleccion/>} />
      <Route path="/Desicion" element={<Desicion/>} />
    </Routes>
  );
};

export default App;
