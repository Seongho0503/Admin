import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Sidebar from "./components/sidebar/SideBar";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Sidebar />
        <Home />
        {/* <div className="others">other pages</div> */}
      </div>
    </div>
  );
}

export default App;
