import { Outlet } from "react-router-dom";
import Header from "../components/header";
import MenuLinks from "../components/menu-links";
import Footer from "../components/footer";
import SecondFooter from "../components/second-footer";
import { useEffect, useState } from "react";
import Menu from "../components/menu";
import Cursor from "../components/cursor";

export default function Index() {
  const [menu, setMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  const toggleMenu = () => setMenu(!menu);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Add event listener on component mount
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Header toggleMenu={toggleMenu} />
      <Cursor />
      {isMobile ? <Menu menu={menu} handelMenu={toggleMenu} /> : <MenuLinks />}
      <Outlet />
      <Footer />
      <SecondFooter />
    </>
  );
}
