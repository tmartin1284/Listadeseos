import { useState } from "react";
import PropTypes from "prop-types";

export default function AddDeseo({ onNewDeseo }) {
  const [NuevoDeseo, setNuevoDeseo] = useState("");

  return (
    <div>
      <input
        type="text"
        id="input"
        onChange={(e) => {
          setNuevoDeseo(e.target.value);
        }}
      />
      <button
        id="button"
        onClick={() => {
          //miramos si hay un deseo
          if (!NuevoDeseo.trim() == "") {
            //podemos elegir si queremos devolver el deseo como string y que luego se construya el objeto, o cevolverlo como  como objeto
            // onNewDeseo({ titulo: NuevoDeseo, hecho: false, fecha: Date().now });
            onNewDeseo(NuevoDeseo);
            document.getElementsByTagName("input")[0].value = "";
            setNuevoDeseo("");
          }
        }}
      >
        Agregar Deseo
      </button>
    </div>
  );
}

AddDeseo.propTypes = {
  onNewDeseo: PropTypes.func.isRequired,
};
