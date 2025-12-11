import { useState } from "react";
import AddDeseo from "./addDeseo/AddDeseo.jsx";
import DeseoList from "./Listadeseos/DeseoList.jsx";

import "./App.css";

const estadoInicial = [
  { titulo: "ir a a Luna", hecho: false, fecha: Date().now },
  { titulo: "ir al quiropráctico", hecho: true, fecha: Date().now },
  { titulo: "darle una ostia a izan", hecho: false, fecha: Date().now },
];

/*titulo: "ir a a Luna";
hecho: false;
fecha: "2024-12-31";*/
export default function App() {
  const [Deseos, setDeseos] = useState(estadoInicial);

  function onHechoChange(hecho, index) {
    const antDeseos = [...Deseos];
    antDeseos[index].hecho = hecho;
    setDeseos(antDeseos);
  }

  const agregardeseo = (a) => {
    setDeseos((Deseos) => [
      ...Deseos,
      { titulo: a, hecho: false, fecha: Date().now },
    ]);
    console.log("Añadido deseo: " + a);
    console.log(Deseos);
  };

  return (
    <>
      <div>
        <h1>Mi lista de deseos 2025</h1>
        <AddDeseo onNewDeseo={agregardeseo} />
        <DeseoList Deseos={Deseos} onHechoChange={onHechoChange} />
      </div>
    </>
  );
}
