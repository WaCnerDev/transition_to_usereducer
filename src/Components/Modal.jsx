import { useState } from "react";

export default function Modal() {
 
  const [modalVisible, setModalVisible] = useState(false);

  
  const handleToggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <div className="ModalContainer">
      {modalVisible && (
        <div
          className="modalView"
          style={{
            backgroundColor: "#0f666e",
            width: "300px",
            margin: "auto",
            padding: "20px",
            marginTop: "50px",
          }}
        >
          <h2>Bienvenidos al curso de Multimedios</h2>
        </div>
      )}
      <button id="btn_cerrar_abrir" onClick={handleToggleModal}>
        {modalVisible ? "Cerrar" : "Abrir"}
      </button>
    </div>
  );
}
