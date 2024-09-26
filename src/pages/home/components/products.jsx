import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardProducts from "../../../components/card-products";
import GetFeatured from "../../../hooks/featured";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

export default function Products() {
  const { data: products, isLoading } = GetFeatured();
  const product = useRef(null);
  useEffect(() => {
    const newProduct = product.current;

    if (!isLoading && products) {
      gsap.set(newProduct, { opacity: 0, y: 45 });
      gsap.to(newProduct, {
        y: 0,
        opacity: 1,
        duration: 0.3,
        scrollTrigger: {
          trigger: newProduct,
          start: "top 80%",
        },
      });
    }
  }, [isLoading, products]);
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="bg-white py-[4vw] w-full px-[8vw]" ref={product}>
      <h3 className="text-black font-[600] text-[32px] text-center capitalize max-sm:text-[24px]">
        Featured products
      </h3>
      <div className="grid grid-cols-4 gap-[25px] mt-[18px] max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {products.data.map((product) => {
          return (
            <CardProducts
              key={product.id}
              nameproduct={product.arabic}
              imgproduct={product.preview.media.url}
              specialprice={product.price.special_price}
              regularprice={product.price.regular_price}
              category={product.category?.category.arabic}
            />
          );
        })}
      </div>
    </div>
  );
}
