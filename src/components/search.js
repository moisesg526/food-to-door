import "../css/search.css";
import { useState } from "react";

function Search() {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data.meals && data.meals.length > 0) {
        setMeal(data.meals[0]);
      } else {
        setMeal(null);
      }
    } catch (error) {
      console.error("There was a problem fetching the meal:", error);
    }
    setLoading(false);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div className="search-bar">
        <input type="text" value={searchTerm} onChange={handleInputChange} />
        <button onClick={handleSearch}>
          <i className="fa-solid fa-magnifying-glass magnifier"></i>
        </button>
      </div>
      <div className="search-container">
        {loading ? (
          <p>Loading...</p>
        ) : meal ? (
          <div className="meal-container">
            <h2>{meal.strMeal}</h2>
            <img className="meal-img" src={meal.strMealThumb} alt={meal.strMeal} />
            <h3>Ingredients:</h3>
            <ul className="ingredient-list">
              {Object.entries(meal)
                .filter(
                  ([key, value]) => key.startsWith("strIngredient") && value
                )
                .map(([key, value]) => (
                  <li key={key}>{value}</li>
                ))}
            </ul>
          </div>
        ) : (
          <p>No meal found.</p>
        )}
      </div>
    </div>
  );
}
export default Search;
