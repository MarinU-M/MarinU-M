import "./project-modal.css";
import GeneralModal from "../GeneralModal/GeneralModal";

function ProjectModal({ selectedCard, onClose }) {
  return (
    <GeneralModal name="project-detail" onClose={onClose} title="test">
      <img
        className="project__screenshot"
        src={selectedCard.img}
        alt="Project screenshot"
      />
      <h3 className="project__title">{selectedCard.title}</h3>
    </GeneralModal>
  );
}

export default ProjectModal;
