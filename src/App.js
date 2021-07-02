import Home from "./pages";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <Router>
      <Sidebar />
      <Home />
    </Router>
  );
}

export default App;
