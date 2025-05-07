import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { About } from "./pages/About";
import { Destinations } from "./pages/Destinations";
import { Outreach } from "./pages/Outreach";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Destinations" element={<Destinations />}></Route>
        <Route path="/Outreach" element={<Outreach />}></Route>
      </Routes>
    </>
  );
}

export default App;
