import s from "../components/Books/Book/Book.module.scss";
import React from "react";

export const bookTitle = (title: string) => {
  const maxLength = 50;

  if (title?.length > maxLength) {
    const truncatedTitle = title.substring(0, maxLength) + "...";
    return <p className={s.book__name}>{truncatedTitle}</p>;
  } else {
    return <p className={s.book__name}>{title}</p>;
  }
};
