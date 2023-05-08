import React from "react";
import DirectoryItem from "../Components/DirectoryItem";
import "./Directory.style.scss";
const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
