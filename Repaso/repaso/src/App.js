import React, { useRef } from "react";
// import ScrollPosition from "./Components/Scroll/ScrollPosition";
// import Calculator from "./Components/Calculator/Calculator";
// import CountTime from "./Components/CountTime/CountTime";
// import ShopList from "./Components/ListaCompras/ShopList";
// import SearchMovies from "./Components/SearchMovie/SearchMovies";
// import ClickCount from "./Components/ClickCount/ClickCount";
import TablaPuntos from "./Components/TablaPuntos/tablaPuntos";
import PartidoPingPong from "./Components/partidoPingPong/PartidoPingPong";
const App = () => {
  const maxScore = useRef(0);
  const maxPuntos = useRef(0);
  return (
    <div className="App">
      {/* <ScrollPosition />
      <hr></hr>
      <Calculator />
      <hr></hr>
      <CountTime />
      <hr />
      <ShopList />
      <hr />
      <SearchMovies />
      <hr />
      <ClickCount /> 
      <TablaPuntos maxScore={maxScore} />
    */}
      <PartidoPingPong maxPuntos={{ maxPuntos }} />
    </div>
  );
};

export default App;
