import "./sidebar.css";
import mail from "../../images//mail-5914.svg";
import linkedin from "../../images/linkedin-logo-circular-15919.svg";

function SideBar() {
  return (
    <nav className="sidebar">
      <div className="sidebar__info">
        <h4 className="sidebar__social-heading">Reach me via:</h4>
        <ul className="sidebar__list">
          <li className="sidebar__list-item">
            <a
              href="mailto:marin.umegane.m@gmail.com"
              className="sidebar__social-link"
            >
              <img
                src={mail}
                alt="Email icon"
                className="sidebar__social-icon"
              />
            </a>
          </li>
          <li className="sidebar__list-item">
            <a
              href="https://www.linkedin.com/in/marin-umegane-24b337140/"
              className="sidebar__social-link"
            >
              <img
                src={linkedin}
                alt="Linkedin icon"
                className="sidebar__social-icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SideBar;
