import Search from "./search";
import "../css/body.css";

function Body() {
  return (
    <div className="body">
      <div className="body-text">
        <h1>
          Search. Click. Get it <span className="purple">Delivered</span> and
          Enjoy!
        </h1>
        <p>
          Hungry and tired? Just search for your favorite restaurants or meals
          and get it delivered!
        </p>
        <Search />
      </div>
    </div>
  );
}

export default Body;
