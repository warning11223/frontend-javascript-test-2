import React from "react";

import s from "./Book.module.scss";
import { Link } from "react-router-dom";
import { BookItem } from "../../../redux/services/books";
import { bookTitle } from "src/utils";

type Props = {
  book: BookItem;
};

export const Book: React.FC<Props> = ({ book }) => {
  const authors = book.volumeInfo.authors?.join(", ");

  return (
    <Link to={`/${book.id}`} className={s.book}>
      <img
        src={`${
          book.volumeInfo.imageLinks?.smallThumbnail ??
          "https://dummyimage.com/220x280"
        }`}
        alt="book"
        className={s.book__img}
      />
      <div className={s.book__wrapper}>
        {book?.volumeInfo?.categories?.[0] && (
          <p className={s.book__category}>
            {book?.volumeInfo?.categories?.[0]}
          </p>
        )}
        {bookTitle(book.volumeInfo?.title)}
        <p className={s.book__authors}>{authors}</p>
      </div>
    </Link>
  );
};
