import CartItems from "../components/CartItems";
import CartSummary from "../components/CartSummary";
import { useSelector } from "react-redux";
import Header from "../components/Header";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemIndex = cartItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <>
      <Header />
      <main>
        <div className="cart-page">
          <div className="cart-items-container">
            {finalItems.map((item) => (
              <CartItems items={item} key={item.id} />
            ))}
          </div>
          <CartSummary />
        </div>
      </main>
    </>
  );
};
export default Cart;
