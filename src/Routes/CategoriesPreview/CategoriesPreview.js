import { useSelector } from "react-redux";
import CategoryPreview from "../../Components/CategoryPreview/CategoryPreview";
import { categoryMapSelector } from "../../Selectors/CategoriesSelector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(categoryMapSelector);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
