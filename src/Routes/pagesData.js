import ProductDetails from "../component/Products/ProductDetails/ProductDetails";
import ProductList from "../component/Products/ProductsList/ProductList";

const pagesData = [
  {
    path: "",
    elmement: <ProductList />,
    title: "Products",
  },
  {
    path: "products/:id",
    elmement: <ProductDetails />,
    title: "Product",
  },
];

export default pagesData;
