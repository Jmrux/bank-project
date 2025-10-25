import Navbar from "../NavBar";
import { Outlet } from "react-router-dom";

const LayoutPrincipal = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default LayoutPrincipal;