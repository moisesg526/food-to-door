import "../css/search.css";
import { useState, useEffect } from "react";

let api = "https://www.themealdb.com/api/json/v1/1/search.php>s=";

function Search() {
const [recipe, setRecipe] = useState()


  return (
    <div className="search">
      <form className="search-form">
        <input
          id="search-bar"
          className="search-bar"
          type="text"
          placeholder="Pizza, Burger..."
        />
        <button>Search</button>
      </form>
    </div>
  );
}

export default Search;
