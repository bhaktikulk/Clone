import { GoHeart } from "react-icons/go";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Wishlist = () => {
  return (
    <>
      <Header />
      <div className="wishlist">
        Your <GoHeart /> wishlist is Empty. Add items to your wishlist from
        <Link to="/"> Here</Link>. <br />
        <img
          src={"../images/emptywish.png"}
          alt="Empty Wishlist image"
          id="wishImage"
        />
      </div>
    </>
  );
};
export default Wishlist;
