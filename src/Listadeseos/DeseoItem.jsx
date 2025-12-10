import { useState } from "react";
import PropTypes from "prop-types";

import "./App.css";

export default function DeseoItem(Deseo, onHechoChange) {
  const [hecho, setHecho] = useState(Deseo.hecho);
  return (
    <>
      <li>
        <input
          type="checkbox"
          checked={hecho}
          onChange={() => {
            setHecho(!hecho);
            onHechoChange();
          }}
        />
        <label>{Deseo.titulo}</label>
      </li>
    </>
  );
}

DeseoItem.propTypes = {
  Deseo: PropTypes.shape({
    titulo: PropTypes.string,
    hecho: PropTypes.bool,
    fecha: PropTypes.instanceOf(Date),
  }).isRequired,
  onHechoChange: PropTypes.func.isRequired,
};
