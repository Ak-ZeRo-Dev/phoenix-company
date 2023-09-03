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
    setIsFieldsShown(false);
  };

  const toggleFieldsMenu = () => {
    setIsFieldsShown((prev) => !prev);
    setIsLearnNowShown(false);
  };
  const toggleMenu = (e: any) => {
    e.target.innerText === "مجالات العمل"
      ? toggleFieldsMenu()
      : toggleLearnNowMenu();
  };
  const listItems = allListItems.mainList.map((listItem) => {
    if (listItem.link === "/learn-now" || listItem.link === "/fields") {
      return (
        <li
          id={style["btn-list"]}
          key={listItem.id}
          onClick={(e: any) => toggleMenu(e)}
          className={`${
            listItem.link === "/learn-now" && isLearnNowShown
              ? style["selected"]
              : listItem.link === "/fields" && isFieldsShown
              ? style["selected"]
              : ""
          }`}
        >
          <a aria-disabled="true">
            {listItem.title}
            <FontAwesomeIcon icon={faAngleDown} id={style["down-arrow"]} />
          </a>
          {listItem.link === "/learn-now"
            ? isLearnNowShown && (
                <ul id={style["list-of-btn"]}>
                  {allListItems.learnNow.map((learnItem) => {
                    return (
                      <li key={learnItem.id}>
                        <Link href={`${listItem.link}${learnItem.link}`}>
                          {learnItem.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )
            : listItem.link === "/fields"
            ? isFieldsShown && (
                <ul id={style["list-of-btn"]}>
                  {allListItems.fields.map((fieldItem) => {
                    return (
                      <li key={fieldItem.id}>
                        <Link href={`${listItem.link}${fieldItem.link}`}>
                          {fieldItem.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )
            : null}
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
