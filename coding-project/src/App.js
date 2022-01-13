import "./App.scss";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import Login from "./components/Login";
import MainPage from "./components/MainPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/RegisterPage" element={<RegisterPage />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Dashboard" element={<MainPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
