"use client";
import { allListItems } from "@/store/navList";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import style from "~/navbar/list.module.scss";

export default function NavList() {
  const [isLearnNowShown, setIsLearnNowShown] = useState<boolean>(false);
  const [isFieldsShown, setIsFieldsShown] = useState<boolean>(false);

  const toggleLearnNowMenu = () => {
    setIsLearnNowShown((prev) => !prev);
    setIsFieldsShown(false); // hide the other dropdown
  };

  const toggleFieldsMenu = () => {
    setIsFieldsShown((prev) => !prev);
    setIsLearnNowShown(false); // hide the other dropdown
  };

  const listItems = allListItems.mainList.map((listItem) => {
    if (listItem.link === "/learn-now") {
      return (
        <li
          id={style["btn-list"]}
          key={listItem.id}
          onClick={toggleLearnNowMenu}
        >
          <a aria-disabled="true">
            {listItem.title}
            <FontAwesomeIcon icon={faAngleDown} id="down-arrow" />
          </a>
          {isLearnNowShown && (
            <ul id={style["list-of-btn"]}>
              {allListItems.learnNow.map((learnItem) => {
                return (
                  <li key={learnItem.id}>
                    <Link href={learnItem.link}>{learnItem.title}</Link>
                  </li>
                );
              })}
            </ul>
          )}
        </li>
      );
    } else if (listItem.link === "/fields") {
      return (
        <li id={style["btn-list"]} key={listItem.id} onClick={toggleFieldsMenu}>
          <a aria-disabled="true">
            {listItem.title}
            <FontAwesomeIcon icon={faAngleDown} id="down-arrow" />
          </a>
          {isFieldsShown && (
            <ul id={style["list-of-btn"]}>
              {allListItems.fields.map((fieldItem) => {
                return (
                  <li key={fieldItem.id}>
                    <Link href={fieldItem.link}>{fieldItem.title}</Link>
                  </li>
                );
              })}
            </ul>
          )}
        </li>
      );
    } else {
      return (
        <li key={listItem.id}>
          <Link href={listItem.link}>{listItem.title}</Link>
        </li>
      );
    }
  });

  return <ul id={style["nav-list"]}>{listItems}</ul>;
}
