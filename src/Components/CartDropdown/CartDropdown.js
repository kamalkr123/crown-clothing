import { useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartItemsSelector } from "../../Selectors/CartSelector";

import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

import "./CartDropdown.style.scss";

const CartDropdown = () => {
  const cartItems = useSelector(cartItemsSelector);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("./checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>Got to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
