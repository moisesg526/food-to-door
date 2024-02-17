import "../css/search.css";
// import { useState, useEffect } from "react";

// const url =
//   "https://api.spoonacular.com/food/restaurants/search?apiKey=ea4faf2967b34be5831926bc59db3207";

function Search() {
  // const [restaurants, setRestaurants] = useState(0);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(url);
  //     res.json().then((json) => {
  //       setRestaurants(json.name);
  //     });
  //   };
  //   fetchData();
  // }, []);

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
