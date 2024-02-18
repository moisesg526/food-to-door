import Search from "./search";
import "../css/body.css";
import Process from "./process";

function Body() {
  return (
    <>
      <div className="body">
        <div className="body-text">
          <h1>
            Search. Click. Get it <span className="purple">Delivered</span> and
            Enjoy!
          </h1>
          <p>
            Missing ingredient? Just search for your favorite meals
            and get what you're missing delivered!
          </p>
          <Search />
        </div>
      </div>
      <Process />
    </>
  );
}

export default Body;
