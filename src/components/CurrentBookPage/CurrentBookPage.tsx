import React from "react";
import { Header } from "../Header";
import { CurrentBook } from "./CurrentBook";
import { useParams } from "react-router-dom";
import { useGetCurrentBookQuery } from "src/redux/services/books";
import { Loader } from "../Loader";
import { toast } from "react-toastify";

export const CurrentBookPage = () => {
  const { id } = useParams();

  const { data: bookData, isLoading, error } = useGetCurrentBookQuery(id!);
  if (error) {
    toast.error("Failed to fetch");
  }
  return (
    <>
      <Header />
      <CurrentBook book={bookData} />
      {isLoading && <Loader />}
    </>
  );
};
