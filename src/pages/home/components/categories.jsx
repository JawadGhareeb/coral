import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardCategories from "../../../components/card-categories";
import GetCategories from "../../../hooks/categories";
import gsap from "gsap";
import Loading from "../../../components/loading";
gsap.registerPlugin(ScrollTrigger);

export default function Categories() {
  const { data: categories, isLoading } = GetCategories();

  const category = useRef(null);
  useEffect(() => {
    const newCategory = category.current;

    if (!isLoading && categories) {
      // Set initial state for animation
      gsap.set(newCategory, { opacity: 0, y: 45 });

      // Animate the category div when data is available
      gsap.to(newCategory, {
        y: 0,
        opacity: 1,
        duration: 0.3,
        scrollTrigger: {
          trigger: newCategory,
          start: "top 80%",
        },
      });
    }
  }, [isLoading, categories]);
  if (isLoading) return <Loading />;

  return (
    <div className="bg-white py-[4vw] w-full px-[8vw]" ref={category}>
      <h3 className="text-black font-[600] text-[32px] max-sm:text-[24px]">
        Categories
      </h3>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex justify-between flex-wrap items-center mt-[18px] max-xsm:justify-center">
          {categories.data.map((category) => {
            return (
              <CardCategories
                key={category.id}
                src={category.img}
                alt={category.txt}
                namecategory={category.arabic}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
