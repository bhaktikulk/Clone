import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart);
  const elementFound = cartItems.indexOf(item.id) >= 0;

  const handleAddToCart = () => {
    dispatch(cartActions.addToCart(item.id));
  };
  const handleRemoveBtn = () => {
    dispatch(cartActions.removeFromCart(item.id));
  };
  return (
    <div className="item-container">
      <div>
        <img
          className="image-product"
          src={item.image_product}
          alt="item image"
        />
      </div>
      <div className="specific">
        <div className="product-name">{item.product_name}</div>
        <div className="rating">
          <div className="rate">
            <span className="rating-count">
              {item.rating.rating_count}{" "}
              <img id="rating-star" src={"images/star.png"} alt="Star" />{" "}
            </span>
          </div>
          <span className="rating-numbers">{item.rating.rating_numbers}</span>
          <img
            className="assured"
            src={item.rating.assured}
            alt="Flipkart assured logo"
          />
        </div>
        <div className="price">
          <span id="current-price">₹{item.price.current_price}</span>{" "}
          <span id="original-price">₹{item.price.original_price}</span>{" "}
          <span id="discount">{item.price.discount}% Off</span>
        </div>
        <div className="delivery-charge">{item.delivery_charge}</div>
        <div className="offers">{item.offers}</div>
        {elementFound ? (
          <button
            type="button"
            className="btn btn-add-cart btn-danger"
            onClick={handleRemoveBtn}
          >
            <MdOutlineRemoveShoppingCart />
            Remove
          </button>
        ) : (
          <button
            type="button"
            className="btn-add-cart"
            onClick={handleAddToCart}
          >
            <img src={"./images/cart.png"} alt="cart" /> Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};
export default HomeItem;
