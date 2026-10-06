import "./project.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import projectList from "../../utils/constant";

function Project({ onSelectedCard }) {
  return (
    <main className="main">
      <div className="main__content">
        <div className="content__project">
          <h2 className="project__heading">
            Projects I've worked on:
          </h2>

          <ul className="project__list">
            {projectList.map((item) => {
              return (
                <ProjectCard
                  key={item.title}
                  item={item}
                  onSelectedCard={onSelectedCard}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Project;
