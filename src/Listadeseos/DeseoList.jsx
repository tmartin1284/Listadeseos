//import { useState } from "react";
import PropTypes from "prop-types";
import DeseoItem from "./DeseoItem.jsx";
import "../App.css";

export default function DeseoList({ Deseos, onHechoChange }) {
  return (
    <>
      <h1>lista deseos</h1>
      <ul>
        {console.log(
          "ListaDeseos en DeseoList:" + Deseos.length + typeof Deseos
        )}

        {Deseos.map(
          (
            deseo,
            index //cuidado que yo aqui tenía una llave, y petaba
            //si lo ponemos con llave, hay que poner return
          ) => (
            //console.log("Deseo en DeseoList:" + deseo.titulo),
            <DeseoItem
              Deseo={deseo} //mucho cuidado, que yo usaba la minuscula y no funcionaba
              key={index} //la key no se pasa al componente hijo, es para react internamente
              onHechoChange={(hecho) => onHechoChange(hecho, index)}
            />
          )
        )}
      </ul>
      <h3>fin</h3>
    </>
  );
}

DeseoList.propTypes = {
  Deseos: PropTypes.arrayOf(
    PropTypes.shape({
      titulo: PropTypes.string,
      hecho: PropTypes.bool,
      fecha: PropTypes.string,
    })
  ).isRequired,
  onHechoChange: PropTypes.func.isRequired,
};

DeseoList.defaultProps = {
  ListaDeseos: [],
};
