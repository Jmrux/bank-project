import Navbar from "../NavBar";
import { Navigate, Outlet } from "react-router-dom";

const LayoutPrincipal = () => {
  if (!localStorage.getItem("userData")) {
    return <Navigate to="/" replace />;
  }
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