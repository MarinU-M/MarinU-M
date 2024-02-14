import "./project-modal.css";
import GeneralModal from "../GeneralModal/GeneralModal";

function ProjectModal({ onClose }) {
  return (
    <GeneralModal
      name="project-detail"
      onClose={onClose}
      title="test"
    ></GeneralModal>
  );
}

export default ProjectModal;
