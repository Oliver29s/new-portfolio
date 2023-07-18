import "./app.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/portfolio" element={<Home />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
