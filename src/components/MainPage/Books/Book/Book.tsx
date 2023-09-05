import React from "react";

import s from "./Book.module.scss";
import bookPng from "../../../../img/book.jpg";
import { Link } from "react-router-dom";
import { BookItem } from "../../../../redux/services/books";

type Props = {
  book: BookItem;
};

export const Book: React.FC<Props> = ({ book }) => {
  const authors = book.volumeInfo.authors?.join(", ");
  /*const authors = book.volumeInfo.authors?.map((item, index) => {
    return (
      <p key={index} className={s.book__authors}>
        {item}
      </p>
    );
  });*/

  function bookTitle(title: string) {
    const maxLength = 50;

    if (title.length > maxLength) {
      const truncatedTitle = title.substring(0, maxLength) + "...";
      return <p className={s.book__name}>{truncatedTitle}</p>;
    } else {
      return <p className={s.book__name}>{title}</p>;
    }
  }

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
