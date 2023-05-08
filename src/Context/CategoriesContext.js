// import { createContext, useState, useEffect } from "react";
// import { getCategoriesAndDocument } from "../Utils/Firebase/FirebaseUtils";
// export const CategoriesContext = createContext({
//   categoriesMap: {},
// });

// export const CategoriesProvider = ({ children }) => {
//   const [categoriesMap, setCategoriesMap] = useState({});
//   const value = { categoriesMap };

//   useEffect(() => {
//     const getCategoryMap = async () => {
//       const categoryMap = await getCategoriesAndDocument();
//       console.log(categoryMap);
//       setCategoriesMap(categoryMap);
//     };

//     getCategoryMap();
//   }, []);

//   return (
//     <CategoriesContext.Provider value={value}>
//       {children}
//     </CategoriesContext.Provider>
//   );
// };
