import React from "react";

import s from "./Books.module.scss";
import { Book } from "./Book";
import { BookItem } from "../../redux/services/books";

type Props = {
  items: BookItem[];
  foundResults: number | undefined;
  onLoadBooks: () => void;
};

export const Books: React.FC<Props> = ({
  items,
  foundResults,
  onLoadBooks,
}) => {
  const renderBooks = items?.map((item, index) => {
    return <Book key={index} book={item} />;
  });

  return (
    <div className={s.books__container}>
      {foundResults && (
        <p className={s.books__amount}>Found {foundResults} results</p>
      )}
      <div className={s.books__wrapper}>{renderBooks}</div>
      <div className={s.books__btn__wrapper}>
        <button onClick={onLoadBooks} className={s.books__btn}>
          Load more
        </button>
      </div>
    </div>
  );
};
