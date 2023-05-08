import { useDispatch, useSelector } from "react-redux";
import "./CheckoutItem.style.scss";
import {
  addToCartItem,
  removeFromCartItem,
  clearFromCartItem,
} from "../../actions/CartActions";
import { cartItemsSelector } from "../../Selectors/CartSelector";

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(cartItemsSelector);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => dispatch(removeFromCartItem(cartItems, cartItem))}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => dispatch(addToCartItem(cartItems, cartItem))}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(clearFromCartItem(cartItems, cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
