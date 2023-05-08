import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartDropdown } from "../../actions/CartActions";
import { ReactComponent as ShoppingIcon } from "../../Assests/shopping-bag.svg";
import { cartItemsCountSelector } from "../../Selectors/CartSelector";
import { CART_ACTION_TYPES } from "../../types/CartTypes";
import "./CartIcon.style.scss";

const CartIcon = () => {
  const cartCount = useSelector(cartItemsCountSelector);
  const dispatch = useDispatch();
  const toggleCartHandle = () => {
    dispatch(toggleCartDropdown());
  };
  return (
    <div className="cart-icon-container" onClick={toggleCartHandle}>
      <ShoppingIcon className="shopping-bag"></ShoppingIcon>
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
