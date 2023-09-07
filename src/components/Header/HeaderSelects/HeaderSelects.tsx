import React from "react";
import s from "../Header.module.scss";

type Props = {
  category: string | undefined;
  setCategory: ((value: string) => void) | undefined;
  sortBy: string | undefined;
  setSortBy: ((value: string) => void) | undefined;
};

export const HeaderSelects: React.FC<Props> = ({
  category,
  setCategory,
  sortBy,
  setSortBy,
}) => {
  return (
    <div className={s.header__selects}>
      <div className={s.header__select}>
        <label className={s.header__label}>Categories</label>
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory?.(e.currentTarget.value)}
        >
          <option value="all">all</option>
          <option value="art">art</option>
          <option value="biography">biography</option>
          <option value="computers">computers</option>
          <option value="history">history</option>
          <option value="medical">medical</option>
          <option value="poetry">poetry</option>
        </select>
      </div>
      <div className={s.header__select}>
        <label className={s.header__label}>Sorting by</label>
        <select
          name="sorting"
          value={sortBy}
          onChange={(e) => setSortBy?.(e.currentTarget.value)}
        >
          <option value="relevance">relevance</option>
          <option value="newest">newest</option>
        </select>
      </div>
    </div>
  );
};
