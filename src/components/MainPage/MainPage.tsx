import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { Books } from "./Books";
import { useLazyGetBooksQuery } from "../../redux/services";
import { Loader } from "../Loader";
import { BookItem } from "../../redux/services/books";

import s from "./MainPage.module.scss";

export const MainPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [books, setBooks] = useState<BookItem[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [sortBy, setSortBy] = useState("relevance");
  const [category, setCategory] = useState("all");

  const [getBooks, { data, isLoading, status }] = useLazyGetBooksQuery();

  useEffect(() => {
    if (searchValue) {
      getBooks({ name: searchValue })
        .unwrap()
        .then((res) => {
          setBooks(res.items);
        });
    }
  }, [searchValue]);

  useEffect(() => {
    if (searchValue) {
      getBooks({ name: searchValue, startIndex })
        .unwrap()
        .then((res) => {
          setBooks((prevBooks) => [...prevBooks, ...res.items]);
        });
    }
  }, [startIndex]);

  useEffect(() => {
    if (searchValue) {
      getBooks({ name: searchValue, orderBy: sortBy })
        .unwrap()
        .then((res) => {
          setBooks(res.items);
        });
    }
  }, [sortBy]);

  useEffect(() => {
    if (searchValue) {
      getBooks({ name: searchValue, category })
        .unwrap()
        .then((res) => {
          setBooks(res.items);
        });
    }
  }, [category]);

  const onLoadBooks = () => {
    setStartIndex((startIndex) => startIndex + books?.length);
  };

  return (
    <>
      <Header
        setSearchValue={setSearchValue}
        sortBy={sortBy}
        setSortBy={setSortBy}
        category={category}
        setCategory={setCategory}
      />
      {books?.length > 0 ? (
        <Books
          items={books}
          foundResults={data?.totalItems}
          onLoadBooks={onLoadBooks}
        />
      ) : (
        <p className={s.desc}>Enter the title of the book into the search ✏️</p>
      )}
      {status === "pending" && <Loader />}
      {isLoading && <Loader />}
    </>
  );
};
