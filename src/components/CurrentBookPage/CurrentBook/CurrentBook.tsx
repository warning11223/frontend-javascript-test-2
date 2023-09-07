import React from "react";

import s from "./CurrentBook.module.scss";
import { Link } from "react-router-dom";
import { CurrentBookType } from "../../../redux/services/books";

type Props = {
  book: CurrentBookType | undefined;
};

export const CurrentBook: React.FC<Props> = ({ book }) => {
  const categories = book?.volumeInfo.categories?.map((item, index) => {
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

  const authors = book?.volumeInfo.authors?.map((item, index) => {
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
            src={
              book?.volumeInfo.imageLinks?.thumbnail ??
              "https://dummyimage.com/320x380"
            }
            alt="bookPng"
            className={s.current__img}
          />
        </div>
        <div className={s.current__right}>
          <p className={s.current__categories}>{combinedCategories}</p>
          <p className={s.current__name}>{book?.volumeInfo?.title}</p>
          <div className={s.current__authors__wrapper}>{authors}</div>
          <div className={s.current__desc__wrapper}>
            <p className={s.current__desc}>
              {book?.volumeInfo?.description ?? "No description"}
            </p>
          </div>
          <div className={s.current__info}>
            {book?.saleInfo.listPrice?.amount && (
              <p>
                Price: {book?.saleInfo.listPrice?.amount}
                {book?.saleInfo.listPrice?.currencyCode}
              </p>
            )}
            {book?.volumeInfo?.pageCount && (
              <p>Pages: {book?.volumeInfo?.pageCount}</p>
            )}
          </div>
          {book?.volumeInfo?.dimensions?.height &&
            book?.volumeInfo?.dimensions?.width && (
              <div className={s.current__sizes}>
                <p>Height: {book?.volumeInfo?.dimensions?.height}</p>
                <p>Width: {book?.volumeInfo?.dimensions?.width}</p>
              </div>
            )}

          <p className={s.current__date}>
            Published date: {book?.volumeInfo?.publishedDate}
          </p>
          <a
            className={s.current__link}
            href={book?.volumeInfo?.previewLink}
            target={"_blank"}
          >
            Click to preview
          </a>
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
