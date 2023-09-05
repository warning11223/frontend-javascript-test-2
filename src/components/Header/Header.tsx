import React, { KeyboardEvent, useEffect, useState } from "react";

import s from "./Header.module.scss";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  setSearchValue?: (value: string) => void;
  sortBy?: string;
  setSortBy?: (value: string) => void;
  category?: string;
  setCategory?: (value: string) => void;
  setStartIndex?: (value: number) => void;
};

export const Header: React.FC<Props> = ({
  setSearchValue,
  sortBy,
  setSortBy,
  setCategory,
  category,
  setStartIndex,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (localStorage.getItem("searchValue")) {
      setInputValue(localStorage.getItem("searchValue")!);
    }
  }, []);

  const onSearchHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setStartIndex?.(0);
      setSearchValue?.(inputValue);
      localStorage.setItem("searchValue", inputValue);
      if (location.pathname !== "/") {
        setStartIndex?.(0);
        navigate("/");
      }
    }
  };

  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <div className={s.header__wrapper}>
          <h1 className={s.header__title}>Search for books</h1>
          <input
            type="text"
            className={s.header__input}
            placeholder={"Book title"}
            value={inputValue}
            onChange={(e) => setInputValue(e.currentTarget.value)}
            onKeyDown={onSearchHandler}
          />
          <div className={s.header__selects}>
            <div className={s.header__select}>
              <label className={s.header__label}>Categories</label>
              <select
                name="category"
                value={category}
                onChange={(e) => setCategory?.(e.currentTarget.value)}
              >
                <option value="all">all</option>
                <option value="art">art</option>
                <option value="biography">biography</option>
                <option value="computers">computers</option>
                <option value="history">history</option>
                <option value="medical">medical</option>
                <option value="poetry">poetry</option>
              </select>
            </div>
            <div className={s.header__select}>
              <label className={s.header__label}>Sorting by</label>
              <select
                name="sorting"
                value={sortBy}
                onChange={(e) => setSortBy?.(e.currentTarget.value)}
              >
                <option value="relevance">relevance</option>
                <option value="newest">newest</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
