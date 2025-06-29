import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

const Hat = () => (
  <div className="">
    <h1>HAT PAGE</h1>
  </div>
);

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hats" element={<Hat />} />
      </Routes>
    </div>
  );
}

export default App;
