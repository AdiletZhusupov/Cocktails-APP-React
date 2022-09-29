import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import DrinkPage from "./components/DrinkPage";
import Loader from "./components/Loader";
import MainPage from "./components/MainPage";
import "./styles.css";

export default function App() {
  const mainURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s";

  const [allDrinks, setAllDrinks] = useState([]);
  const [filteredDrinks, setFilteredDrinks] = useState([]);
  const [singleDrink, setSingleDrink] = useState([]);
  const [loading, setLoading] = useState(false);

  const calltoAPI = async (url) => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setAllDrinks(res.data.drinks);
      setFilteredDrinks(res.data.drinks);
    } catch (err) {
      console.error(err.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };
  useEffect(() => {
    calltoAPI(mainURL);
  }, []);

  const handleClick = async (id) => {
    setLoading(true);
    const drinkURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    try {
      const res = await axios.get(drinkURL);
      setSingleDrink(res.data.drinks[0]);
    } catch (err) {
      console.error(err.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  const handleBackClick = () => {
    setLoading(true);
    setFilteredDrinks(allDrinks);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            loading ? (
              <Loader />
            ) : (
              <MainPage
                filteredDrinks={filteredDrinks}
                handleClick={handleClick}
                setFilteredDrinks={setFilteredDrinks}
                allDrinks={allDrinks}
              />
            )
          }
        ></Route>
        <Route
          path="/drink"
          element={
            loading ? (
              <Loader />
            ) : (
              <DrinkPage
                singleDrink={singleDrink}
                handleBackClick={handleBackClick}
              />
            )
          }
        ></Route>
      </Routes>
    </div>
  );
}
