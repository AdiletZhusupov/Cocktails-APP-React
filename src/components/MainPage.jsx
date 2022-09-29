import { useState } from "react";
import { Link } from "react-router-dom";

const MainPage = ({
  filteredDrinks,
  handleClick,
  setFilteredDrinks,
  allDrinks
}) => {
  const [inputValue, setInputValue] = useState("");
  const handleInput = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    const newFilteredDrinks = allDrinks.filter((drink) => {
      return drink.strDrink.toLowerCase().includes(newValue.toLowerCase());
    });
    setFilteredDrinks(newFilteredDrinks);
  };

  return (
    <>
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <h2>cocktails API</h2>
        <input
          type="text"
          placeholder="search your favorite cocktail"
          name="drink"
          value={inputValue}
          onChange={(e) => handleInput(e)}
        />
      </form>
      <section className="section cocktails">
        {filteredDrinks.length === 0 ? (
          <h2 className="title">sorry, no drinks matched your search</h2>
        ) : (
          <div className="section-center">
            {filteredDrinks.map((drink) => {
              return (
                <Link
                  key={drink.idDrink}
                  to="/drink"
                  onClick={() => handleClick(drink.idDrink)}
                >
                  <article className="cocktail" data-id={drink.idDrink}>
                    <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                    <h3>{drink.strDrink}</h3>
                  </article>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
};
export default MainPage;
