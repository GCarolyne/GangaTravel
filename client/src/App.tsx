import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <NavBar />
      </Routes>
    </>
  );
}

export default App;
