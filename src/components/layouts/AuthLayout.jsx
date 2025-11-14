import { Navigate, Outlet } from "react-router-dom";

const LayoutAuth = () => {
  if (localStorage.getItem("userData")) {
    return <Navigate to="/dashboard" replace />;
  }
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default LayoutAuth;