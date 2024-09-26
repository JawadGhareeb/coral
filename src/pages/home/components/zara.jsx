import { motion } from "framer-motion";

export default function Zara() {
  return (
    <div className="zara w-full h-[80vh] relative overflow-hidden">
      <motion.div
        className="absolute right-0 max-sm:hidden"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <img src="/assets/1024px-Zara_Logo 1.svg" alt="zara" />
      </motion.div>
      <motion.div
        className="absolute top-[35%] right-[25%] w-[420px] max-md:right-0 max-sm:w-[75%] max-xsm:w-full max-xsm:flex max-xsm:flex-col max-xsm:items-center max-xsm:px-[10px] max-xsm:text-center"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div>
          <img src="/assets/1024px-Zara_Logo 2.svg" alt="zara" />
        </div>
        <p className="font-[400] text-white mt-[30px]">
          Lustrous yet understated. The new evening wear collection exclusively
          offered at the reopened Giorgio Armani boutique in Los Angeles.
        </p>
        <button className="flex items-center bg-white w-fit px-[20px] py-[10px] mt-[30px]">
          <span className="text-black font-[400] capitalize">
            see collection
          </span>
        </button>
      </motion.div>
    </div>
  );
}
