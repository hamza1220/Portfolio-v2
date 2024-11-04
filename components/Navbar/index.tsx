import React, { useState } from "react";
import Toolbar from "./Toolbar";
import SideDrawer from "./SideDrawer";
import Backdrop from "./Backdrop";

const Navbar = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((prevState) => !prevState);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  let backdrop = null;

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }
  return (
    <div className="h-full bg-brown-50">
      <Toolbar drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} click={backdropClickHandler} />
      {backdrop}
    </div>
  );
};

export default Navbar;
