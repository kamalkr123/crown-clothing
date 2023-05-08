import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/HomePage";
import MainNavigation from "./Routes/MainNavigation";
import ShopPage from "./Routes/Shop/ShopPage";
import Authentication from "./Routes/Authentication/AuthComponent";
import Checkout from "./Routes/Checkout/Checkout";
// import ProtectedRoute from "./Routes/ProtectedRoute/ProtectedRoute";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkUserSession } from "./actions/UserActions";
import { isLoading } from "./Selectors/UserSelector";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return loading ? (
    <>Loading...</>
  ) : (
    <Routes>
      <Route path="/" element={<MainNavigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<ShopPage />} />
        <Route path="auth" element={<Authentication />} />
        {/* <Route element={<ProtectedRoute />}> */}
        <Route path="checkout" element={<Checkout />} />
        {/* </Route> */}
      </Route>
    </Routes>
  );
}
export default App;
