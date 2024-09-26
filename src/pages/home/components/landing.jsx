import { AnimatePresence, motion } from "framer-motion";
import ImgLanding from "./img-landing";
import { imgVariant, scaleVariant } from "../../../utils/variants";

export default function Landing() {
  return (
    <>
      <AnimatePresence>
        <div className="w-full px-[8vw] bg-silver py-[4vw] flex items-start gap-[100px] max-md:flex-col max-md:gap-[65px] max-md:items-center max-md:justify-center">
          <motion.div
            className="w-[50%] max-md:w-full max-md:text-center"
            variants={scaleVariant}
            initial={"hidden"}
            animate={"animate"}
          >
            <h3 className="font-[300] text-[74px] max-md:text-[50px] max-xsm:text-[36px]">
              Collections
            </h3>
            <p className="text-[26px] font-[400] capitalize my-[25px] max-md:text-[18px] max-md:my-[12px] max-xsm:text-[14px]">
              you can explore ans shop many differnt collection from various
              barands here.
            </p>
            <button className="flex items-center bg-blue w-fit px-[20px] py-[10px] max-md:mx-auto">
              <img
                className="max-md:w-[20px] "
                src="/assets/cart-1.svg"
                alt=""
              />
              <span className="text-white font-[400] capitalize max-md:text-[14px]">
                shop now
              </span>
            </button>
          </motion.div>
          <motion.div
            className="img-landing rounded-tl-[160px] rounded-br-[160px] w-[424px] h-[542px] relative max-sm:hidden"
            variants={imgVariant}
            initial={"hidden"}
            animate={"animate"}
          >
            <img
              className="w-full h-full rounded-tl-[160px] rounded-br-[160px] relative z-[1]"
              src="/assets/engin-akyurt-jaZoffxg1yc-unsplash 1.png"
              alt=""
            />
          </motion.div>
        </div>
      </AnimatePresence>
      <ImgLanding />
    </>
  );
}
