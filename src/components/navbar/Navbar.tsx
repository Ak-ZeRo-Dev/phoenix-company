"use client";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import NavList from "./NavList";
import NavSearch from "./NavSearch";
import DarkLight from "./DarkLight";
import NavSocial from "./NavSocial";

import style from "~/navbar/navbar.module.scss";
import ResponsiveList from "./ResponsiveList";
import ResponsiveSearch from "./ResponsiveSearch";

export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav id={style["main-nav"]}>
      <div id={style["nav-container"]} className="container mx-auto">
        <Logo />

        {windowWidth !== null && windowWidth >= 991 ? (
          <>
            <NavList />
            <NavSearch />
          </>
        ) : (
          <>
            <ResponsiveList />
            <ResponsiveSearch />
          </>
        )}

        <div id={style["items"]}>
          <DarkLight />
          <NavSocial />
        </div>
      </div>
    </nav>
  );
}
