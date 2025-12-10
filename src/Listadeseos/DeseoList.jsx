//import { useState } from "react";
import PropTypes from "prop-types";
import DeseoItem from "./DeseoItem.jsx";
import "./App.css";

export default function DeseoList(ListaDeseos, onHechoChange) {
  return (
    <>
      <div>
        <ol>
          {ListaDeseos.map((deseo, index) => (
            <DeseoItem
              deseo={deseo}
              onHechoChange={() => onHechoChange(index)}
            />
          ))}
        </ol>
      </div>
    </>
  );
}

DeseoList.propTypes = {
  ListaDeseos: PropTypes.arrayOf(
    PropTypes.shape({
      titulo: PropTypes.string,
      hecho: PropTypes.bool,
      fecha: PropTypes.instanceOf(Date),
    })
  ).isRequired,
  onHechoChange: PropTypes.func.isRequired,
};
