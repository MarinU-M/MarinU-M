import "./project.css";
import madewithlove from "../../images/madewithlove.png";
import ProjectCard from "../ProjectCard/ProjectCard";

function Project({ onSelectedCard }) {
  const projectList = [
    {
      title: "MadewithLove",
      url: "https://github.com/MarinU-M/project-randompattern-frontend",
      img: madewithlove,
      tech: "React, CSS",
      for: "BootCamp final project (frontend)",
    },
    {
      title: "WTWR",
      url: "https://marinu-m.github.io/se_project_react/",
      img: madewithlove,
      tech: "React, CSS, Express, Node.js, MongoDB",
      for: "BootCamp fullstack project",
    },
    {
      title: "Around the US",
      url: "https://marinu-m.github.io/se_project_aroundtheus/",
      img: madewithlove,
      tech: "HTML/CSS, JavaScript, Webpack",
      for: "BootCamp frontend project",
    },
    {
      title: "Coffee Shop",
      url: "https://marinu-m.github.io/se_project_coffeeshop/",
      img: madewithlove,
      tech: "HTML/CSS",
      for: "BootCamp static website project",
    },
    {
      title: "Software Engineering Library",
      url: "https://marinu-m.github.io/se_project_library/",
      src: madewithlove,
      tech: "HTML/CSS",
      for: "BootCamp static website project",
    },
  ];

  return (
    <main className="main">
      <div className="main__content">
        <div className="content__project">
          <h2 className="project__heading">
            The projects I worked/have been working on:
          </h2>
          <ul className="project__list">
            {/* {projectList.map((item) => {
              <ProjectCard
                key={item._id}
                item={item}
                onSelectedCard={onSelectedCard}
              />;
            })} */}
            <li className="project__list-item">
              <a
                className="project__list-item_elem_link"
                href="https://github.com/MarinU-M/project-randompattern-frontend"
              >
                MadewithLove
              </a>
              <p className="project__list-item_elem_description">
                <span>Tools: React, CSS</span>
                <span>For: BootCamp final project (frontend)</span>
              </p>
            </li>
            <li className="project__list-item">
              <a
                className="project__list-item_elem_link"
                href="https://marinu-m.github.io/se_project_react/"
              >
                WTWR
              </a>
              <p className="project__list-item_elem_description">
                <span>Tools: JavaScript, React, Express, MongoDB</span>
                <span>For: BootCamp project</span>
              </p>
            </li>
            <li className="project__list-item">
              <a
                className="project__list-item_elem_link"
                href="https://marinu-m.github.io/se_project_aroundtheus/"
              >
                Around the US
              </a>
              <p className="project__list-item_elem_description">
                <span>Tools: HTML/CSS, JavaScript, Webpack</span>
                <span>For: BootCamp frontend project</span>
              </p>
            </li>
            <li className="project__list-item">
              <a
                className="project__list-item_elem_link"
                href="https://marinu-m.github.io/se_project_coffeeshop/"
              >
                Coffee Shop
              </a>
              <p className="project__list-item_elem_description">
                <span>Tools: HTML/CSS</span>
                <span>For: BootCamp static website project</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Project;
