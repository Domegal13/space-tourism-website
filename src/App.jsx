// import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home";
import Prueba from "./components/Prueba";
import NavBar from "./navbar/NavBar";
import NavBar2 from "./navbar/NavBar2";
import Router from "./router/Router";

function App() {
  return (
    <>
      <NavBar2 />
      <Router />
      {/* <Prueba /> */}
    </>
  );
}

export default App;
