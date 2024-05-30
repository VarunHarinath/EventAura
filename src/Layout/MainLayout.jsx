import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/NavBar/Footer";
import ScrollToTop from "../components/NavBar/utils/ScrollToTop ";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
