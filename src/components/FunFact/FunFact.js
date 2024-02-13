import "./fun-fact.css";
import dogmom from "../../images/dogmom.jpg";
import entertainment from "../../images/entertainment_set.png";
import japan from "../../images/Japan.png";
import usa from "../../images/United-States-of-America.png";
import arrow from "../../images/arrow02_increase.png";

function FunFact() {
  return (
    <div className="content__fun-fact">
      <h2 className="fun-fact__heading">Fun fact:</h2>
      <ul className="fun-fact__list">
        <li className="fun-fact__list-item">
          <div className="fun-fact__frame">
            <span className="fun-fact__tape"></span>
            <img
              className="fun-fact__photo"
              src={dogmom}
              alt="Author with her dog"
            />
          </div>
          Dog mom
        </li>
        <li className="fun-fact__list-item">
          <div className="fun-fact__frame">
            <span className="fun-fact__tape"></span>
            <img
              className="fun-fact__photo"
              src="https://images.unsplash.com/photo-1584992236310-6edddc08acff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="yarns"
            />
          </div>
          Knitter/crochetter
        </li>
        <li className="fun-fact__list-item">
          <img
            className="fun-fact__icon"
            src={entertainment}
            alt="Music CD, comic book, novel, and movie dvd"
          />
          Music & movie lover
        </li>
        <li className="fun-fact__list-item">
          <div className="fun-fact__icons">
            <img className="fun-fact__icon" src={japan} alt="Japan flag" />
            <img
              className="fun-fact__icon"
              src={arrow}
              alt="Arrow left to right"
            />
            <img className="fun-fact__icon" src={usa} alt="USA flag" />
          </div>
          Born & raised in Japan, now in the US
        </li>
      </ul>
    </div>
  );
}

export default FunFact;
