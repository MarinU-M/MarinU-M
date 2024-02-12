import "./App.css";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Project from "../Project/Project";
import Footer from "../Footer/Footer";
import { Routes, Route, useHistory } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
