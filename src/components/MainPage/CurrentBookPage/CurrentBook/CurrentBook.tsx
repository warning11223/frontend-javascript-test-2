import React from "react";

import s from "./CurrentBook.module.scss";
import bookPng from "../../../../img/book.jpg";
import { Link } from "react-router-dom";
import { CurrentBookType } from "../../../../redux/services/books";

type Props = {
  book: CurrentBookType | undefined;
};

export const CurrentBook: React.FC<Props> = ({ book }) => {
  const categories = book?.volumeInfo.categories.map((item, index) => {
    return (
      <p key={index} className={s.current__categories}>
        {item}
      </p>
    );
  });

  const categoryStrings = categories?.map(
    (category) => category.props.children,
  );

  const combinedCategories = categoryStrings?.join(" ");

  const authors = book?.volumeInfo.authors.map((item, index) => {
    return (
      <p key={index} className={s.current__authors}>
        {item}
      </p>
    );
  });

  return (
    <div className={s.current}>
      <div className={s.current__wrapper}>
        <div className={s.current__left}>
          <img
            src={book?.volumeInfo.imageLinks.thumbnail}
            alt="bookPng"
            className={s.current__img}
          />
        </div>
        <div className={s.current__right}>
          <p className={s.current__categories}>{combinedCategories}</p>

          <p className={s.current__name}>{book?.volumeInfo.title}</p>
          <div className={s.current__authors__wrapper}>{authors}</div>
          <div className={s.current__desc__wrapper}>
            <p className={s.current__desc}>{book?.volumeInfo.description}</p>
          </div>
        </div>
      </div>
      <div className={s.current__btn__wrapper}>
        <Link to={"/"} className={s.current__btn}>
          Back to main
        </Link>
      </div>
    </div>
  );
};
