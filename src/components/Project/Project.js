import "./project.css";
import madewithlove from "../../images/madewithlove.png";
import GeneralModal from "../GeneralModal/GeneralModal";

function Project() {
  return (
    <main className="main">
      <GeneralModal />
      <div className="main__content">
        <div className="content__project">
          <h2 className="project__heading">
            The projects I worked/have been working on:
          </h2>
          <ul className="project__list">
            <li className="project__list-item">
              <span className="project__tape"></span>
              <img
                className="project__screenshot"
                src={madewithlove}
                alt="Project screenshot"
              />
              {/* <a
                className="project__list-item_elem_link"
                href="https://github.com/MarinU-M/project-randompattern-frontend"
              > */}
              <h3 className="project__title">MadeWithLove</h3>
              {/* </a> */}
              <p className="project__list-item_elem_description">
                <span>Tools: JavaScript, React</span>
                <span>For: BootCamp final project</span>
              </p>
            </li>
            <li className="project__list-item">
              <a
                className="project__list-item_elem_link"
                href="https://marinu-m.github.io/se_project_react/"
              >
                WTWR at Tripleten
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
                Around the US at Tripleten
              </a>
              <p className="project__list-item_elem_description">
                <span>Tool: HTML/CSS, JavaScript</span>
                <span>For: BootCamp project</span>
              </p>
            </li>
            <li className="project__list-item">
              <a
                className="project__list-item_elem_link"
                href="https://marinu-m.github.io/se_project_coffeeshop/"
              >
                Coffee Shop at Tripleten
              </a>
              <p className="project__list-item_elem_description">
                <span>Tool: HTML/CSS</span>
                <span>For: BootCamp project</span>
              </p>
            </li>
            <li className="project__list-item">
              <a
                className="project__list-item_elem_link"
                href="https://marinu-m.github.io/se_project_library/"
              >
                Software Engineering Library at Tripleten
              </a>
              <p className="project__list-item_elem_description">
                <span>Tool: HTML/CSS</span>
                <span>For: BootCamp project</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Project;
