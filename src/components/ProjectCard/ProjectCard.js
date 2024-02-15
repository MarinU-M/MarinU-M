import "./project-card.css";

function ProjectCard({ item, onSelectedCard }) {
  return (
    <li className="project__list-item" onClick={() => onSelectedCard(item)}>
      <span className="project__tape"></span>
      <img
        className="project__screenshot"
        src={item.img}
        alt="Project screenshot"
      />
      <h3 className="project__title">{item.title}</h3>
    </li>
  );
}

export default ProjectCard;
