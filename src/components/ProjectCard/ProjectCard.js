import "./project-card.css";

function ProjectCard({ item, onSelectedCard }) {
  console.log(item);
  return (
    <li
      className="project-card__list-item"
      onClick={() => onSelectedCard(item)}
    >
      <span className="project-card__tape"></span>
      <img
        className="project-card__screenshot"
        src={item.img}
        alt="Project screenshot"
      />
      <h3 className="project-card__title">{item.title}</h3>
    </li>
  );
}

export default ProjectCard;
