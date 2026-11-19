
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../component/navbar";
import Footer from "../component/Footer";

const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">

      {location.pathname === "/" && <Navbar />}

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
};

export default MainLayout;
