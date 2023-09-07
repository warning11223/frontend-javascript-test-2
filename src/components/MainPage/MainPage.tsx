import React, { useEffect, useState } from "react";
import { Header } from "../Header";
import { Books } from "../Books";
import { useLazyGetBooksQuery } from "../../redux/services";
import { Loader } from "../Loader";
import { BookItem } from "../../redux/services/books";

import s from "./MainPage.module.scss";
import { toast } from "react-toastify";

export const MainPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [books, setBooks] = useState<BookItem[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [sortBy, setSortBy] = useState("relevance");
  const [category, setCategory] = useState("all");

  const [getBooks, { data, isLoading, status }] = useLazyGetBooksQuery();

  useEffect(() => {
    if (localStorage.getItem("searchValue")) {
      setSearchValue(localStorage.getItem("searchValue")!);
    }
  }, []);

  useEffect(() => {
    fetchBooks(searchValue, false);
  }, [searchValue]);

  useEffect(() => {
    fetchBooks(searchValue, true);
  }, [startIndex]);

  useEffect(() => {
    fetchBooks(searchValue, false);
  }, [sortBy]);

  useEffect(() => {
    fetchBooks(searchValue, false);
  }, [category]);

  const fetchBooks = (searchValue: string, saveBooks: boolean) => {
    if (searchValue) {
      getBooks({ name: searchValue, orderBy: sortBy, category, startIndex })
        .unwrap()
        .then((res) => {
          if (saveBooks) {
            setBooks((prevBooks) => [...prevBooks, ...res.items]);
          } else {
            setBooks(res.items);
          }
        })
        .catch((err) => toast.error(err.error));
    }
  };

  const onLoadBooks = () => {
    setStartIndex((startIndex) => startIndex + 30);
  };

  return (
    <>
      <Header
        setSearchValue={setSearchValue}
        sortBy={sortBy}
        setSortBy={setSortBy}
        category={category}
        setCategory={setCategory}
        setStartIndex={setStartIndex}
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
