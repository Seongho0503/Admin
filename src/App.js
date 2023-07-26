import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">other pages</div>
      </div>
    </div>
  );
}

export default App;
