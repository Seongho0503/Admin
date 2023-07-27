import "./App.css";
import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/SideBar";
import Home from "./pages/home";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="container">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analystics" element={<div>상세페이지</div>} />
        </Routes>

        {/* <div className="others">other pages</div> */}
      </div>
    </div>
  );
}

export default App;
