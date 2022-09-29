import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

const DrinkPage = ({ singleDrink, handleBackClick }) => {
  return (
    <section className="single-drink">
      <img
        src={singleDrink.strDrinkThumb}
        className="drink-img"
        alt={singleDrink.strDrink}
      />
      <article className="drink-info">
        <h2 className="drink-name">{singleDrink.strDrink}</h2>
        <p className="drink-desc">{singleDrink.strInstructions}</p>
        <ul className="drink-ingredients">
          {singleDrink.strIngredient1 && (
            <li>
              <FontAwesomeIcon
                icon={faCheckSquare}
                className="drink-ingredients far"
              />
              {singleDrink.strIngredient1}
            </li>
          )}
          {singleDrink.strIngredient2 && (
            <li>
              <FontAwesomeIcon
                icon={faCheckSquare}
                className="drink-ingredients far"
              />
              {singleDrink.strIngredient2}
            </li>
          )}
          {singleDrink.strIngredient3 && (
            <li>
              <FontAwesomeIcon
                icon={faCheckSquare}
                className="drink-ingredients far"
              />
              {singleDrink.strIngredient3}
            </li>
          )}
          {singleDrink.strIngredient4 && (
            <li>
              <FontAwesomeIcon
                icon={faCheckSquare}
                className="drink-ingredients far"
              />
              {singleDrink.strIngredient4}
            </li>
          )}
        </ul>
        <Link to="/" className="btn" onClick={handleBackClick}>
          all cocktails
        </Link>
      </article>
    </section>
  );
};
export default DrinkPage;
