import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";

// pages
import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Project from "./pages/project/Project";

//components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
// import AreaRange from "./components/AreaRange";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar></Sidebar>
        <div className="container">
          <Navbar />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create" element={<Create />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/projects/:id" element={<Project />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
