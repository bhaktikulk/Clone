import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const CartSummary = () => {
  const cartItemIds = useSelector((state) => state.cart);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemIndex = cartItemIds.indexOf(item.id);
    return itemIndex >= 0;
  });

  let totalItems = cartItemIds.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  let delCharge = 0;

  let showItem = totalItems > 1 ? "items" : "item";

  finalItems.forEach((cartItem) => {
    totalMRP += cartItem.price.org_price;
    totalDiscount += cartItem.price.org_price - cartItem.price.curr_price;
    delCharge += cartItem.delivery_by.del;
  });
  function finalDelCharge() {
    if (delCharge == 0) {
      return `Free`;
    } else {
      return "+ ₹" + delCharge;
    }
  }

  let dCharge = finalDelCharge();
  let finalPayment = totalMRP - totalDiscount + delCharge;

  return (
    <div className="summary">
      <div className="price-name">Price Details</div>
      <hr id="dotted-out" color="#d2c6c6" />
      <div className="price-details">
        <div className="price-summary">
          <span>
            Price ({totalItems} {showItem})
          </span>
          <span>₹{totalMRP}</span>
        </div>
        <div className="discount-off">
          <span>Discount</span>
          <span className="delivery-type">- ₹{totalDiscount}</span>
        </div>
        <div className="del-charge">
          <span className="delname">Delivery Charges</span>
          <span className="delivery-type">{dCharge}</span>
        </div>
      </div>
      <hr id="solid" />
      <div className="total-amount">
        <span>Total Amount</span>
        <span className="total">₹{finalPayment}</span>
      </div>
      <hr id="dotted-out" color="#878787" />
      <div className="offer">
        You will Save ₹{totalDiscount} on this {showItem}.
      </div>
      <Link to="/placeorderPage" className="place_order">
        Place Order
      </Link>
    </div>
  );
};
export default CartSummary;
