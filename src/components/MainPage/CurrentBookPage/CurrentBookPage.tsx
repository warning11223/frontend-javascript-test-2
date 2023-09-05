import React from "react";
import { Header } from "../Header";
import { CurrentBook } from "./CurrentBook";
import { useParams } from "react-router-dom";
import { useGetCurrentBookQuery } from "src/redux/services/books";

export const CurrentBookPage = () => {
  const { id } = useParams();

  const { data: bookData } = useGetCurrentBookQuery(id!);

  return (
    <>
      <Header />
      <CurrentBook book={bookData} />
    </>
  );
};
