import { IoMenuOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { cartVariant, searchVariant, userVariant } from "../utils/variants";
export default function Header({ toggleMenu }) {
  return (
    <div className="header bg-silver w-full px-[8vw] py-[15px] flex justify-between items-center border-b-[1px] border-b-borderColor">
      <motion.div
        className="max-sm:hidden"
        variants={searchVariant}
        initial={"hidden"}
        animate={"animate"}
      >
        <img src="/assets/search.svg" alt="" />
      </motion.div>
      <div>
        <img src="/assets/logo (1).svg" alt="" />
      </div>
      <div className="flex items-center gap-[20px] max-sm:hidden">
        <motion.div
          className="flex items-center gap-[6px]"
          variants={userVariant}
          initial={"hidden"}
          animate={"animate"}
        >
          <img src="/assets/user.svg" alt="" />
          <span className="font-[400] text-[18px]">Account</span>
        </motion.div>
        <motion.div
          className="flex items-center gap-[6px]"
          variants={cartVariant}
          initial={"hidden"}
          animate={"animate"}
        >
          <img src="/assets/cart.svg" alt="" />
          <span className="font-[400] text-[18px]">Shoping</span>
        </motion.div>
      </div>
      <div
        className="hidden w-[28px] h-[28px] justify-center items-center cursor-pointer max-sm:flex"
        onClick={toggleMenu}
      >
        <IoMenuOutline className="text-[22px]" />
      </div>
    </div>
  );
}
