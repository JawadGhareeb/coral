import React, { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const animateMouse = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", animateMouse);

    return () => {
      window.removeEventListener("mousemove", animateMouse);
    };
  }, []);

  const cursorVariants = {
    visible: { opacity: 1, transition: { duration: 0.03, ease: "linear" } },
    hover: {
      scale: 8,
      backgroundColor: "#cbcdfa80",
      transition: { duration: 0.05, ease: "linear" },
    },
  };

  return (
    <Fragment>
      <motion.div
        className="cursor duration-200 ease-linear max-md:hidden"
        variants={cursorVariants}
        animate={"visible"}
        style={{ x: mouse.x - 10, y: mouse.y - 10 }}
      ></motion.div>
    </Fragment>
  );
}
