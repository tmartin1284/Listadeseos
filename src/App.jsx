import { useState } from "react";
import AddDeseo from "./addDeseo/AddDeseo.jsx";
import DeseoList from "./Listadeseos/DeseoList.jsx";

import "./App.css";

const estadoInicial = [
  { titulo: "ir a a Luna", hecho: false, fecha: new Date() },
  { titulo: "ir al quiropráctico", hecho: true, fecha: new Date() },
  { titulo: "darle una ostia a izan", hecho: false, fecha: new Date() },
];

/*titulo: "ir a a Luna";
hecho: false;
fecha: "2024-12-31";*/
export default function App() {
  const [Deseos, setDeseos] = useState(estadoInicial);

  function onHechoChange(index) {
    const nuevosDeseos = [...Deseos];
    nuevosDeseos[index].hecho = !nuevosDeseos[index].hecho;
    setDeseos(nuevosDeseos);
  }
  function onNewDeseoChange(nuevoDeseo) {
    setDeseos([
      ...Deseos,
      { titulo: nuevoDeseo, hecho: false, fecha: new Date() },
    ]);
  }

  return (
    <>
      <div>
        <h1>Mi lista de deseos 2015</h1>
        <AddDeseo onNewDeseo={onNewDeseoChange} />
        <DeseoList ListaDeseos={Deseos} onHechoChange={onHechoChange} />
      </div>
    </>
  );
}
