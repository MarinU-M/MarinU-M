import "./general-modal.css";

function GeneralModal({ name, onClose, title }) {
  return (
    <div className={`modal modal_type_${name}`} onClick={onClose}>
      <div className="modal__content" onClick={(evt) => evt.stopPropagation()}>
        <button className="modal__close" type="button" onClick={onClose}>
          X
        </button>
        <h3 className="modal__title">{title}</h3>
        {children}
      </div>
    </div>
  );
}

export default GeneralModal;
