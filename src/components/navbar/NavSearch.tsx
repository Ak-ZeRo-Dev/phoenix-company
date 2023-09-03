"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import style from "~/navbar/search.module.scss";

export default function NavSearch() {
  const [value, setValue] = useState<string>("");

  const searchBar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const keyDownHandler = (event: {
      key: string;
      preventDefault: () => void;
    }) => {
      console.log("User pressed: ", event.key);

      if (event.key === "Enter") {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <form id={style["search-bar"]} onSubmit={searchBar} role="search">
      <label htmlFor="search">بحث...</label>
      <input
        id={style["search"]}
        type="search"
        placeholder="بحث..."
        required
        onChange={handleChange}
      />
      <button type="submit">بحث</button>
    </form>
  );
}
