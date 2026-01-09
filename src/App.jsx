import { useState } from "react";
import AddDeseo from "./addDeseo/AddDeseo.jsx";
import DeseoList from "./Listadeseos/DeseoList.jsx";

import "./App.css";

const estadoInicial = [
  { titulo: "ir a a Luna", hecho: false, fecha: Date.now() },
  { titulo: "ir al quiropráctico", hecho: true, fecha: Date.now() },
  { titulo: "darle una ostia a izan", hecho: false, fecha: Date.now() },
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
  /* Podemos configurar esto de dos formas: 1) que el componente devuelva el deseo tal cual
  o 2) que devuelva la descripción del deseo, y aquí completamos el resto de contenido del deseo.
  
  de cualquiera de las dos formas, hay que tener en cuenta que añada el deso a partir de la lista de deseos anterior , 
  que está guardado en el estado, para no perder los deseos ya añadidos.
  u */

  const agregardeseo = (a) => {
    setDeseos((w) => [...w, { titulo: a, hecho: false, fecha: Date.now() }]);
    /* setDeseos(() => [
          ...Deseos,
          { titulo: a, hecho: false, fecha: Date.now() },
        ]);*/
  };

  return (
    <>
      <div>
        <h1>Mi lista de deseos 2025</h1>
        <AddDeseo onNewDeseo={agregardeseo} />
        <DeseoList ListaDeseos={Deseos} onHechoChange={onHechoChange} />
        <button
          id="Carlos"
          onClick={() => setDeseos(Deseos.filter((b) => !b.hecho))}
        >
          Limpiar deseos
        </button>
      </div>
    </>
  );
}
