import "./fun-fact.css";
import dogmom from "../../images/dogmom.jpg";

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
          </div>
          Knitter/crochetter
        </li>
        <li className="fun-fact__list-item">Casual gamer</li>
        <li className="fun-fact__list-item">Music & movie lover</li>
        <li className="fun-fact__list-item">
          Born & raised in Japan, now in the US
        </li>
      </ul>
    </div>
  );
}

export default FunFact;
