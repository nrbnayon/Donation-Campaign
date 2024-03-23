import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";

const Root = () => {
  return (
    <div>
      <div>
        <NavBar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
