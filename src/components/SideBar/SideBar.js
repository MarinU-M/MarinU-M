import "./side-bar.css";
import mail from "../../images/mail-5914.svg";
import linkedin from "../../images/linkedin-logo-circular-15919.svg";

function SideBar() {
  return (
    <nav className="side-bar">
      <ul className="side-bar__list">
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
        <li className="side-bar__list-item sidebar__list-item_linkedin">
          <a
            href="https://www.linkedin.com/in/marin-umegane-24b337140/"
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
