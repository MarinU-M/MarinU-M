import "./App.css";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Project from "../Project/Project";
import Footer from "../Footer/Footer";
import ProjectModal from "../ProjectModal/ProjectModal";
import { Routes, Route, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";

function App() {
  const [activeModal, setActiveModal] = useState("");

  // open and close modal
  const handleOpenModal = () => {
    setActiveModal("detail");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };

  // close modal by pressing esc
  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  return (
    <div className="App">
      <SideBar />
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
      <Footer />
      {activeModal === "detail" && (
        <ProjectModal
          isOpen={activeModal === "detail"}
          onClose={handleCloseModal}
          // isLoading={isLoading}
        />
      )}
    </div>
  );
}

export default App;
