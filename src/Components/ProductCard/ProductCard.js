// import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartItem } from "../../actions/CartActions";
import Button from "../Button/Button";
import "./ProductCard.style.scss";
import { cartItemsSelector } from "../../Selectors/CartSelector";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(cartItemsSelector);

  const addProductToCart = () => dispatch(addToCartItem(cartItems, product));

  // addItemToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
