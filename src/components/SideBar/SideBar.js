import "./side-bar.css";
import projects from "../../images/laptop-and-coding-12521.svg";
import mail from "../../images/mail-5914.svg";
import linkedin from "../../images/linkedin-logo-circular-15919.svg";
import home from "../../images/home_icon_v2.svg";
import { Link, useLocation } from "react-router-dom";


function SideBar() {
  const location = useLocation();
  const isProjects = location.pathname === "/projects";

  return (
    <nav className="side-bar">
      <ul className="side-bar__list">
        <li className="side-bar__list-item side-bar__list-item_project">
          {isProjects ? (
            <Link to="/" className="side-bar__social-link">
              <img
                src={home}
                alt="Home icon"
                className="side-bar__social-icon"
              />
              Home
            </Link>
          ) : (
            <Link to="/projects" className="side-bar__social-link">
              <img
                src={projects}
                alt="Project icon"
                className="side-bar__social-icon"
              />
              All projects
            </Link>
          )}
        </li>
        <li className="side-bar__list-item">
          <a
            href="mailto:marin.umegane.m@gmail.com"
            className="side-bar__social-link"
          >
            <img
              src={mail}
              alt="Email icon"
              className="side-bar__social-icon"
            />
            Email
          </a>
        </li>
        <li className="side-bar__list-item side-bar__list-item_linkedin">
          <a
            href="https://www.linkedin.com/in/marin-umegane/"
            className="side-bar__social-link"
          >
            <img
              src={linkedin}
              alt="Linkedin icon"
              className="side-bar__social-icon"
            />
            LinkedIn
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
