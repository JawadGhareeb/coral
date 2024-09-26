import CardDiscount from "../../../components/card-discount";
import { discounts } from "../../../utils/arrays";

export default function Discount() {
  return (
    <div className="bg-silver py-[4vw] w-full px-[8vw]">
      <h3 className="text-black font-[600] text-[32px] text-center capitalize max-sm:text-[24px]">
        Follow products and discounts on Instagram
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-[16px] mt-[18px]">
        {discounts.map((discount) => {
          return (
            <CardDiscount
              key={discount.id}
              src={discount.img}
              alt={discount.txt}
            />
          );
        })}
      </div>
    </div>
  );
}
