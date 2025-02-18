import { BsCartX } from "react-icons/bs";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const EmptyCart = () => {
  return (
    <>
      <Header />
      <div className="emptyCart">
        Your <BsCartX size={20} /> Cart is Empty. Add items to your Cart from
        <Link to="/"> Here</Link>. <br />
        <img
          src={"../images/empty-cart.png"}
          alt="Empty Cart image"
          id="cartImage"
        />
      </div>
    </>
  );
};
export default EmptyCart;
