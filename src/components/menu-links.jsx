import { Links } from "../utils/arrays";
import { motion } from "framer-motion";
export default function MenuLinks() {
  return (
    <ul className="w-full px-[8vw] py-[15px] bg-silver flex items-center justify-between flex-wrap max-sm:hidden">
      {Links.map((link, index) => (
        <motion.li
          className="menu-li relative text-[14px] font-[400] py-[4px] cursor-pointer group"
          key={link.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: index * 0.1,
          }}
        >
          {link.txt}
          <span className="absolute left-0 bottom-[2px] w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
        </motion.li>
      ))}
    </ul>
  );
}
