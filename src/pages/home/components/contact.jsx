export default function Contact() {
  return (
    <div className="bg-silver py-[4vw] w-full px-[8vw]">
      <h3 className="text-black font-[600] text-[32px] text-center capitalize max-sm:text-[24px]">
        Or subscribe to the newsletter{" "}
      </h3>
      <form className="flex items-center justify-center mt-[18px] gap-[12px]">
        <input
          className="px-[8px] py-[6px] outline-none w-[45%] text-[14px] bg-silver border-b-[1px] border-black focus:placeholder:opacity-0 placeholder:capitalize placeholder:font-[400] placeholder:text-[16px] placeholder:text-[#888] placeholder:duration-300 max-sm:w-full"
          type="email"
          placeholder="Email address..."
        />
        <button className="flex items-center bg-silver w-fit px-[8px] py-[6px] border-b-[1px] border-black">
          <span className="text-black text-[16px] font-[400] uppercase ">
            submit
          </span>
        </button>
      </form>
    </div>
  );
}
