export default function CardProducts({
  nameproduct,
  imgproduct,
  regularprice,
  specialprice,
  category,
}) {
  return (
    <div className="w-full bg-silver p-[12px]">
      <div className="w-full ">
        <img className="w-full" src={imgproduct} alt="" />
      </div>
      <span className="block font-[600] text-[16px] text-black mt-[12px]">
        {nameproduct}
      </span>
      <div className="flex items-center justify-between">
        {category && (
          <span className="font-[400] text-[16px] text-[#888]">{category}</span>
        )}
        <div className="flex ml-auto items-center gap-[8px]">
          <span className="font-[400] text-[16px] text-[#888]">
            {specialprice}
          </span>
          <span className="font-[600] text-[16px] text-orange line-through">
            {regularprice}
          </span>
        </div>
      </div>
    </div>
  );
}
