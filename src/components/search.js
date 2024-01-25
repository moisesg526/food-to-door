import "../css/search.css";
import React, { useState, useEffect } from "react";


function Search() {
  const apiKey = "ea4faf2967b34be5831926bc59db3207";
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.spoonacular.com/food/restaurants/search?apiKey=${apiKey}`)
    .then(res => res.json())
    .then(json => setData(json))
    .catch(error => console.log(error(error)));
  }, []);

  return <input className="search-bar" type="text" placeholder="Search" />;
}

export default Search;
