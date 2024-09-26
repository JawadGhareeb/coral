import Brand from "./components/brand";
import Categories from "./components/categories";
import Contact from "./components/contact";
import Discount from "./components/discount";
import Landing from "./components/landing";
import Products from "./components/products";
import Zara from "./components/zara";

export default function Home() {
  return (
    <>
      <Landing />
      <Categories />
      <Products />
      <Brand />
      <Zara />
      <Discount />
      <Contact />
    </>
  );
}
