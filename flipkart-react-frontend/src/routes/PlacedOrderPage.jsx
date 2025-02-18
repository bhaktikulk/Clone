import { Link } from "react-router-dom";
import Header from "../components/Header";

const PlacedOrderPage = () => {
  return (
    <>
      <Header />
      <div className="placedOrder">
        <h3 className="notPlaced">Order Not Placed!</h3>
        Sorry! We can't Proceed Your request at this time Kindly
        <Link to="/login-page"> Login </Link> to place order.
        <br />
        <img
          src={"../images/sademo.png"}
          alt="Order error image"
          id="orderImage"
        />
      </div>
    </>
  );
};
export default PlacedOrderPage;
