import "./App.css";
import { HomeScreen, ListScreen } from "../src/screens";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/list" element={<ListScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
