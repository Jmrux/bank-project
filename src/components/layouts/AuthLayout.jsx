import { Outlet } from "react-router-dom";

const LayoutAuth = () => {
  return (
    <main className="auth-container">
      <Outlet />
    </main>
  );
};

export default LayoutAuth;