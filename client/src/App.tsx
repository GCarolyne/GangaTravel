import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./pages/About";
import { Destinations } from "./pages/Destinations";
import { FormPage } from "./pages/FormPage";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Destinations" element={<Destinations />}></Route>
        <Route path="/Outreach" element={<FormPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
