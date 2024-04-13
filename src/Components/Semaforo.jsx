import React from "react";
import { useState, useEffect } from "react";
import "../Styles/Semaforo.css";

export default function Semaforo() {
  const [semaforo, CambioDeEstado] = useState(0);

  return (
    <div className="semaforo">
        <button className={semaforo === 0 ? "rojo activo" : "rojo"} onClick={() => CambioDeEstado(0)}></button>
        <button className={semaforo === 1 ? "amarillo activo" : "amarillo"} onClick={() => CambioDeEstado(1)}></button>
        <button className={semaforo === 2 ? "verde activo" : "verde"} onClick={() => CambioDeEstado(2)}></button>
    </div>
  );
}
