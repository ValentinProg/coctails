import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCoctails from "./pages/SingleCoctails";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/singlecoctails" element={<SingleCoctails />} />
        <Route path="/errorpage" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
