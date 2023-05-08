import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { getCategories } from "../../actions/CategoriesAction";
import CategoriesPreview from "../CategoriesPreview/CategoriesPreview";
import Category from "../Category/Category";
import "./ShopPage.style.scss";

const ShopPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path="/:category" element={<Category />} />
    </Routes>
  );
};

export default ShopPage;
