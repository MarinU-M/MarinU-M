import "./project-modal.css";
import GeneralModal from "../GeneralModal/GeneralModal";

function ProjectModal({ selectedCard, onClose }) {
  return (
    <GeneralModal
      name="project-detail"
      onClose={onClose}
      title={selectedCard.title}
    >
      <a
        className="project-modal__link"
        href={selectedCard.url}
        target="_blank"
      >
        <img
          className="project-modal__screenshot"
          src={selectedCard.img}
          alt="Project screenshot"
        />
      </a>
      <p className="project-modal__description">
        <span>Tools: {selectedCard.tech}</span>
        <span>For: {selectedCard.for}</span>
      </p>
    </GeneralModal>
  );
}

export default ProjectModal;
