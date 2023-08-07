import {  Outlet } from "react-router-dom";

import NavMenu from "./NavMenu";
import Footer from "../footers/footer";

// import { AuthorizeUser, ProtectRoute } from "../middleware/auth";

export default function RootLayout() {
  return (
    <>
      <div className="main-header">
      <NavMenu />
      
      </div>

      <div className="content-container">
        
        <Outlet />
      </div>

      <footer>
        <Footer/>
      </footer>
    </>
  );
}
