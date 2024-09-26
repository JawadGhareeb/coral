import { motion, AnimatePresence } from "framer-motion";
import { IoIosClose } from "react-icons/io";
import { Links } from "../utils/arrays";
import { menuVariant, popVariant } from "../utils/variants";

export default function Menu({ menu, handelMenu }) {
  return (
    <>
      <AnimatePresence>
        {menu && (
          <motion.div
            className="drop" // Lower z-index for the background
            variants={popVariant}
            initial="hidden"
            animate={menu ? "animate" : "hidden"}
            exit="exit"
          ></motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {menu && (
          <motion.div
            className="w-[300px] h-screen flex flex-col gap-[8px] bg-white  fixed top-0 right-0 shadow-lg z-[2]"
            variants={menuVariant}
            initial="hidden"
            animate={"visible"}
            exit="exit"
          >
            <div className="flex items-center justify-between border-b-[1px] border-borderColor p-[10px]">
              <div>
                <img src="/assets/logo (1).svg" alt="" />
              </div>
              <button
                className="flex items-center justify-center w-[32px] h-[32px] bg-silver text-[20px] rounded-full"
                onClick={handelMenu}
              >
                <IoIosClose />
              </button>
            </div>
            <ul className="flex flex-col gap-[12px] items-start p-[10px]">
              {Links.map((link) => (
                <li
                  className="text-[16px] font-[400] px-[10px] py-[4px] cursor-pointer"
                  key={link.id}
                >
                  {link.txt}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
