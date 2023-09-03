"use client";
import { faBars, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import NavList from "./NavList";

export default function ResponsiveList() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="flex justify-start flex-1 mr-2">
      {isClicked ? (
        <>
          <FontAwesomeIcon
            icon={faBarsStaggered}
            onClick={toggleMenu}
            className="text-2xl	"
          />{" "}
          <NavList />
        </>
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          onClick={toggleMenu}
          className="text-2xl"
        />
      )}
    </div>
  );
}
