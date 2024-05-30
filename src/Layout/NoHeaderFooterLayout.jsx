import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/utils/Sidebar";

const NoHeaderFooterLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />;
    </>
  );
};

export default NoHeaderFooterLayout;
