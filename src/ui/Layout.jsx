import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useEffect } from "react";

function Layout() {
  useEffect(() => {
    try {
      fetch("http://localhost:5000", {
        credentials: "include",
        method: "Get",
        headers: "applocation/json",
      }).then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
