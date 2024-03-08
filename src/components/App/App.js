import "./App.css";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Project from "../Project/Project";
import Footer from "../Footer/Footer";
import ProjectModal from "../ProjectModal/ProjectModal";
import { Routes, Route, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import CurrentPageContext from "../../contexts/CurrentPageContext";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentPage, setCurrentPage] = useState("profile");

  // open and close modal
  // handle modal of selected card
  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
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
      <CurrentPageContext.Provider value={currentPage}>
        <SideBar />
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route
            path="/projects"
            element={<Project onSelectedCard={handleSelectedCard} />}
          />
        </Routes>
        <Footer />
        {activeModal === "preview" && (
          <ProjectModal
            isOpen={activeModal === "preview"}
            onClose={handleCloseModal}
            selectedCard={selectedCard}
          />
        )}
      </CurrentPageContext.Provider>
    </div>
  );
}

export default App;
