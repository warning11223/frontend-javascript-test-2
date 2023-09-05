import React from "react";
import { Header } from "../Header";
import { CurrentBook } from "./CurrentBook";
import { useParams } from "react-router-dom";
import { useGetCurrentBookQuery } from "src/redux/services/books";
import { Loader } from "../Loader";

export const CurrentBookPage = () => {
  const { id } = useParams();

  const { data: bookData, isLoading } = useGetCurrentBookQuery(id!);

  return (
    <>
      <Header />
      <CurrentBook book={bookData} />
      {isLoading && <Loader />}
    </>
  );
};
