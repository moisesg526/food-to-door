import order from "../images/order.png";
import delivery from "../images/delivery.png";
import delivered from "../images/no-time.png";
import "../css/process.css";

function Process() {
  return (
    <>
      <div className="process-pitch">
        <h2>Hungry? Easy as a click of a button.</h2>
      </div>
      <div className="process-animation">
        <div className="img-block">
          <img
            className="process-img"
            src={order}
            alt="https://storyset.com/online"
          />
          <h2>Search and click.</h2>
        </div>
        <div className="img-block">
          <img
            className="process-img"
            src={delivery}
            alt="https://storyset.com/delivery"
          />
          <h2>Our service is fast a reliable.</h2>
        </div>
        <div className="img-block">
          <img
            className="process-img"
            src={delivered}
            alt="https://storyset.com/no-time"
          />
          <h2>Get your order and enjoy!</h2>
        </div>
      </div>
    </>
  );
}

export default Process;
