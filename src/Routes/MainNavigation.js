import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../Assests/crown.svg";
import CartIcon from "../Components/CartIcon/CartIcon";
import CartDropdown from "../Components/CartDropdown/CartDropdown";
import { UserContext } from "../Context/UserContext";
import { signOutUser } from "../Utils/Firebase/FirebaseUtils";
import "./MainNavigation.style.scss";
import { useSelector } from "react-redux";
import { isCartOpenSelector } from "../Selectors/CartSelector";

const MainNavigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log(currentUser);
  const isCartOpen = useSelector(isCartOpenSelector);

  const userSignOutHandle = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={userSignOutHandle}>
              SIGN OUT
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              SIGN-IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default MainNavigation;
