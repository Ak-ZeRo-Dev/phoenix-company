"use client";
import { faDesktop, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import style from "~/navbar/dark-light.module.scss";

export default function DarkLight() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme: string | undefined =
    theme === "system" ? systemTheme : theme;
  const [showList, setShowList] = useState<boolean>(false);

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
    setShowList(false);
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(currentTheme));
  }, [currentTheme]);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");

    if (localTheme) {
      setTheme(JSON.parse(localTheme));
    } else {
      setTheme(`${currentTheme}`);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setTheme]);

  return (
    <button onClick={() => setShowList(!showList)} id={style["theme-btn"]}>
      {theme === "dark" ? (
        <FontAwesomeIcon
          icon={faMoon}
          className={theme === "dark" ? "text-sky-600" : ""}
        />
      ) : theme === "light" ? (
        <FontAwesomeIcon
          icon={faSun}
          className={theme === "light" ? "text-sky-600" : ""}
        />
      ) : (
        <FontAwesomeIcon icon={currentTheme === "dark" ? faMoon : faSun} />
      )}
      {showList && (
        <ul id={style["dark-light-list"]}>
          <li
            id={style["light-theme"]}
            className={theme === "light" ? "text-sky-600" : ""}
            onClick={() => toggleTheme("light")}
          >
            Light <FontAwesomeIcon icon={faSun} id={style["theme-icon"]} />
          </li>
          <li
            id={style["dark-theme"]}
            className={theme === "dark" ? "text-sky-600" : ""}
            onClick={() => toggleTheme("dark")}
          >
            Dark <FontAwesomeIcon icon={faMoon} id={style["theme-icon"]} />
          </li>
          <li
            id={style["system-theme"]}
            className={theme === "system" ? "text-sky-600" : ""}
            onClick={() => toggleTheme("system")}
          >
            System <FontAwesomeIcon icon={faDesktop} id={style["theme-icon"]} />
          </li>
        </ul>
      )}
    </button>
  );
}
