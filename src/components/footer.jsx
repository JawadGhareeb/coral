import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { aboutUs, catalog, customer } from "../utils/arrays";

export default function Footer() {
  return (
    <div className="bg-white py-[4vw] w-full px-[8vw] flex items-start justify-between flex-wrap gap-[35px] max-sm:flex-col max-sm:justify-center max-sm:items-center">
      <div className="flex flex-col items-start max-sm:items-center max-sm:justify-center max-sm:text-center max-sm:w-full">
        <div>
          <img src="/assets/logo (1).svg" alt="" />
        </div>
        <p className="text-[16px] font-[400] max-w-[320px] text-[#888] my-[12px] capitalize">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <ul className="flex items-center gap-[8px]">
          <li className="text-blue text-[20px] w-[38px] h-[38px] flex items-center justify-center cursor-pointer rounded-full">
            <FaFacebook />
          </li>
          <li className="text-blue text-[20px] w-[38px] h-[38px] flex items-center justify-center cursor-pointer rounded-full">
            <FaTwitter />
          </li>
          <li className="text-blue text-[20px] w-[38px] h-[38px] flex items-center justify-center cursor-pointer rounded-full">
            <FaLinkedinIn />
          </li>
          <li className="text-blue text-[20px] w-[38px] h-[38px] flex items-center justify-center cursor-pointer rounded-full">
            <FaInstagram />
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-start max-sm:items-center max-sm:justify-center max-sm:text-center max-sm:w-full">
        <p className="text-[16px] font-[600] text-black uppercase mb-[12px]">
          CATALOG
        </p>
        <ul className="flex flex-col items-start gap-[8px] max-sm:items-center">
          {catalog.map((cat) => {
            return (
              <li
                className="capitalize relative text-[#888] text-[14px] font-[400]  cursor-pointer group"
                key={cat.id}
              >
                {cat.txt}
                <span className="absolute left-0 bottom-[1px] w-full h-[1px] bg-[#888] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col items-start max-sm:items-center max-sm:justify-center max-sm:text-center max-sm:w-full">
        <p className="text-[16px] font-[600] text-black uppercase mb-[12px]">
          ABOUT US
        </p>
        <ul className="flex flex-col items-start gap-[8px] max-sm:items-center">
          {aboutUs.map((cat) => {
            return (
              <li
                className="capitalize relative text-[#888] text-[14px] font-[400]  cursor-pointer group"
                key={cat.id}
              >
                {cat.txt}
                <span className="absolute left-0 bottom-[1px] w-full h-[1px] bg-[#888] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col items-start max-sm:items-center max-sm:justify-center max-sm:text-center max-sm:w-full">
        <p className="text-[16px] font-[600] text-black uppercase mb-[12px]">
          CUSTOMER SERVICES
        </p>
        <ul className="flex flex-col items-start gap-[8px] max-sm:items-center">
          {customer.map((cat) => {
            return (
              <li
                className="capitalize relative text-[#888] text-[14px] font-[400]  cursor-pointer group"
                key={cat.id}
              >
                {cat.txt}
                <span className="absolute left-0 bottom-[1px] w-full h-[1px] bg-[#888] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
