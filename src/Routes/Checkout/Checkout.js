import { useSelector } from "react-redux";
import CheckoutItem from "../../Components/CheckoutItem/CheckoutItem";
import {
  cartItemsSelector,
  cartTotalSelector,
} from "../../Selectors/CartSelector";
import "./Checkout.style.scss";

const Checkout = () => {
  const cartItems = useSelector(cartItemsSelector);
  const cartTotal = useSelector(cartTotalSelector);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>

        <div className="header-block">
          <span>Description</span>
        </div>

        <div className="header-block">
          <span>Quantity</span>
        </div>

        <div className="header-block">
          <span>Price</span>
        </div>

        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}

      <span className="total">Total : ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
