export default function SecondFooter() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full px-[8vw] py-[8px] bg-blue flex flex-wrap justify-between gap-y-[20px] max-sm:items-center max-sm:flex-col max-sm:justify-center">
      <span className="block text-white font-[400]">© 2022 Coral , Inc.</span>
      <div>
        <img src="/assets/icons_payment 1.svg" alt="" />
      </div>
      <button
        className="flex items-center gap-[4px]"
        onClick={handleScrollToTop}
      >
        <span className="block text-white font-[400]">Scroll to top</span>
        <img src="/assets/icon.svg" alt="" />
      </button>
    </div>
  );
}
