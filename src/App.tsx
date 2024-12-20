import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchDoctor from "./components/SearchDoctor";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<SearchDoctor />} />
        <Route path="/doctor/:id" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
