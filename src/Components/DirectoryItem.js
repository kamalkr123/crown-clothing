import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { categoryMapSelector } from "../Selectors/CategoriesSelector";
import "./DirectoryItem.scss";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, url } = category;
  const navigate = useNavigate();
  // const categoriesMap = useSelector(categoryMapSelector);

  const goToShopPage = () => {
    navigate(`/shop/${url}`);
  };
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ background: `url(${imageUrl})` }}
      ></div>
      <div className="body" onClick={goToShopPage}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
