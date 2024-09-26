export default function CardCategories({ src, alt, namecategory }) {
  return (
    <div className="text-center flex flex-col p-[10px]">
      <div className="w-[220px]">
        <img src={src} alt={alt} />
      </div>
      <p className="text-black font-[600] text-[16px]">{namecategory}</p>
    </div>
  );
}
