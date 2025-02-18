import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
const CartItems = ({ items }) => {
  const dispatch = useDispatch();
  const handleRemoveBtn = () => {
    dispatch(cartActions.removeFromCart(items.id));
  };
  return (
    <div className="cart-item-container">
      <div className="item-left-part">
        <img
          src={items.image_product}
          alt="item-image"
          className="product-image"
        />
      </div>
      <div className="item-right-part">
        <div className="product-info">
          <div className="product-name">{items.product_name}</div>
          <div className="size">{items.size}</div>
          <div>
            <img
              src={items.rating.assured}
              alt="Flipkart assured logo"
              className="assured"
            />
          </div>
          <div className="price">
            <span className="original-price">
              ₹{items.price.original_price}
            </span>
            <span className="current-price">
              {" "}
              ₹{items.price.current_price}{" "}
            </span>
            <span className="discount">{items.price.discount}% Off</span>
          </div>
          <div className="remove" onClick={handleRemoveBtn}>
            Remove
          </div>
        </div>
        <div className="delivery-by">
          <span className="date">Delivery By {items.delivery_by.date} | </span>
          <span className="delivery-type">
            {items.delivery_by.delivery_type}
          </span>
        </div>
      </div>
    </div>
  );
};
export default CartItems;
