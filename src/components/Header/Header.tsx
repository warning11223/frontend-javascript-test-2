import React, { KeyboardEvent, useEffect, useState } from "react";
import s from "./Header.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { HeaderSelects } from "./HeaderSelects/HeaderSelects";

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
    const searchValue = localStorage.getItem("searchValue");
    if (searchValue) {
      setInputValue(searchValue);
    }
  }, [setInputValue]);

  const handleSearch = () => {
    setStartIndex?.(0);
    setSearchValue?.(inputValue);
    localStorage.setItem("searchValue", inputValue);
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  const onSearchHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
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
          <HeaderSelects
            category={category}
            setCategory={setCategory}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        </div>
      </div>
    </header>
  );
};
