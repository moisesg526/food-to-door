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
        <img
          className="process-img"
          src={order}
          alt="https://storyset.com/online"
        />
        <img
          className="process-img"
          src={delivery}
          alt="https://storyset.com/delivery"
        />
        <img
          className="process-img"
          src={delivered}
          alt="https://storyset.com/no-time"
        />
      </div>
    </>
  );
}

export default Process;
