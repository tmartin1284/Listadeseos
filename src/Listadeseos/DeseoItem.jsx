//import { useState } from "react";
import PropTypes from "prop-types";

import "../App.css";

export default function DeseoItem({ Deseo, onHechoChange }) {
  return (
    <li>
      <input
        type="checkbox"
        defaultChecked={Deseo.hecho}
        onChange={() => {
          onHechoChange(!Deseo.hecho);
        }}
      />
      <label>{Deseo.titulo}</label>
    </li>
  );
}

DeseoItem.propTypes = {
  Deseo: PropTypes.shape({
    titulo: PropTypes.string,
    hecho: PropTypes.bool,
    fecha: PropTypes.string,
  }).isRequired,
  onHechoChange: PropTypes.func.isRequired,
};
