import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div >
        {children}
      </div>
    </div>
  );
}

export default Layout;